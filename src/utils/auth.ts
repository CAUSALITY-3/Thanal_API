import { Injector } from "../lib/injector";
import { UserServices } from "../services/users";
import { refreshUsersCache } from "./usersCache";
require("dotenv").config();

const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID as string;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET as string;
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/thanalApi/auth/google/callback",
      passReqToCallback: true,
    },
    async function (request, accessToken, refreshToken, profile, done) {
      if (profile.email) {
        const payload = {
          name: profile.displayName,
          email: profile.email,
          picture: profile.picture,
        };
        const userServices: UserServices = Injector.get("userServices");
        const upsertUser = await userServices.upsertUser(payload);
        refreshUsersCache();
        return done(null, upsertUser);
      }
      return done(null, profile);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
