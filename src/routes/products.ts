const express = require("express");
const router = express.Router();
import {
  createProduct,
  getProductMainList,
  getProductById,
  updateProductById,
  deleteProductById,
  updateOrAddField,
  findProductFromMainList,
  removeProductFromMainList,
  updateProductFromMainList
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
    try {
      const product = await getProductMainList();
      res.send(product);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }
);

router.get(
  "/findProductFromMainList",
  async (req, res) => {
    const product = await findProductFromMainList(req.body);
    res.send(product);
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

router.get(
  "/updateProductFromMainList",
  async (req, res) => {
    const product = await updateProductFromMainList(req.body);
    res.send(product);
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

router.get(
  "/removeProductFromMainList",
  async (req, res) => {
    const product = await removeProductFromMainList(req.body);
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

router.put("/updateOrAddField", async (req, res) => {
  const result = await updateOrAddField(req.body);
  res.send(result);
});

module.exports = router;
