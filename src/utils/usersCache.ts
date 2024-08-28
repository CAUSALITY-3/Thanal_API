import { Injector } from "../lib/injector";
import { UserServices } from "../services/users";

export async function usersCache() {
  return Injector.get("usersCache");
}

export async function refreshUsersCache() {
  const userServices: UserServices = Injector.get("userServices");
  const allUsers = await userServices.getAllUsers();
  const usersCache = {};
  for (const user of allUsers) {
    usersCache[user.email] = user;
  }
  Injector.update(usersCache, "usersCache");
}
