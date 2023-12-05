const express = require("express");
import { asyncHandler } from "../utils/utils";
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
  updateProductFromMainList,
} from "../services/products";

router.post(
  "/product",
  asyncHandler(async (req, res) => {
    const product = await createProduct(req.body);
    res.send(product);
  })
);

router.get(
  "/productMainList",
  asyncHandler(async (req, res) => {
    const product = await getProductMainList();
    res.send(product);
  })
);

router.get(
  "/findProductFromMainList",
  asyncHandler(async (req, res) => {
    const product = await findProductFromMainList(req.body);
    res.send(product);
  })
);

router.get(
  "/updateProductFromMainList",
  asyncHandler(async (req, res) => {
    const product = await updateProductFromMainList(req.body);
    res.send(product);
  })
);

router.get(
  "/removeProductFromMainList",
  asyncHandler(async (req, res) => {
    const product = await removeProductFromMainList(req.body);
    res.send(product);
  })
);

router
  .route("/product")
  .get(
    asyncHandler(async (req, res) => {
      const id = req.query.id || req.body.id;
      const product = await getProductById(id);
      res.send(product);
    })
  )
  .put(
    asyncHandler(async (req, res) => {
      const id = req.query.id || req.body.id;
      const product = await updateProductById(id, req.body);
      res.send(product);
    })
  )
  .delete(
    asyncHandler(async (req, res) => {
      const id = req.query.id || req.body.id;
      const product = await deleteProductById(id);
      res.send(product);
    })
  );

router.put(
  "/updateOrAddField",
  asyncHandler(async (req, res) => {
    const result = await updateOrAddField(req.body);
    res.send(result);
  })
);

module.exports = router;
