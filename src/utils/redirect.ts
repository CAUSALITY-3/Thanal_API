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
    const formattedPath = parsedUrl.path.includes("?_rsc=")
      ? parsedUrl.path.split("?_rsc=")[0] + "?_rsc="
      : parsedUrl.path;
    const cacheKey = req.method + formattedPath;
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
        if (req.headers["If-None-Match"]) {
          cacheData.headers["etag"] = req.headers["If-None-Match"];
        }

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
          reqHeaders: req.headers,
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

export async function generateAndLoadCache() {
  try {
    const apis = await loadCache();
    const cacheData = {};
    for (let api in apis) {
      const formattedUrl = api.replace("GET", "http://localhost:3000");
      const parsedUrl = url.parse(formattedUrl, true);
      parsedUrl.path;
      const formattedPath = parsedUrl.path.includes("?_rsc=")
        ? parsedUrl.path.split("?_rsc=")[0] + "?_rsc="
        : parsedUrl.path;
      const cacheKey = "GET" + formattedPath;
      const data = cacheData[cacheKey];

      const tt = [
        "http://localhost:3000/",
        "http://localhost:3000/?_rsc=12xfc",
        "http://localhost:3000/?_rsc=1me53",
        "http://localhost:3000/?_rsc=1ohjm",
        "http://localhost:3000/?_rsc=1pdez",
        "http://localhost:3000/?_rsc=1wzze",
        "http://localhost:3000/?_rsc=1y9ev",
        "http://localhost:3000/?_rsc=6u71e",
        "http://localhost:3000/?_rsc=8q5tj",
        "http://localhost:3000/?_rsc=9ehs5",
        "http://localhost:3000/?_rsc=esz6l",
        "http://localhost:3000/?_rsc=i6d7a",
        "http://localhost:3000/?_rsc=kghoq",
        "http://localhost:3000/?_rsc=mes9t",
        "http://localhost:3000/?_rsc=ruzhb",
        "http://localhost:3000/?_rsc=vhs3p",
        "http://localhost:3000/?_rsc=ze2zd",
        "http://localhost:3000/?_rsc=zzpyc",
        "http://localhost:3000/contact",
        "http://localhost:3000/contact?_rsc=1me53",
        "http://localhost:3000/contact?_rsc=8q5tj",
        "http://localhost:3000/contact?_rsc=ze2zd",
        "http://localhost:3000/favicon.ico",
        "http://localhost:3000/login",
        "http://localhost:3000/login?_rsc=1me53",
        "http://localhost:3000/login?_rsc=yhs65",
        "http://localhost:3000/products",
        "http://localhost:3000/products?_rsc=16hid",
        "http://localhost:3000/products?_rsc=17bhi",
        "http://localhost:3000/products?_rsc=1h5zo",
        "http://localhost:3000/products?_rsc=1hjq7",
        "http://localhost:3000/products?_rsc=1me53",
        "http://localhost:3000/products?_rsc=1ohjm",
        "http://localhost:3000/products?_rsc=1wzze",
        "http://localhost:3000/products?_rsc=3umgn",
        "http://localhost:3000/products?_rsc=3wb7e",
        "http://localhost:3000/products?_rsc=9ehs5",
        "http://localhost:3000/products?_rsc=esz6l",
        "http://localhost:3000/products?_rsc=i6d7a",
        "http://localhost:3000/products?_rsc=v25yj",
        "http://localhost:3000/products/65b9ec8a7d29502a58237838",
        "http://localhost:3000/products/65b9ec8a7d29502a58237838?_rsc=9ehs5",
        "http://localhost:3000/products/65f92433a6b7763a1456a98d",
        "http://localhost:3000/products/65f92433a6b7763a1456a98d?_rsc=9ehs5",
        "http://localhost:3000/products/65f92458a6b7763a1456a992",
        "http://localhost:3000/products/65f92458a6b7763a1456a992?_rsc=9ehs5",
        "http://localhost:3000/products/65f92484a6b7763a1456a997",
        "http://localhost:3000/products/65f92484a6b7763a1456a997?_rsc=9ehs5",
        "http://localhost:3000/products/65f92491a6b7763a1456a99c",
        "http://localhost:3000/products/65f92491a6b7763a1456a99c?_rsc=9ehs5",
        "http://localhost:3000/products/65f924a8a6b7763a1456a9a1",
        "http://localhost:3000/products/65f924a8a6b7763a1456a9a1?_rsc=9ehs5",
        "http://localhost:3000/products/65f924b2a6b7763a1456a9a6",
        "http://localhost:3000/products/65f924b2a6b7763a1456a9a6?_rsc=9ehs5",
        "http://localhost:3000/products/65f92526a6b7763a1456a9ab",
        "http://localhost:3000/products/65f92526a6b7763a1456a9ab?_rsc=9ehs5",
        "http://localhost:3000/products/65f92548a6b7763a1456a9b0?_rsc=9ehs5",
        "http://localhost:3000/products/family/adenia",
        "http://localhost:3000/products/family/adenia?_rsc=8q5tj",
        "http://localhost:3000/products/family/bogainvilla",
        "http://localhost:3000/products/family/bogainvilla?_rsc=8q5tj",
        "http://localhost:3000/products/family/chemparuthy",
        "http://localhost:3000/products/family/chemparuthy?_rsc=8q5tj",
        "http://localhost:3000/products/family/chetty",
        "http://localhost:3000/products/family/chetty?_rsc=8q5tj",
        "http://localhost:3000/products/family/guppy",
        "http://localhost:3000/products/family/guppy?_rsc=8q5tj",
        "http://localhost:3000/products/family/lilly",
        "http://localhost:3000/products/family/lilly?_rsc=8q5tj",
        "http://localhost:3000/products/family/poppy",
        "http://localhost:3000/products/family/poppy?_rsc=8q5tj",
        "http://localhost:3000/products/family/rose",
        "http://localhost:3000/products/family/rose?_rsc=8q5tj",
        "http://localhost:3000/products/family/sun%20flower",
        "http://localhost:3000/products/family/sun%20flower?_rsc=8q5tj",
        "http://localhost:3000/profile?_rsc=1me53",
        "http://localhost:3000/profile?_rsc=9ehs5",
        "http://localhost:3000/signup",
      ];
      const bestUrl = tt.find((url) => url.includes(formattedUrl));
      if (!data && bestUrl) {
        const response = await axios({
          method: "GET",
          url: bestUrl,
          headers: apis[api].reqHeaders,
          responseType: "arraybuffer",
        });
        cacheData[cacheKey] = {
          data: response.data,
          status: response.status,
          headers: response.headers,
          reqHeaders: apis[api].reqHeaders,
        };
      }
    }
    try {
      fs.writeFile("cacheDatax.txt", JSON.stringify(cacheData), (err) => {
        if (err) {
          console.error("Error writing file:");
        } else {
          console.log("File written successfully");
        }
      });
    } catch (err) {
      console.log(err);
    }
  } catch (error) {
    console.log(error);
  }
}
