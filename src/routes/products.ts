import express from "express";
import { asyncHandler } from "../utils/utilFunctions";
import { ProductServices } from "../services/products";
import { Injector } from "../lib/injector";

console.log("productRoute");
const router = express.Router();

const productService: ProductServices = Injector.get("productService");

router.post(
  "/product",
  asyncHandler(async (req, res) => {
    const product = await productService.createProduct(req.body);
    res.send(product);
  })
);

router.get(
  "/productMainList",
  asyncHandler(async (req, res) => {
    const product = await productService.getProductMainList();
    res.send(product);
  })
);

router.get(
  "/findProductFromMainList",
  asyncHandler(async (req, res) => {
    const product = await productService.findProductFromMainList(req.body);
    res.send(product);
  })
);

router.get(
  "/updateProductFromMainList",
  asyncHandler(async (req, res) => {
    const product = await productService.updateProductFromMainList(req.body);
    res.send(product);
  })
);

router.get(
  "/removeProductFromMainList",
  asyncHandler(async (req, res) => {
    const product = await productService.removeProductFromMainList(req.body);
    res.send(product);
  })
);

router
  .route("/product")
  .get(
    asyncHandler(async (req, res) => {
      const id = req.query.id || req.body.id;
      const product = await productService.getProductById(id);
      res.send(product);
    })
  )
  .put(
    asyncHandler(async (req, res) => {
      const id = req.query.id || req.body.id;
      const product = await productService.updateProductById(id, req.body);
      res.send(product);
    })
  )
  .delete(
    asyncHandler(async (req, res) => {
      const id = req.query.id || req.body.id;
      const product = await productService.deleteProductById(id);
      res.send(product);
    })
  );

router.put(
  "/updateOrAddField",
  asyncHandler(async (req, res) => {
    const result = await productService.updateOrAddField(req.body);
    res.send(result);
  })
);
module.exports = router;
