import fs from "fs";
export function loadCache() {
  try {
    fs.readFile("./cacheData.txt", "utf8", (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        return {};
      }

      // Parse the JSON data
      try {
        const apiResponse = JSON.parse(data);
        return apiResponse || {};
      } catch (parseErr) {
        console.error("Error parsing JSON:", parseErr);
        return {};
      }
    });
  } catch (error) {
    console.log(error);
    return {};
  }
}
