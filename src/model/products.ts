import mongoose from "mongoose";

console.log("productSchema");
const productSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  priority: {
    type: Number,
    default: 1,
  },
  name: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  family: {
    type: String,
    required: true,
    trim: true,
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
  images: {
    type: [String],
    default: [],
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
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
  videoUrl: {
    type: String,
  },
  features: {
    type: Array,
    of: {
      type: Object,
      of: {
        type: String,
        value: String,
      },
    },
  },
  ratings: {
    average: {
      type: Number,
      default: 0,
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  reviews: [
    {
      customer: String,
      rating: Number,
      comment: String,
      reviewDate: Date,
    },
  ],
});

export const Product = mongoose.model("Product", productSchema);
