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

router.get(
  "/getAllUnderFamily",
  asyncHandler(async (req, res) => {
    const family = req.query.family || req.body.family;
    const product = await productService.getAllUnderFamily(family);
    res.send(product);
  })
);

router.post(
  "/getProductByIds",
  asyncHandler(async (req, res) => {
    console.log("req.body", req.body);
    const products = await productService.getProductByIds(req.body);
    res.send(products);
  })
);

router
  .route("/product")
  .get(
    asyncHandler(async (req, res) => {
      const id = req.query.id || req.body.id;
      console.log("sasas", id);
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

router.get(
  "/getProductFullList",
  asyncHandler(async (req, res) => {
    const result = await productService.getProductFullList();
    res.send(result);
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
