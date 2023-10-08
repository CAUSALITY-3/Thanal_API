const Product = require("../model/products");
const productMainList = require("../model/productMainList");

export const createProduct = async (data) => {
  const product = await Product.findOneAndUpdate({ name: data.name }, data, {
    upsert: true,
    new: true,
  });
  if (product._id) {
    const {
      _id,
      category,
      name,
      description,
      price,
      image,
      inventory,
      ratings,
    } = product;
    try {
      await productMainList.findOneAndUpdate(
        { type: category, data: { $elemMatch: { name: name } } },
        {
          $set: {
            "data.$.category": category,
            "data.$.inventory": inventory,
            "data.$.productId": _id,
            "data.$.name": name,
            "data.$.description": description,
            "data.$.price": price,
            "data.$.image": image,
            "data.$.ratings": ratings,
          },
        },
        { upsert: true }
      );
    } catch {
      try {
        await productMainList.findOneAndUpdate(
          { type: category },
          {
            $push: {
              data: {
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
          },
          { upsert: true, new: true }
        );
      } catch {
        try {
          await productMainList.findOneAndUpdate(
            { type: category },
            {
              type: category,
              data: [
                {
                  productId: _id,
                  category,
                  name,
                  description,
                  price,
                  image,
                  inventory,
                  ratings,
                },
              ],
            },
            { upsert: true, new: true }
          );
        } catch {
          console.log("product not added to productMainList collection");
        }
      }
    }
  }
  return product;
};

export const getProductMainLits = async () => {
  return await productMainList.find();
};

export const getProductById = async (id) => {
  return await Product.findById(id);
};

export const updateProductById = async (id, body) => {
  const product = await Product.findByIdAndUpdate(
    id,
    { ...body },
    { new: true }
  );
  if (product._id) {
    const {
      _id,
      category,
      name,
      description,
      price,
      image,
      inventory,
      ratings,
    } = product;
    try {
      await productMainList.findOneAndUpdate(
        { type: category, data: { $elemMatch: { name: name } } },
        {
          $set: {
            "data.$.category": category,
            "data.$.inventory": inventory,
            "data.$.productId": _id,
            "data.$.name": name,
            "data.$.description": description,
            "data.$.price": price,
            "data.$.image": image,
            "data.$.ratings": ratings,
          },
        },
        { upsert: true }
      );
    } catch (e) {
      throw e;
    }
  }
  return product;
};

export const deleteProductById = async (id) => {
  const product = await Product.findByIdAndDelete(id, { new: true });
  if (product?._id) {
    const { category } = product;
    try {
      const updatedList = await productMainList.findOneAndUpdate(
        { type: category, data: { $elemMatch: { productId: id } } },
        {
          $pull: {
            data: { productId: id },
          },
        },
        { upsert: true, new: true }
      );
      if (updatedList._id && updatedList.data?.length === 0) {
        await productMainList.findByIdAndDelete(updatedList._id);
      }
    } catch (e) {
      throw e;
    }
  }
  return product;
};

export const updateOrAddField = async (body) => {
  const product = await Product.updateMany(
    {},
    {
      $set: {
        images: body.images,
      },
    },
    { multi: true }
  );

  return product;
};
