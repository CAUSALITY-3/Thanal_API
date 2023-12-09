import express from "express";
import { asyncHandler } from "../utils/utilFunctions";
import { UserServices } from "../services/users";
import { Injector } from "../lib/injector";

console.log("userRoute");
const router = express.Router();

const userServices: UserServices = Injector.get("userServices");

router.post(
  "/new",
  asyncHandler(async (req, res) => {
    const user = await userServices.createUser(req.body);
    res.send(user);
  })
);

router.put(
  "/update",
  asyncHandler(async (req, res) => {
    const id = req.query.id || req.body.id;
    const user = await userServices.updateUser(id, req.body);
    res.send(user);
  })
);
module.exports = router;
