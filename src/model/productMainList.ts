const mongoose = require("mongoose");

const productMainListSchema = new mongoose.Schema({
  type: {
    type: String,
  },
  data: {
    type: Map,
    of: {
      productId: String,
      category: {
        type: String,
        required: true,
      },
      priority: Number,
      name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
      },
      description: {
        type: String,
        required: true,
        trim: true,
      },
      image: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        min: 0,
        required: true,
      },
      inventory: {
        type: Number,
        min: 0,
        required: true,
      },
      ratings: {
        average: Number,
        count: Number,
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

const productMainList = mongoose.model(
  "ProductMainList",
  productMainListSchema
);

module.exports = productMainList;
