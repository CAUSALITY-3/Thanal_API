import axios from "axios";
import url from "url";
import fs from "fs";
import { loadCache } from "./loadCache";

export async function redirect(req, res, cache) {
  try {
    const disablecache = false;
    const parsedUrl = url.parse(req.url, true);
    console.log(`Incoming request: ${req.method} ${parsedUrl.path}`);
    // console.log("############", cache);
    const formattedPath =
      parsedUrl.path.includes("?_rsc=") &&
      !parsedUrl.path.includes("?_rsc=acgkz")
        ? parsedUrl.path.split("?_rsc=")[0] + "?_rsc="
        : parsedUrl.path;
    const cacheKey = req.method + parsedUrl.path;
    const cacheData = cache[cacheKey];
    if (disablecache) {
      const targetUrl = `http://${process.env.THANAL_URL}:${process.env.THANAL_NEXT_PORT}${parsedUrl.path}`;
      const response = await axios({
        method: req.method,
        url: targetUrl,
        headers: req.headers,
        data: req.body,
        responseType: "arraybuffer",
      });
      res.writeHead(response.status, response.headers);
      res.end(response.data);
    } else {
      if (cacheData) {
        // console.log("From cache, &&&&&&&&&&", Buffer.isBuffer(cacheData));
        if (Buffer.isBuffer(cacheData.data)) {
          res.writeHead(cacheData.status, cacheData.headers);
          res.end(cacheData.data);
        } else {
          const buffData = new Buffer(cacheData.data.data);
          res.writeHead(cacheData.status, cacheData.headers);
          res.end(buffData);
        }
      } else {
        let user = req?.cookies?.user;
        if (user && typeof user === "string") {
          user = JSON.parse(user);
          // console.log("$$$$$$$$$", user.email);
        }
        // console.log("$$$$$$$$$", user?.email);
        const targetUrl = `http://${process.env.THANAL_URL}:${process.env.THANAL_NEXT_PORT}${parsedUrl.path}`;
        const response = await axios({
          method: req.method,
          url: targetUrl,
          headers: req.headers,
          data: req.body,
          responseType: "arraybuffer",
        });
        res.writeHead(response.status, response.headers);
        res.end(response.data);
        console.log("Adding to cache", parsedUrl.path);
        cache[cacheKey] = {
          data: response.data,
          status: response.status,
          headers: response.headers,
        };
      }
    }
  } catch (error) {
    // console.log(error);
    console.log("Error: ", req.url);

    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Internal Server Error");
  }
}

export async function writeCacheToFile(cache, res) {
  try {
    fs.writeFile("cacheData.txt", JSON.stringify(cache), (err) => {
      if (err) {
        console.error("Error writing file:");
        res.send("Error writing file");
      } else {
        console.log("File written successfully");
        res.send("File written successfully");
      }
    });
  } catch (err) {
    console.log(err);
    res.send("Error writing file");
  }
}

export async function writeCacheViaApi(data, res) {
  try {
    // Parse the JSON data
    fs.writeFile("cacheData.txt", JSON.stringify(data), async (err) => {
      if (err) {
        console.error("Error writing file:");
        res.send("Error writing file");
      } else {
        console.log("File written successfully");
        await loadCache();
        res.send("File written successfully");
      }
    });
  } catch (error) {
    console.log(error);
    return {};
  }
}
