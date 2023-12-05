import express from "express";
import cors from "cors";

const productRouter = require("./products");
const featureRouter = require("./productFeatures");

export function expressInitialize() {
  const app = express();
  const port = process.env.PORT || 5000;

  app.use(cors());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use("/products", productRouter);
  app.use("/features", featureRouter);

  app.listen(port, () => {
    return console.log(`Express is listening at port: ${port}`);
  });
}
