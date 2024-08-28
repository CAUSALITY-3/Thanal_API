import { Injector } from "../lib/injector";
import { Log } from "../lib/log";
import { UserServices } from "./users";
import passport from "passport";
const GoogleStrategy = require("passport-google-oauth2").Strategy;

console.log("AuthenticationServices");

export class AuthenticationServices {
  constructor(
    private User: UserServices,
    private clientID: string,
    private clientSecret: string,
    private callbackURL: string
  ) {
    this.clientID = clientID;
    this.clientSecret = clientSecret;
    this.callbackURL = callbackURL;
  }

  @Log()
  public async generateAccessToken(user) {}

  public verifyAccessToken(token) {}

  public authorize() {
    return (req, res, next) => {
      const body = req.body;
      try {
        const data = this.verifyAccessToken(body.token);
        req.user = data;
        next();
      } catch (error) {
        next();
      }
    };
  }

  @Log()
  public async getUserDetails(data) {
    const returnData = {
      newData: false,
      loginRequired: false,
      cache: null,
    };
    try {
      const { email, updatedAt } = data;
      const usersCache = Injector.get("usersCache");
      const cache = usersCache[email];
      if (
        cache &&
        new Date(cache.updatedAt).getTime() === new Date(updatedAt).getTime()
      ) {
        returnData.cache = cache;
        return returnData;
      }
      const userServices: UserServices = Injector.get("userServices");
      const user = await userServices.getUserByQuery({ email });
      if (user.email) {
        usersCache[email] = user;
        Injector.update(usersCache, "usersCache");
        returnData.newData = true;
        returnData.cache = user;
        return returnData;
      }
      returnData.loginRequired = true;
      return returnData;
    } catch (error) {
      console.log("Error while getting user details", error);
      returnData.loginRequired = true;
      return returnData;
    }
  }

  public googleLogin() {
    return passport.authenticate("google", { scope: ["email", "profile"] });
  }

  public googleCallback() {
    passport.authenticate("google", {
      successRedirect: "/",
      failureRedirect: "/contacts",
    });
  }
}
