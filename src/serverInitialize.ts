import express from "express";
import cors from "cors";

console.log("initializeServer");

export async function initializeServer() {
  const app = express();
  const port = process.env.PORT || 5000;

  app.use(cors());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use("/products", require("./routes/products"));
  app.use("/features", require("./routes/productFeatures"));

  app.listen(port, () => {
    return console.log(`Server listening on Port: ${port}`);
  });
}
