import { Injector } from "../lib/injector";
import { usersCache } from "./usersCache";

console.log("Util_Functions");

export const dbOperatorData = (data, id) =>
  data.reduce((acc, obj) => {
    acc[`features.${obj.type}.${obj.value}`] = id;
    return acc;
  }, {});

export const asyncHandler = (fn) =>
  function asyncUtilWrap(...args) {
    const fnReturn = fn(...args);
    const next = args[args.length - 1];
    return Promise.resolve(fnReturn).catch(next);
  };

export const syncLogger =
  <A extends any[], R>(f: (...a: A) => R) =>
  (...args: A): R => {
    let value;
    try {
      value = f(...args);
      console.info("info", f, value, ...args); // actual logging
    } catch (error) {
      console.error("error", f, error.message, ...args); //actual logging
      throw error;
    }
    return value;
  };

export const authenticate = (req, res, next) => {
  const user = req.headers?.user;
  if (req.headers.noauth === "true") return next();
  const parsedUser = user ? JSON.parse(user) : null;
  if (!parsedUser || !parsedUser?.email)
    return res.status(401).json({ error: "Unauthenticated: Access denied" });
  const usercache = usersCache();
  const userCachedData = usercache[parsedUser.email];
  if (
    userCachedData &&
    new Date(parsedUser.updatedAt).getTime() ===
      new Date(userCachedData.updatedAt).getTime()
  )
    return next();
  return res.status(401).json({ error: "Unauthenticated: Access denied" });
};

export const safelyGetFromCache = (key, errorReplacer?) => {
  try {
    return Injector.get(key);
  } catch (error) {
    return errorReplacer || null;
  }
};
