import { Product } from "../model/products";
import { productMainList } from "../model/productMainList";
import { updateFeature } from "./productFeatures";

export async function getProductById(id) {
  return await Product.findById(id);
}

export async function getProductMainList() {
  return await productMainList.find();
}

export async function createProduct(data) {
  const product = await Product.findOneAndUpdate({ name: data.name }, data, {
    upsert: true,
    new: true,
  });
  if (product._id) {
    await featureUpdate(product, true, false);
    await updateProductFromMainList(product);
  }
  return product;
}

export async function findProductFromMainList(product) {
  const { family, category, name } = product;
  return await productMainList.find({
    type: category,
    [`data.${family}.name`]: name,
  });
}

export async function removeProductFromMainList(product) {
  const { name, category, family } = product;
  return await productMainList.findOneAndUpdate(
    { type: category, [`data.${family}.name`]: name },
    { $unset: { [`data.${family}`]: {} }, updatedAt: new Date() },
    { new: true }
  );
}

export async function updateProductFromMainList(product) {
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
}

export async function updateProductById(id, body) {
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
}

export async function deleteProductById(id) {
  const product = await Product.findByIdAndDelete(id, { new: true });
  if (product?._id) {
    try {
      await featureUpdate(product, false, true);
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
}

export async function featureUpdate(product, add, remove) {
  if (product?.features?.length) {
    const { family, _id, features } = product;
    const data = {
      family,
      id: _id,
      addingFeatures: add ? [features] : [],
      removingFeatures: remove ? [features] : [],
    };
    await updateFeature(data);
  }
}

export async function updateOrAddField(body) {
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
}
