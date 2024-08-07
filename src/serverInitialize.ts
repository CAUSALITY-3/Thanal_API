import express from "express";
import cors from "cors";
import { errorHandler } from "./utils/errorHandler";

console.log("initializeServer");

export async function initializeServer() {
  const app = express();
  const port = process.env.PORT || 5000;

  app.use(cors());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.get("/thanal", (req, res)=> {
    res.send("Thanal is unning!!!")
  })
  app.use("/products", require("./routes/products"));
  app.use("/features", require("./routes/productFeatures"));
  app.use("/authenticate", require("./routes/authentication"));
  app.use("/users", require("./routes/users"));
  app.use("/images", require("./routes/images"));
  app.use("/payments", require("./routes/payments"));

  app.use(errorHandler);

  app.listen(port, () => {
    return console.log(`Server listening on Port: ${port}`);
  });
}
