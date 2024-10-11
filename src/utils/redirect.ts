import axios from "axios";
import url from "url";
import fs from "fs";
import path from "path";
import zlib from "zlib";
import { Injector } from "../lib/injector";
import { ProductServices } from "../services/products";
import { loadCache } from "./loadCache";

export async function redirect(req, res) {
  try {
    const disablecache = false;
    const cache = Injector.get("cache");
    const parsedUrl = url.parse(req.url, true);
    console.log(`Incoming request: ${req.method} ${parsedUrl.path}`);
    // console.log("############", cache);
    const formattedPath = parsedUrl.path.includes("?_rsc=")
      ? parsedUrl.path.split("?_rsc=")[0] + "?_rsc"
      : parsedUrl.path;
    const cacheKey = formattedPath;
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
        console.log("From cache, &&&&&&&&&&");
        if (parsedUrl.path.includes("?_rsc=")) {
          res.writeHead(200, {
            "content-type": "text/x-component",
          });
          res.end(cacheData);
        } else if (parsedUrl.path.includes(".ico")) {
          res.writeHead(200, {
            "content-type": "image/x-icon",
          });
          res.end(cacheData);
        } else {
          res.send(cacheData);
        }
      } else {
        // Not Needed anymore
        // let user = req?.cookies?.user;
        // if (user && typeof user === "string") {
        //   user = JSON.parse(user);
        // }
        // const targetUrl = `http://${process.env.THANAL_URL}:${process.env.THANAL_NEXT_PORT}${parsedUrl.path}`;
        // const response = await axios({
        //   method: req.method,
        //   url: targetUrl,
        //   headers: req.headers,
        //   data: req.body,
        //   responseType: "arraybuffer",
        // });
        // res.writeHead(response.status, response.headers);
        // res.end(response.data);
        // console.log("Adding to cache", parsedUrl.path);
        // cache[cacheKey] = {
        //   data: response.data,
        //   status: response.status,
        //   headers: response.headers,
        //   reqHeaders: req.headers,
        // };
      }
    }
  } catch (error) {
    console.log("Error: ", req.url);
    res.send("Internal Server Error");
  }
}

export async function writeCacheToFile() {
  try {
    await fs.promises.writeFile(
      "cacheData.json",
      JSON.stringify(Injector.get("cache")),
      "utf-8"
    );
    return "File written successfully";
  } catch (err) {
    console.log(err);
    return "Error writing file";
  }
}

export async function generateAndLoadCache() {
  try {
    const sourceBasePath = "C:/Users/abinb/Documents/site/Thanal/.next";
    const destBasePath = "C:/Users/abinb/Documents/site/Thanal_API/static";
    const staticDirectory = path.join(sourceBasePath, "/static");
    const newCache = {};
    await fs.promises.rm(destBasePath, { recursive: true, force: true });
    console.log(`Deleted all files and folders inside ${destBasePath}`);
    await copyAndZipDirectory(staticDirectory, destBasePath);
    const routesDirectory = path.join(sourceBasePath, "/server/app");
    await loadRouteCaches(routesDirectory, newCache);
    const productService: ProductServices = Injector.get("productService");
    const products = await productService.getAllProducts();
    await callAndGetCache(products, newCache);
    await fs.promises.writeFile(
      "cacheData.json",
      JSON.stringify(newCache),
      "utf-8"
    );
    await loadCache();
    return "Cache generated and loaded";
  } catch (err) {
    console.log(err);
    return { "Error generating and loading cache": err };
  }
}

export async function copyDirectory(src, dest) {
  try {
    await fs.promises.cp(src, dest, { recursive: true });
    console.log(`Directory copied from ${src} to ${dest}`);
  } catch (error) {
    console.error(`Error copying directory: ${error.message}`);
  }
}

const zipFile = (filePath, outputPath) => {
  return new Promise((resolve, reject) => {
    const input = fs.createReadStream(filePath);
    const output = fs.createWriteStream(outputPath);
    const gzip = zlib.createGzip();

    input.pipe(gzip).pipe(output).on("finish", resolve).on("error", reject);
  });
};

// Function to copy and zip directory
const copyAndZipDirectory = async (source, destination) => {
  try {
    await ensureDirectoryExists(destination);
    const items = await fs.promises.readdir(source);

    for (const item of items) {
      const sourcePath = path.join(source, item);
      const destinationPath = path.join(destination, item);

      const stats = await fs.promises.stat(sourcePath);

      if (stats.isDirectory()) {
        await copyAndZipDirectory(sourcePath, destinationPath);
      } else {
        const zipDestinationPath = destinationPath;
        await zipFile(sourcePath, zipDestinationPath);
      }
    }

    console.log(
      `Directory copied and files zipped successfully from ${source} to ${destination}`
    );
  } catch (error) {
    console.error("Error copying and zipping directory:", error);
  }
};

export async function ensureDirectoryExists(dirPath) {
  try {
    await fs.promises.access(dirPath);
    console.log(`Directory ${dirPath} already exists.`);
  } catch (error) {
    if (error.code === "ENOENT") {
      await fs.promises.mkdir(dirPath);
      console.log(`Directory ${dirPath} created successfully.`);
    } else {
      console.error("Error checking directory:", error);
    }
  }
}

async function loadRouteCaches(dir, cache) {
  try {
    // Read the directory contents
    const files = await fs.promises.readdir(dir);

    for (const file of files) {
      if ([".html", ".rsc"].includes(path.extname(file))) {
        const fileName =
          path.parse(file).name === "index" ? "" : path.parse(file).name;
        const filePath = path.join(dir, file);
        const content = await fs.promises.readFile(filePath, "utf8");
        if (path.extname(file) === ".html") {
          cache[`/${fileName}`] = content;
        } else {
          cache[`/${fileName}?_rsc`] = content;
        }
      }
    }
  } catch (error) {
    console.error(`Error reading files: ${error.message}`);
  }
}

async function callAndGetCache(products, cache) {
  try {
    for (const product of products) {
      const payloads = [
        {
          method: "GET",
          url: `http://localhost:3000/products/family/${product.family}?_rsc=8q5tj`,
          data: {},
          headers: {
            rsc: "1",
          },
        },
        {
          method: "GET",
          url: `http://localhost:3000/products/${product._id}?_rsc=9ehs5`,
          data: {},
          headers: {
            rsc: "1",
          },
        },
        {
          method: "GET",
          url: `http://localhost:3000/buy/${product._id}?_rsc=9ehs5`,
          data: {},
          headers: {
            rsc: "1",
          },
        },
        {
          method: "GET",
          url: `http://localhost:3000/buy/${product._id}`,
          data: {},
        },
        {
          method: "GET",
          url: `http://localhost:3000/products/family/${product.family}`,
          data: {},
        },
        {
          method: "GET",
          url: `http://localhost:3000/products/${product._id}`,
          data: {},
        },
        {
          method: "GET",
          url: `http://localhost:3000/products/${product._id}`,
          data: {},
        },
        { method: "GET", url: `http://localhost:3000/favicon.ico`, data: {} },
      ];

      const [family_rsc, productId_rsc, familyResp, productIdResp, favIcon] =
        await Promise.all(payloads.map((payload) => axios(payload)));
      cache[`/products/family/${product.family}?_rsc`] = family_rsc.data;
      cache[`/products/${product._id}?_rsc`] = productId_rsc.data;
      cache[`/products/${product._id}`] = productIdResp.data;
      cache[`/buy/${product._id}?_rsc`] = productId_rsc.data;
      cache[`/buy/${product._id}`] = productIdResp.data;
      cache[`/products/family/${product.family}`] = familyResp.data;
      cache["/favicon.ico"] = favIcon.data;
    }
    return cache;
  } catch (error) {
    console.log(error);
  }
}
