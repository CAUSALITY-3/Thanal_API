import fs from "fs/promises";
import { Injector } from "../lib/injector";
export async function loadCache() {
  let cache = {};
  try {
    const data = await fs.readFile("./cacheData.json", "utf8");

    // Parse the JSON data
    try {
      const apiResponse = JSON.parse(data);
      console.log("apiResponse", Object.keys(apiResponse).length);
      cache = apiResponse || {};
    } catch (parseErr) {
      console.error("Error parsing JSON:", parseErr);
    }
  } catch (error) {
    console.log("Error reading file:", error);
  }
  Injector.update(cache, "cache");
}
