import { Injector } from "./lib/injector";
import { ProductServices } from "./services/products";

import { Product } from "./model/products";
import { productFeatures } from "./model/productFeatures";
import { productMainList } from "./model/productMainList";
import { ProductFeatureServices } from "./services/productFeatures";
import { UserServices } from "./services/users";
import { User } from "./model/user";

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
}
