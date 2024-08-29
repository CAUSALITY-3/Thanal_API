import express from "express";
import cors from "cors";
import { errorHandler } from "./utils/errorHandler";
import { loadCache } from "./utils/loadCache";
import { redirect, writeCacheToFile } from "./utils/redirect";
import { usersCache } from "./utils/usersCache";
import passport from "passport";
import session from "express-session";
import cookieParser from "cookie-parser";
require("./utils/auth");

export async function initializeServer() {
  let cache = (await loadCache()) || {};
  console.log("initializeServer", Object.keys(cache).length);
  const app = express();
  app.use(cookieParser());
  app.use(
    session({
      secret: "thanal",
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: 60 * 24 * 60 * 60 * 1000, // 60 days in milliseconds
      },
    })
  );
  const port = process.env.PORT || 5000;
  app.use(passport.initialize());
  app.use(cors());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  // app.use((req, res, next) => {

  //   next();
  // });

  app.get("/thanal", (req, res) => {
    res.send("Thanal is unning!!!");
  });
  app.get("/writeCache", async (req, res) => {
    await writeCacheToFile(cache, res);
  });
  app.get("/getUsersCache", async (req, res) => {
    const data = await usersCache();
    res.send(data);
  });
  app.use(async (req, res, next) => {
    if (!req.path.startsWith("/thanalApi")) {
      await redirect(req, res, cache);
    }
    next();
  });
  app.use("/thanalApi/products", require("./routes/products"));
  app.use("/thanalApi/features", require("./routes/productFeatures"));
  app.use("/thanalApi/auth", require("./routes/authentication"));
  app.use("/thanalApi/users", require("./routes/users"));
  app.use("/thanalApi/images", require("./routes/images"));
  app.use("/thanalApi/payments", require("./routes/payments"));

  app.use(errorHandler);

  app.listen(port, () => {
    return console.log(`Server listening on Port: ${port}`);
  });
}
