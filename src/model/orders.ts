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
  deliveryAddress: {
    type: {
      name: String,
      houseName: {
        type: String,
        required: true,
      },
      landmark: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        default: process.env.DEFAULT_DISTRICT || "",
      },
      pincode: {
        type: Number,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
    },
    required: true,
  },
  orderDate: {
    type: Date,
    default: new Date(),
  },
});

export const Order = mongoose.model("Order", orderSchema);
