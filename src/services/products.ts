import { ProductFeatureServices } from "./productFeatures";
import { Log } from "../lib/log";

console.log("ProductServices");

export class ProductServices {
  constructor(
    private Product,
    private productMainList,
    private ProductFeatureServices: ProductFeatureServices
  ) {}

  @Log
  public async getProductById(id) {
    const product = await this.Product.findById(id);
    if (product?._id) return product;
    return "Product is no more available.";
  }

  @Log
  async getProductMainList() {
    return await this.productMainList.find();
  }

  @Log
  async createProduct(data) {
    const product = await this.Product.findOneAndUpdate(
      { name: data.name },
      data,
      {
        upsert: true,
        new: true,
      }
    );
    if (product?._id) {
      await Promise.all([
        this.featureUpdate(product, true, false),
        this.updateProductFromMainList(product),
      ]);
    }
    return product;
  }

  @Log
  async findProductFromMainList(product) {
    const { family, category, name } = product;
    return await this.productMainList.find({
      type: category,
      [`data.${family}.name`]: name,
    });
  }

  @Log
  async removeProductFromMainList(product) {
    const { name, category, family } = product;
    return await this.productMainList.findOneAndUpdate(
      { type: category, [`data.${family}.name`]: name },
      { $unset: { [`data.${family}`]: {} }, updatedAt: new Date() },
      { new: true }
    );
  }

  @Log
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

    return await this.productMainList.findOneAndUpdate(
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
  }

  @Log
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

  @Log
  async deleteProductById(id) {
    const product = await this.Product.findByIdAndDelete(id, { new: true });
    if (product?._id) {
      await this.featureUpdate(product, false, true);
      const updatedList = await this.removeProductFromMainList(product);
      const numberOfProducts = updatedList?.data?.keys()
        ? Array.from(updatedList.data.keys()).length
        : 0;
      if (updatedList._id && !numberOfProducts) {
        await this.productMainList.findByIdAndDelete(updatedList._id);
      }
    }
    return product;
  }

  @Log
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

  @Log
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
}
