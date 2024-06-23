import { Log } from "../lib/log";

console.log("UserServices");

export class UserServices {
  constructor(private User) {}

  @Log()
  public async createUser(data) {
    return await this.User.create(data);
  }

  @Log()
  public async upsertUser(data) {
    console.log("hasan", data)
    if(!data?.email) throw "User email not provided"
    const {name, email, picture: profilePic} = data;
    return await this.User.findOneAndUpdate({email}, {lastLoggedIn: new Date(), updatedAt: new Date(), name, email, profilePic}, { upsert: true, new: true });
  }

  @Log()
  public async updateUserByQuery(query, data) {
    return await this.User.findOneAndUpdate(query, {updatedAt: new Date(), ...data}, { new: true });
  }

  @Log()
  public async getUserByQuery(query) {
    const result = await this.User.find(query);
    return result.length ? result[0] : null;
  }

  @Log()
  public async getAllUsers() {
    return await this.User.find();
  }

  @Log()
  public async getUserById(id) {
    return await this.User.findById(id);
  }
}
