import express from "express";
import { asyncHandler } from "../utils/utilFunctions";
import { UserServices } from "../services/users";
import { Injector } from "../lib/injector";
import { AuthenticationServices } from "../services/authentication";

console.log("userRoute");
const router = express.Router();

const userServices: UserServices = Injector.get("userServices");
const authenticationServices: AuthenticationServices = Injector.get(
  "authenticationServices"
);

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

router.get(
  "/getUser",
  asyncHandler(async (req, res) => {
    const id = req.query.id || req.body.id;
    let query;
    if (id) {
      query = { _id: id };
    } else {
      query = req.body;
    }
    const user = await userServices.getUser(query);
    res.send(user);
  })
);

router.get(
  "/getUserById",
  authenticationServices.authorize(),
  asyncHandler(async (req, res) => {
    const id = req.query.id || req.body.id;
    const user = await userServices.getUserById(id);
    res.send(user);
  })
);
module.exports = router;
