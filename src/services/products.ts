import { ProductFeatureServices } from "./productFeatures";
import { Log } from "../lib/log";
import { productMainList } from "../model/productMainList";
import { Product as ProductModel } from "../model/products";
import { Types } from "mongoose";
import { Injector } from "../lib/injector";
import { safelyGetFromCache } from "../utils/utilFunctions";

console.log("ProductServices");

export class ProductServices {
  constructor(
    private Product: typeof ProductModel,
    private ProductMainList: typeof productMainList,
    private ProductFeatureServices: ProductFeatureServices
  ) {}

  @Log()
  public async getProductById(id) {
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    const product = await this.Product.findById(id);
    if (product?._id) return product;
    return "Product is no more available.";
  }

  @Log()
  public async getProductByIds(body) {
    return await this.Product.find({ _id: { $in: body.ids } });
  }

  @Log()
  async getProductMainList() {
    const cachedMainList = safelyGetFromCache("productMainListCache");
    if (cachedMainList) return cachedMainList;
    return await this.updateProductMainList();
  }

  @Log()
  async updateProductMainList() {
    const productMainList = await this.ProductMainList.find();
    Injector.update(productMainList, "productMainListCache");
    return productMainList;
  }

  @Log()
  async getAllProducts() {
    return await this.Product.find({}, { family: 1, _id: 1, name: 1 });
  }

  @Log()
  async getAllUnderFamily(family) {
    return await this.Product.find({ family });
  }

  @Log()
  async createProduct(data) {
    const product = await this.Product.create(data);
    if (product?._id) {
      await Promise.all([
        this.featureUpdate(product, true, false),
        this.updateProductFromMainList(product),
      ]);
    }
    return product;
  }

  @Log()
  async findProductFromMainList(product) {
    const { family, category, name } = product;
    return await this.ProductMainList.find({
      type: category,
      [`data.${family}.name`]: name,
    });
  }

  @Log()
  async removeProductFromMainList(product) {
    const { name, category, family } = product;
    return await this.ProductMainList.findOneAndUpdate(
      { type: category, [`data.${family}.name`]: name },
      { $unset: { [`data.${family}`]: {} }, updatedAt: new Date() },
      { new: true }
    );
  }

  @Log()
  async updateProductFromMainList(product) {
    const {
      _id,
      category,
      name,
      description,
      price,
      image,
      stock,
      ratings,
      family,
    } = product;

    const updatedList = await this.ProductMainList.findOneAndUpdate(
      { type: category },
      {
        $set: {
          [`data.${family}`]: {
            productId: _id,
            category,
            name,
            description,
            price,
            image,
            stock,
            ratings,
          },
        },
        updatedAt: new Date(),
      },
      { upsert: true, new: true }
    );
    this.updateProductMainList();
    return updatedList;
  }

  @Log()
  async updateProductById(id, body) {
    const product = await this.Product.findByIdAndUpdate(
      id,
      { ...body },
      { new: true }
    );
    if (product?._id) {
      await this.updateProductFromMainList(product);
    }
    return product;
  }

  @Log()
  async addReviewToProductById(id, review) {
    const productRes = await this.Product.findById(id);
    const product = productRes.toObject();
    if (product?._id) {
      const ratings = {
        average: 0,
        count: 0,
      };
      let totalRating = 0;
      for (const reviewObj of [...product.reviews, review]) {
        // if (reviewObj?.customer?.email === review.customer.email)
        //   return product;
        totalRating += reviewObj.rating;
        ratings.count += 1;
      }
      ratings.average = totalRating / ratings.count;

      const updatedProduct = await this.Product.findByIdAndUpdate(
        id,
        {
          $set: {
            ratings,
            updatedAt: new Date(),
          },
          $push: { reviews: review },
        },
        { new: true }
      );
      if (updatedProduct?._id) {
        await this.updateProductFromMainList(product);
      }
      return product;
    }
  }

  @Log()
  async updateProductsStock(body) {
    const updateApi = async (id, soldStock) => {
      const product = await this.Product.findByIdAndUpdate(
        id,
        { $inc: { stock: -soldStock } },
        { new: true }
      );
      if (product?._id) {
        await this.updateProductFromMainList(product);
      }
      return product.toObject();
    };
    const promises = [];
    for (const id in body) {
      promises.push(updateApi(id, body[id]));
    }

    return await Promise.all(promises);
  }

  @Log()
  async deleteProductById(id) {
    const product = await this.Product.findByIdAndDelete(id, { new: true });
    if (product?._id) {
      await this.featureUpdate(product, false, true);
      const updatedList = await this.removeProductFromMainList(product);
      const numberOfProducts = updatedList?.data?.keys()
        ? Array.from(updatedList.data.keys()).length
        : 0;
      if (updatedList._id && !numberOfProducts) {
        await this.ProductMainList.findByIdAndDelete(updatedList._id);
      }
    }
    return product;
  }

  @Log()
  async featureUpdate(product, add, remove) {
    if (Array.isArray(product?.features) && product.features.length) {
      const { family, _id, features } = product;
      const data = {
        family,
        id: _id,
        addingFeatures: add ? features : [],
        removingFeatures: remove ? features : [],
      };
      await this.ProductFeatureServices.updateFeature(data);
    }
  }

  @Log()
  async updateOrAddField(body) {
    const product = await this.Product.updateMany(
      {},
      {
        $set: {
          images: body.images,
        },
      },
      { multi: true }
    );

    return product;
  }

  @Log()
  async getProductFullList() {
    const mainList = await this.ProductMainList.find().lean();
    const formattedList = mainList.map((list) => {
      return {
        category: list.type,
        products: Object.keys(list.data).map((product) => {
          return {
            name: list.data[product].name,
            family: product,
          };
        }),
      };
    });

    const returnResult: {
      category: string;
      data: {
        family: string;
        products: {
          name: string;
          id: Types.ObjectId;
          image: string;
        }[];
      }[];
    }[] = [];
    for (const list of formattedList) {
      const { category, products } = list;
      const productsUnderFamily = await Promise.all(
        products.map(async (product) => {
          return {
            family: product.family,
            products: await this.getAllUnderFamily(product.family),
          };
        })
      );
      const formattedProductUnderFamily = productsUnderFamily.map((product) => {
        return {
          family: product.family,
          products: product.products.map((product) => {
            return {
              name: product.name,
              id: product._id,
              image: product.image,
            };
          }),
        };
      });

      returnResult.push({ category, data: formattedProductUnderFamily });
    }

    return returnResult;
  }
}
