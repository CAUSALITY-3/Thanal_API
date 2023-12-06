import { ProductFeatureServices } from "./productFeatures";

console.log("ProductServices");

export class ProductServices {
  constructor(
    private Product,
    private productMainList,
    private ProductFeatureServices: ProductFeatureServices
  ) {}
  public async getProductById(id) {
    return await this.Product.findById(id);
  }

  async getProductMainList() {
    return await this.productMainList.find();
  }

  async createProduct(data) {
    const product = await this.Product.findOneAndUpdate(
      { name: data.name },
      data,
      {
        upsert: true,
        new: true,
      }
    );
    if (product._id) {
      await this.featureUpdate(product, true, false);
      await this.updateProductFromMainList(product);
    }
    return product;
  }

  async findProductFromMainList(product) {
    const { family, category, name } = product;
    return await this.productMainList.find({
      type: category,
      [`data.${family}.name`]: name,
    });
  }

  async removeProductFromMainList(product) {
    const { name, category, family } = product;
    return await this.productMainList.findOneAndUpdate(
      { type: category, [`data.${family}.name`]: name },
      { $unset: { [`data.${family}`]: {} }, updatedAt: new Date() },
      { new: true }
    );
  }

  async updateProductFromMainList(product) {
    const {
      _id,
      category,
      name,
      description,
      price,
      image,
      inventory,
      ratings,
      family,
    } = product;
    let result;

    try {
      result = await this.productMainList.findOneAndUpdate(
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
              inventory,
              ratings,
            },
          },
          updatedAt: new Date(),
        },
        { upsert: true, new: true }
      );
    } catch (err) {
      console.log(err);
    }
    return result;
  }

  async updateProductById(id, body) {
    const product = await this.Product.findByIdAndUpdate(
      id,
      { ...body },
      { new: true }
    );
    if (product._id) {
      try {
        await this.updateProductFromMainList(product);
      } catch (e) {
        throw e;
      }
    }
    return product;
  }

  async deleteProductById(id) {
    const product = await this.Product.findByIdAndDelete(id, { new: true });
    if (product?._id) {
      try {
        await this.featureUpdate(product, false, true);
        const updatedList = await this.removeProductFromMainList(product);
        const numberOfProducts = updatedList?.data?.keys()
          ? Array.from(updatedList.data.keys()).length
          : 0;
        if (updatedList._id && !numberOfProducts) {
          await this.productMainList.findByIdAndDelete(updatedList._id);
        }
      } catch (e) {
        throw e;
      }
    }
    return product;
  }

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
