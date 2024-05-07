import express from "express";
import { asyncHandler } from "../utils/utilFunctions";
import { ImageServices } from "../services/images";
import { Injector } from "../lib/injector";
import { AuthenticationServices } from "../services/authentication";
const fs = require("fs");
const path = require("path");

console.log("userRoute");
const router = express.Router();

const imageServices: ImageServices = Injector.get("imageServices");
const authenticationServices: AuthenticationServices = Injector.get(
  "authenticationServices"
);

router.get(
  "/getImage",
  asyncHandler(async (req, res) => {
    const path = req.query.path;
    fs.readFile(`../images/${path}`, (err, data) => {
        if (err) {
          return res.status(500).send('Internal Server Error');
        }
        // Set the appropriate Content-Type header for the image
        res.contentType('image/jpeg'); // Adjust this according to the type of image

        // Send the image data in the response
        res.send(data);
    });
  })
);

router.get(
  "/getImageNames",
  asyncHandler(async (req, res) => {
    const path = req.query.path;
    fs.readdir(`../images/${path}`, (err, files) => {
        if (err) {
          return res.status(500).send('Internal Server Error');
        }
        res.send(files);
    });
  })
);

module.exports = router;
