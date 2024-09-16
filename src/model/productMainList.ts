import mongoose from "mongoose";

console.log("productMainListSchema");
// const productMainListSchema = new mongoose.Schema({
//   type: {
//     type: String,
//   },
//   image: String,
//   data: {
//     type: Object,
//     of: {
//       productId: String,
//       category: {
//         type: String,
//         required: true,
//       },
//       priority: Number,
//       name: {
//         type: String,
//         required: true,
//         trim: true,
//         unique: true,
//       },
//       description: {
//         type: String,
//         required: true,
//         trim: true,
//       },
//       image: {
//         type: String,
//         required: true,
//       },
//       price: {
//         type: Number,
//         min: 0,
//         required: true,
//       },
//       stock: {
//         type: Number,
//         min: 0,
//         required: true,
//       },
//       ratings: {
//         average: Number,
//         count: Number,
//       },
//     },
//   },
//   createdAt: {
//     type: Date,
//     immutable: true,
//     default: () => Date.now(),
//   },
//   updatedAt: {
//     type: Date,
//     default: () => Date.now(),
//   },
// });

const RatingSchema = new mongoose.Schema({
  average: { type: Number, required: true },
  count: { type: Number, required: true },
});

const ProductSchema = new mongoose.Schema({
  productId: { type: mongoose.Types.ObjectId, required: true },
  category: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  stock: { type: Number, required: true },
  ratings: { type: RatingSchema, required: true },
});

const productMainListSchema = new mongoose.Schema({
  _id: { type: mongoose.Types.ObjectId },
  type: { type: String, required: true },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
  data: { type: Map, of: ProductSchema, required: true },
});

export const productMainList = mongoose.model(
  "ProductMainList",
  productMainListSchema
);
