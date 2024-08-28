import axios from "axios";
import url from "url";
import fs from "fs";

export async function redirect(req, res, cache) {
  try {
    const parsedUrl = url.parse(req.url, true);
    console.log(`Incoming request: ${req.method} ${parsedUrl.path}`);
    // console.log("############", cache);
    const cacheKey = req.method + parsedUrl.path;
    const cacheData = cache[cacheKey];
    if (cacheData) {
      // console.log("From cache, &&&&&&&&&&", Buffer.isBuffer(cacheData));
      if (Buffer.isBuffer(cacheData)) {
        res.end(cacheData);
      } else {
        const buffData = new Buffer(cacheData.data);
        res.end(buffData);
      }
    } else {
      let user = req?.cookies?.user;
      if (user && typeof user === "string") {
        user = JSON.parse(user);
        console.log("$$$$$$$$$", user.email);
      }
      console.log("$$$$$$$$$", user?.email);
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
      cache[cacheKey] = response.data;
    }
  } catch (error) {
    console.log(error);
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
