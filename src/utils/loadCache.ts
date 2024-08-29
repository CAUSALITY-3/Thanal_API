import fs from "fs/promises";
export async function loadCache() {
  try {
    const data = await fs.readFile("./cacheData.txt", "utf8");

    // Parse the JSON data
    try {
      const apiResponse = JSON.parse(data);
      console.log("apiResponse", Object.keys(apiResponse).length);
      return apiResponse || {};
    } catch (parseErr) {
      console.error("Error parsing JSON:", parseErr);
      return {};
    }
  } catch (error) {
    console.log(error);
    return {};
  }
}
