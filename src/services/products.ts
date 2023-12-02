const Product = require("../model/products");
const productMainList = require("../model/productMainList");

export const createProduct = async (data) => {
  const product = await Product.findOneAndUpdate({ name: data.name }, data, {
    upsert: true,
    new: true,
  });
  if (product._id) {
    await updateProductFromMainList(product);
  }
  return product;
};

export const getProductMainList = async () => {
  return await productMainList.find();
};

export const findProductFromMainList = async (product) => {
  const { family, category, name } = product;
  return await productMainList.findOneAndUpdate({
    type: category,
    [`data.${family}.name`]: name,
  });
};

export const removeProductFromMainList = async (product) => {
  const { name, category, family } = product;
  return await productMainList.findOneAndUpdate(
    { type: category, [`data.${family}.name`]: name },
    { $unset: { [`data.${family}`]: {} }, updatedAt: new Date() },
    { new: true }
  );
};

export const updateProductFromMainList = async (product) => {
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
    result = await productMainList.findOneAndUpdate(
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
    return err;
    // try {
    //   console.log("cr7")
    //   result = await productMainList.create(
    //     {
    //       type: category,
    //       data: {
    //         Lilly: {
    //           productId: _id,
    //           category,
    //           name,
    //           description,
    //           price,
    //           image,
    //           inventory,
    //           ratings,
    //         }
    //       }
    //     },
    //     { upsert: true, new: true }
    //   );
    // } catch (e) {
    //   console.log("product not added to productMainList collection");
    //   return e;
    // }
  }
  return result;
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
    try {
      await updateProductFromMainList(product);
    } catch (e) {
      throw e;
    }
  }
  return product;
};

export const deleteProductById = async (id) => {
  const product = await Product.findByIdAndDelete(id, { new: true });
  if (product?._id) {
    try {
      const updatedList = await removeProductFromMainList(product);
      const numberOfProducts = updatedList?.data?.keys()
        ? Array.from(updatedList.data.keys()).length
        : 0;
      if (updatedList._id && !numberOfProducts) {
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
