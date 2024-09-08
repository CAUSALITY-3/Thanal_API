import express from "express";
import cors from "cors";
import { errorHandler } from "./utils/errorHandler";
import {
  generateAndLoadCache,
  redirect,
  writeCacheToFile,
} from "./utils/redirect";
import { usersCache } from "./utils/usersCache";
import passport from "passport";
import session from "express-session";
import cookieParser from "cookie-parser";
import { Injector } from "./lib/injector";
import { loadCache } from "./utils/loadCache";
const path = require("path");
require("./utils/auth");

export async function initializeServer() {
  console.log("initializeServer");
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

  app.use("/_next/static", express.static(path.join(__dirname, "../static")));
  app.get("/thanal", (req, res) => {
    res.send("Thanal is unning!!!");
  });
  app.get("/writeCache", async (req, res) => {
    const status = await writeCacheToFile();
    res.send(status);
  });
  app.get("/getRedirectCache", async (req, res) => {
    const keys = Object.keys(Injector.get("cache"));
    keys.sort((a, b) => a.localeCompare(b));
    res.send(keys);
  });
  app.get("/generateAndLoadCache", async (req, res) => {
    const status = await generateAndLoadCache();
    res.send(status);
  });
  app.get("/loadCache", async (req, res) => {
    await loadCache();
    res.send("Loaded");
  });
  app.get("/getUsersCache", async (req, res) => {
    const data = await usersCache();
    res.send(data);
  });
  app.use(async (req, res, next) => {
    if (!req.path.startsWith("/thanalApi")) {
      await redirect(req, res);
    }
    next();
  });
  app.use("/thanalApi/products", require("./routes/products"));
  app.use("/thanalApi/features", require("./routes/productFeatures"));
  app.use("/thanalApi/auth", require("./routes/authentication"));
  app.use("/thanalApi/users", require("./routes/users"));
  app.use("/thanalApi/images", require("./routes/images"));
  app.use("/thanalApi/payments", require("./routes/payments"));
  app.use("/thanalApi/upload", require("./routes/uploads"));
  app.use(errorHandler);

  app.listen(port, () => {
    return console.log(`Server listening on Port: ${port}`);
  });
}
