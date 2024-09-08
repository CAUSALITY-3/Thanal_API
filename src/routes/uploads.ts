import express from "express";
import { asyncHandler } from "../utils/utilFunctions";
import multer from "multer";
import path from "path";
import { UploadServices } from "../services/uploads";
import { Injector } from "../lib/injector";
import { loadCache } from "../utils/loadCache";

console.log("uploadsRoute");

const uploadServices: UploadServices = Injector.get("uploadServices");
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.post(
  "/uploadStaticFile",
  upload.single("static"),
  asyncHandler(async (req, res) => {
    if (!req.file) {
      res.status(400).send("No file uploaded.");
    }
    await uploadServices.uploadZip(req.file);
    res.send("File uploaded and unzipped successfully");
  })
);

router.post(
  "/uploadCacheFile",
  upload.single("cacheData"),
  asyncHandler(async (req, res) => {
    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }
    await uploadServices.uploadCacheFile(req.file);
    res.send("File uploaded, updating cacheData.json file");
  })
);

router.post(
  "/uploadAndLoadCacheFile",
  upload.single("cacheData"),
  asyncHandler(async (req, res) => {
    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }
    await uploadServices.uploadCacheFile(req.file, true);
    res.send(
      "File uploaded, updating cacheData.json file and loading cache in progress"
    );
  })
);

module.exports = router;
