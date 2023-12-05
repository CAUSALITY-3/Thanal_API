const express = require("express");
const router = express.Router();
import { asyncHandler } from "../utils/utils";
import { addFeature, updateFeature } from "../services/productFeatures";

router.post(
  "/addFeature",
  asyncHandler(async (req, res) => {
    const feature = await addFeature(req.body);
    res.send(feature);
  })
);

router.post(
  "/updateFeature",
  asyncHandler(async (req, res) => {
    const feature = await updateFeature(req.body);
    res.send(feature);
  })
);

module.exports = router;
