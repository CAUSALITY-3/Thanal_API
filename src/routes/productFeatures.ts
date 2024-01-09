import express from "express";
import { asyncHandler } from "../utils/utilFunctions";
import { ProductFeatureServices } from "../services/productFeatures";
import { Injector } from "../lib/injector";

console.log("productFeatureRoute");
const router = express.Router();

const productFeatureServices: ProductFeatureServices = Injector.get(
  "productFeatureServices"
);

router.get(
  "/getFeature",
  asyncHandler(async (req, res) => {
    const family = req.query.family || req.body.family;
    const feature = await productFeatureServices.getFeature(family);
    res.send(feature);
  })
);


router.post(
  "/addFeature",
  asyncHandler(async (req, res) => {
    const feature = await productFeatureServices.addFeature(req.body);
    res.send(feature);
  })
);

router.post(
  "/updateFeature",
  asyncHandler(async (req, res) => {
    const feature = await productFeatureServices.updateFeature(req.body);
    res.send(feature);
  })
);
module.exports = router;
