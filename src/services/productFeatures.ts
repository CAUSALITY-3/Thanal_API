import { productFeatures } from "../model/productFeatures";
import { dbOperatorData } from "../utils/utils";

export async function addFeature(data) {
  const { family, features } = data;
  const response = await productFeatures.create({ family, features });
  return response;
}

export async function updateFeature(data) {
  const { family, id, removingFeatures, addingFeatures } = data;
  const response = await productFeatures.findOneAndUpdate(
    { family },
    {
      $pull: dbOperatorData(removingFeatures, id),
      $addToSet: dbOperatorData(addingFeatures, id),
    },
    { upsert: true, new: true }
  );
  return response;
}
