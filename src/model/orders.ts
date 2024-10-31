import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  productImage: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  price: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: "Waiting for seller approval",
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
});

const orderSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    ref: "User",
    required: true,
  },
  orderItems: [orderItemSchema],
  totalPrice: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: "In progress",
  },
  orderDate: {
    type: Date,
    default: new Date(),
  },
});

export const Order = mongoose.model("Order", orderSchema);
