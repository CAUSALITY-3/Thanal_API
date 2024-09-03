import mongoose from "mongoose";

console.log("userSchema");

const addressSchema = new mongoose.Schema({
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
  pinCode: {
    type: Number,
    required: true,
  },
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  phone: {
    type: String,
    index: true,
    unique: true,
  },
  profilePic: String,
  password: {
    type: String,
  },
  address: addressSchema,
  deliveryAddress: {
    type: [{ name: String, address: addressSchema, phone: String }],
    default: [],
  },
  profilePicture: String,
  orders: {
    type: [String],
    default: [],
  },
  wishlists: {
    type: [String],
    default: [],
  },
  bag: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  lastLoggedIn: {
    type: Date,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});

export const User = mongoose.model("User", userSchema);
