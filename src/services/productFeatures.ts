const productFeatures = require("../model/productFeatures");

export const addFeature = async (data) => {
  const { family, features } = data;
  const response = await productFeatures.create({ family, features });
  return response;
};

export const updateFeature = async (data) => {
  const { family, id, removingFeatures, addingFeatures } = data;
  const reducedData = (data) =>
    data.reduce((acc, obj) => {
      acc[`features.${obj.type}.${obj.value}`] = id;
      return acc;
    }, {});
  const response = await productFeatures.findOneAndUpdate(
    { family },
    {
      $pull: reducedData(removingFeatures),
      $addToSet: reducedData(addingFeatures),
    },
    { new: true }
  );
  return response;
};
