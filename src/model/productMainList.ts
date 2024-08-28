import mongoose from "mongoose";

console.log("productMainListSchema");
const productMainListSchema = new mongoose.Schema({
  type: {
    type: String,
  },
  image: String,
  data: {
    type: Object,
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
      stock: {
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

export const productMainList = mongoose.model(
  "ProductMainList",
  productMainListSchema
);
