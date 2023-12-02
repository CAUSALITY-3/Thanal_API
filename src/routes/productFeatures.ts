const express = require("express");
const router = express.Router();
import { addFeature, updateFeature } from "../services/productFeatures";

router.post(
  "/addFeature",
  async (req, res) => {
    const feature = await addFeature(req.body);
    res.send(feature);
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

router.post(
  "/updateFeature",
  async (req, res) => {
    const feature = await updateFeature(req.body);
    res.send(feature);
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

module.exports = router;
