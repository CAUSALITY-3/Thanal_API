import jwt from "jsonwebtoken";
import { Log } from "../lib/log";
import { UserServices } from "./users";

console.log("AuthenticationServices");

export class AuthenticationServices {
  constructor(
    private User: UserServices,
    private tokenSecret: string,
    private refreshTokenSecret: string,
    private tokenExpiry: string,
    private refreshTokenExpiry: string
  ) {
    this.tokenSecret = tokenSecret;
    this.tokenExpiry = tokenExpiry;
    this.refreshTokenSecret = refreshTokenSecret;
    this.refreshTokenExpiry = refreshTokenExpiry;
  }

  @Log()
  public async generateAccessToken(user) {
    return jwt.sign(user, this.tokenSecret, { expiresIn: this.tokenExpiry });
  }

  public verifyAccessToken(token) {
    return jwt.verify(token, this.tokenSecret);
  }

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
}
