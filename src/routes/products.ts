const express = require("express");
const router = express.Router();
import {
  createProduct,
  getProductMainLits,
  getProductById,
  updateProductById,
  deleteProductById
} from "../services/products";

router.post(
  "/product",
  async (req, res) => {
    const product = await createProduct(req.body);
    res.send(product);
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

router.get(
  "/productMainList",
  async (req, res) => {
    const product = await getProductMainLits();
    res.send(product);
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

router
  .route("/product")
  .get(async (req, res) => {
    const id = req.query.id || req.body.id;
    const product = await getProductById(id);
    res.send(product);
  })
  .put(async (req, res) => {
    const id = req.query.id || req.body.id;
    const product = await updateProductById(id, req.body);
    res.send(product);
  })
  .delete(async (req, res) => {
    const id = req.query.id || req.body.id;
    const product = await deleteProductById(id);
    res.send(product);
  });

module.exports = router;
