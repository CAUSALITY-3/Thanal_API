import express from "express";
import { asyncHandler } from "../utils/utilFunctions";
import { Injector } from "../lib/injector";
import { AuthenticationServices } from "../services/authentication";
import passport from "passport";

console.log("userRoute");
const router = express.Router();

const authenticationServices: AuthenticationServices = Injector.get(
  "authenticationServices"
);

router.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
  "/getUserDetails",
  asyncHandler(async (req, res) => {
    const { updatedAt, email } = req.query;
    const user = await authenticationServices.getUserDetails({
      updatedAt,
      email,
    });
    res.cookie("user", JSON.stringify(user.cache));
    res.send(user);
  })
);
// router.get(
//   "/google/callback",
//   passport.authenticate("google", {
//     successRedirect: "/",
//     failureRedirect: "/contacts",
//   })
// );
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    try {
      const user = req["user"];
      console.log("$$$$$$$", { user });
      res.cookie("user", JSON.stringify(user));
      res.redirect("/logedIn");
    } catch (err) {
      console.log("*******", { err });
    }
    // Generate a JWT token
  }
);

module.exports = router;
