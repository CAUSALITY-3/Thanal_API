const mongoose = require("mongoose");

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
    trim: true,
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
  inventory: {
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
  features: { type: mongoose.Schema.Types.Mixed },
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

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
