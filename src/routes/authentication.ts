import express from "express";
import { asyncHandler } from "../utils/utilFunctions";
import { Injector } from "../lib/injector";
import { AuthenticationServices } from "../services/authentication";

console.log("userRoute");
const router = express.Router();

const authenticationServices: AuthenticationServices = Injector.get(
  "authenticationServices"
);

router.post(
  "/new",
  asyncHandler(async (req, res) => {
    const user = await authenticationServices.generateAccessToken(req.body);
    res.send(user);
  })
);

module.exports = router;
