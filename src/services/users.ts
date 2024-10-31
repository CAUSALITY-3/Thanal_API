import { Injector } from "../lib/injector";
import { Log } from "../lib/log";
import { User as UserModel } from "../model/user";

console.log("UserServices");

export class UserServices {
  constructor(private User: typeof UserModel) {}

  @Log()
  public async createUser(data) {
    return await this.User.create(data);
  }

  @Log()
  public async upsertUser(data) {
    console.log("hasan", data);
    if (!data?.email) throw "User email not provided";
    const { name, email, picture: profilePic } = data;
    return await this.User.findOneAndUpdate(
      { email },
      {
        lastLoggedIn: new Date(),
        updatedAt: new Date(),
        name,
        email,
        profilePic,
      },
      { upsert: true, new: true }
    );
  }

  @Log()
  public async updateUserByQuery(query, data) {
    return await this.User.findOneAndUpdate(
      query,
      { updatedAt: new Date(), ...data },
      { new: true }
    );
  }

  @Log()
  public async updateUserOrder(query, orderId, orderItems) {
    const usersCache = Injector.get("usersCache");
    const userdata = usersCache[query.email];
    let bag = userdata.bag;
    if (
      (Object.keys(orderItems).length === 1 &&
        userdata.bag.includes(Object.keys(orderItems)[0])) ||
      Object.keys(orderItems).length > 1
    ) {
      bag = [];
    }
    if (userdata.orders.includes(orderId)) return userdata;
    const user = await this.User.findOneAndUpdate(
      query,
      { $push: { orders: orderId }, $set: { bag }, updatedAt: new Date() },
      { new: true }
    );
    usersCache[user.email] = user;
    Injector.update(usersCache, "usersCache");
    return user;
  }

  @Log()
  public async addToBag(query, data) {
    const usersCache = Injector.get("usersCache");
    const userdata = usersCache[query.email];
    if (userdata.bag.includes(data.productId)) return userdata;
    const user = await this.User.findOneAndUpdate(
      query,
      { $push: { bag: data.productId }, updatedAt: new Date() },
      { new: true }
    );
    usersCache[user.email] = user;
    Injector.update(usersCache, "usersCache");
    return user;
  }

  public async removeFromBag(query, data) {
    const user = await this.User.findOneAndUpdate(
      query,
      { $pull: { bag: data.productId }, updatedAt: new Date() },
      { new: true }
    );
    console.log(
      "???????????????????????????",
      user.bag,
      "??????????????????????????????????"
    );
    const usersCache = Injector.get("usersCache");
    usersCache[user.email] = user;
    Injector.update(usersCache, "usersCache");
    return user;
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
