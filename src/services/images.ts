import { Log } from "../lib/log";

console.log("ImageServices");

export class ImageServices {
  constructor() {}

  @Log()
  public async getImage(data) {
    return true;
  }
}
