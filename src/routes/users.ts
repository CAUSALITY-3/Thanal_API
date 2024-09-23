import express from "express";
import { asyncHandler } from "../utils/utilFunctions";
import { UserServices } from "../services/users";
import { Injector } from "../lib/injector";
import { AuthenticationServices } from "../services/authentication";
import { updateUsersCache } from "../utils/usersCache";

console.log("userRoute");
const router = express.Router();

const userServices: UserServices = Injector.get("userServices");
const authenticationServices: AuthenticationServices = Injector.get(
  "authenticationServices"
);

router.use((req, res, next) => {
  if (["PUT", "POST"].includes(req.method)) {
    // Get the latest cookie
    res["refreshCacheAndSend"] = (user) => {
      console.log("refreshCacheAndSend", user, { SameSite: "none" });
      updateUsersCache(user);
      res.cookie("user", JSON.stringify(user));
      res.send(user);
    };
  }

  next();
});

router.post(
  "/new",
  asyncHandler(async (req, res) => {
    const user = await userServices.createUser(req.body);
    res.refreshCacheAndSend(user);
  })
);

router.post(
  "/upsertUser",
  asyncHandler(async (req, res) => {
    const user = await userServices.upsertUser(req.body);
    res.refreshCacheAndSend(user);
  })
);

router.put(
  "/update",
  asyncHandler(async (req, res) => {
    const id = req.query.id || req.body.id;
    const email = req.query.email || req.body.email;
    let queryData: { email?: string; id?: string } = { id };
    if (email) {
      queryData = { email };
    }
    const user = await userServices.updateUserByQuery(queryData, req.body);
    res.refreshCacheAndSend(user);
  })
);

router.post(
  "/addToBag",
  asyncHandler(async (req, res) => {
    const email = req.query.email || req.body.email;
    console.log("&&*&*&*&*&*&");
    const queryData: { email?: string } = { email };

    const user = await userServices.addToBag(queryData, req.body);
    res.refreshCacheAndSend(user);
  })
);

router.get(
  "/getUserByEmail",
  asyncHandler(async (req, res) => {
    const email = req.query.email || req.body.email;
    const user = await userServices.getUserByQuery({ email });
    res.send(user);
  })
);

router.get(
  "/getAllUsers",
  asyncHandler(async (req, res) => {
    const users = await userServices.getAllUsers();
    res.send(users);
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
