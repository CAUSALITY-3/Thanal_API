import express from "express";
require("dotenv").config();
console.log(process.env.HELLO);
const Product = require("./model/products");
const app = express();
const port = 5000;
const cors = require('cors');

const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

mongoose.connect("mongodb://127.0.0.1:27017/thanal");
console.log("sasi");

app.use(cors());
app.use(express.json());
app.post(
  "/products",
  async (req, res) => {
    console.log("sasi", req.body);
    const product = await Product.findOneAndUpdate({name: req.body.name}, req.body, {upsert: true})
    // const product = await Product.create(req.body);
    res.send(product);
    console.log(product);
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);
app.get(
  "/products",
  async (req, res) => {
    console.log("sasi", req.body);
    const product = await Product.find()
    // const product = await Product.create(req.body);
    res.send(product);
    console.log(product);
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
