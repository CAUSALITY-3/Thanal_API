const mongoose = require("mongoose");

const productFeatureSchema = new mongoose.Schema({
  family: {
    type: String,
    required: true,
    unique: true,
  },
  features: {
    type: Object,
    of: {
      type: Object,
      of: {
        type: [String],
      },
    },
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});

const productFeatures = mongoose.model("productFeatures", productFeatureSchema);

module.exports = productFeatures;
