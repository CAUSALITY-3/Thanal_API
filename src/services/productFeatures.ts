import { Log } from "../lib/log";
import { dbOperatorData } from "../utils/utilFunctions";

console.log("ProductFeatureServices");

export class ProductFeatureServices {
  constructor(private productFeatures) {}

  @Log
  async addFeature(data) {
    const { family, features } = data;
    const response = await this.productFeatures.create({ family, features });
    return response;
  }

  @Log
  async updateFeature(data) {
    const { family, id, removingFeatures, addingFeatures } = data;
    const response = await this.productFeatures.findOneAndUpdate(
      { family },
      {
        $pull: dbOperatorData(removingFeatures, id),
        $addToSet: dbOperatorData(addingFeatures, id),
      },
      { upsert: true, new: true }
    );
    return response;
  }
}
