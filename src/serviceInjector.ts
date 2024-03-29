import { Injector } from "./lib/injector";
import { ProductServices } from "./services/products";

import { Product } from "./model/products";
import { productFeatures } from "./model/productFeatures";
import { productMainList } from "./model/productMainList";
import { ProductFeatureServices } from "./services/productFeatures";
import { UserServices } from "./services/users";
import { User } from "./model/user";
import { AuthenticationServices } from "./services/authentication";

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
    process.env.TOKEN_SECRET,
    process.env.TOKEN_EXPIRY,
    process.env.REFRESH_TOKEN_SECRET,
    process.env.REFRESH_TOKEN_EXPIRY
  )
  Injector.bind(authenticationServices, "authenticationServices");
}
