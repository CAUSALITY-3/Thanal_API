import mongoose from "mongoose";

console.log("userSchema");

const addressSchema = new mongoose.Schema({
  houseName: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    default: process.env.DEFAULT_CITY || "",
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
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: String,
  phone: {
    type: String || Number,
    required: true,
    index: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: addressSchema,
  profilePicture: String,
  orders: {
    type: [String],
    default: [],
  },
  wishlists: {
    type: [String],
    default: [],
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

export const User = mongoose.model("User", userSchema);
