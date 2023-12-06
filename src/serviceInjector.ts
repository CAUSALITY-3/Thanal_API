import { Injector } from "./lib/injector";
import { ProductServices } from "./services/products";

import { Product } from "./model/products";
import { productFeatures } from "./model/productFeatures";
import { productMainList } from "./model/productMainList";
import { ProductFeatureServices } from "./services/productFeatures";

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
}
