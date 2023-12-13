import { Log } from "../lib/log";

console.log("UserServices");

export class UserServices {
  constructor(private User) {}

  @Log()
  public async createUser(data) {
    return await this.User.create(data);
  }

  @Log()
  public async updateUser(id, data) {
    return await this.User.findByIdAndUpdate(id, data, { new: true });
  }

  @Log()
  public async getUser(query) {
    return await this.User.find(query);
  }

  @Log()
  public async getUserById(id) {
    return await this.User.findById(id);
  }
}
