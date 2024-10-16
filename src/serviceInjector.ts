import { Injector } from "./lib/injector";
import { ProductServices } from "./services/products";
import { Product } from "./model/products";
import { productFeatures } from "./model/productFeatures";
import { productMainList } from "./model/productMainList";
import { ProductFeatureServices } from "./services/productFeatures";
import { UserServices } from "./services/users";
import { User } from "./model/user";
import { AuthenticationServices } from "./services/authentication";
import { ImageServices } from "./services/images";
import Razorpay from "razorpay";
import { PaymentServices } from "./services/payments";
import { UploadServices } from "./services/uploads";
import { loadCache } from "./utils/loadCache";

console.log("injectServices");

export async function injectServices() {
  const productFeatureServices = new ProductFeatureServices(productFeatures);
  Injector.bind(productFeatureServices, "productFeatureServices");

  const productService = new ProductServices(
    Product,
    productMainList,
    productFeatureServices
  );
  Injector.bind(productService, "productService");

  const userServices = new UserServices(User);
  Injector.bind(userServices, "userServices");

  const authenticationServices = new AuthenticationServices(
    userServices,
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_CALLBACK_URL
  );
  Injector.bind(authenticationServices, "authenticationServices");

  const imageServices = new ImageServices();
  Injector.bind(imageServices, "imageServices");

  const allUsers = await userServices.getAllUsers();
  const usersCache = {};
  for (const user of allUsers) {
    usersCache[user.email] = user;
  }
  Injector.bind(usersCache, "usersCache");

  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY,
    key_secret: process.env.RAZORPAY_SECRET,
  });

  const paymentServices = new PaymentServices(razorpay);
  Injector.bind(paymentServices, "paymentServices");

  const uploadServices = new UploadServices();
  Injector.bind(uploadServices, "uploadServices");

  await loadCache();
}
