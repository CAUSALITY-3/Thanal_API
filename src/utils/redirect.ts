import axios from "axios";
import url from "url";
import fs from "fs/promises";
import path from "path";
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
    await fs.writeFile(
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

// export async function generateAndLoadCache() {
//   // not needed
//   try {
//     const apis = await loadCache();
//     const cacheData = {};
//     for (let api in apis) {
//       const formattedUrl = api.replace("GET", "http://localhost:3000");
//       const parsedUrl = url.parse(formattedUrl, true);
//       parsedUrl.path;
//       const formattedPath = parsedUrl.path.includes("?_rsc=")
//         ? parsedUrl.path.split("?_rsc=")[0] + "?_rsc="
//         : parsedUrl.path;
//       const cacheKey = "GET" + formattedPath;
//       const data = cacheData[cacheKey];

//       const tt = [
//         "http://localhost:3000/",
//         "http://localhost:3000/?_rsc=12xfc",
//         "http://localhost:3000/?_rsc=1me53",
//         "http://localhost:3000/?_rsc=1ohjm",
//         "http://localhost:3000/?_rsc=1pdez",
//         "http://localhost:3000/?_rsc=1wzze",
//         "http://localhost:3000/?_rsc=1y9ev",
//         "http://localhost:3000/?_rsc=6u71e",
//         "http://localhost:3000/?_rsc=8q5tj",
//         "http://localhost:3000/?_rsc=9ehs5",
//         "http://localhost:3000/?_rsc=esz6l",
//         "http://localhost:3000/?_rsc=i6d7a",
//         "http://localhost:3000/?_rsc=kghoq",
//         "http://localhost:3000/?_rsc=mes9t",
//         "http://localhost:3000/?_rsc=ruzhb",
//         "http://localhost:3000/?_rsc=vhs3p",
//         "http://localhost:3000/?_rsc=ze2zd",
//         "http://localhost:3000/?_rsc=zzpyc",
//         "http://localhost:3000/contact",
//         "http://localhost:3000/contact?_rsc=1me53",
//         "http://localhost:3000/contact?_rsc=8q5tj",
//         "http://localhost:3000/contact?_rsc=ze2zd",
//         "http://localhost:3000/favicon.ico",
//         "http://localhost:3000/login",
//         "http://localhost:3000/login?_rsc=1me53",
//         "http://localhost:3000/login?_rsc=yhs65",
//         "http://localhost:3000/products",
//         "http://localhost:3000/products?_rsc=16hid",
//         "http://localhost:3000/products?_rsc=17bhi",
//         "http://localhost:3000/products?_rsc=1h5zo",
//         "http://localhost:3000/products?_rsc=1hjq7",
//         "http://localhost:3000/products?_rsc=1me53",
//         "http://localhost:3000/products?_rsc=1ohjm",
//         "http://localhost:3000/products?_rsc=1wzze",
//         "http://localhost:3000/products?_rsc=3umgn",
//         "http://localhost:3000/products?_rsc=3wb7e",
//         "http://localhost:3000/products?_rsc=9ehs5",
//         "http://localhost:3000/products?_rsc=esz6l",
//         "http://localhost:3000/products?_rsc=i6d7a",
//         "http://localhost:3000/products?_rsc=v25yj",
//         "http://localhost:3000/products/65b9ec8a7d29502a58237838",
//         "http://localhost:3000/products/65b9ec8a7d29502a58237838?_rsc=9ehs5",
//         "http://localhost:3000/products/65f92433a6b7763a1456a98d",
//         "http://localhost:3000/products/65f92433a6b7763a1456a98d?_rsc=9ehs5",
//         "http://localhost:3000/products/65f92458a6b7763a1456a992",
//         "http://localhost:3000/products/65f92458a6b7763a1456a992?_rsc=9ehs5",
//         "http://localhost:3000/products/65f92484a6b7763a1456a997",
//         "http://localhost:3000/products/65f92484a6b7763a1456a997?_rsc=9ehs5",
//         "http://localhost:3000/products/65f92491a6b7763a1456a99c",
//         "http://localhost:3000/products/65f92491a6b7763a1456a99c?_rsc=9ehs5",
//         "http://localhost:3000/products/65f924a8a6b7763a1456a9a1",
//         "http://localhost:3000/products/65f924a8a6b7763a1456a9a1?_rsc=9ehs5",
//         "http://localhost:3000/products/65f924b2a6b7763a1456a9a6",
//         "http://localhost:3000/products/65f924b2a6b7763a1456a9a6?_rsc=9ehs5",
//         "http://localhost:3000/products/65f92526a6b7763a1456a9ab",
//         "http://localhost:3000/products/65f92526a6b7763a1456a9ab?_rsc=9ehs5",
//         "http://localhost:3000/products/65f92548a6b7763a1456a9b0?_rsc=9ehs5",
//         "http://localhost:3000/products/family/adenia",
//         "http://localhost:3000/products/family/adenia?_rsc=8q5tj",
//         "http://localhost:3000/products/family/bogainvilla",
//         "http://localhost:3000/products/family/bogainvilla?_rsc=8q5tj",
//         "http://localhost:3000/products/family/chemparuthy",
//         "http://localhost:3000/products/family/chemparuthy?_rsc=8q5tj",
//         "http://localhost:3000/products/family/chetty",
//         "http://localhost:3000/products/family/chetty?_rsc=8q5tj",
//         "http://localhost:3000/products/family/guppy",
//         "http://localhost:3000/products/family/guppy?_rsc=8q5tj",
//         "http://localhost:3000/products/family/lilly",
//         "http://localhost:3000/products/family/lilly?_rsc=8q5tj",
//         "http://localhost:3000/products/family/poppy",
//         "http://localhost:3000/products/family/poppy?_rsc=8q5tj",
//         "http://localhost:3000/products/family/rose",
//         "http://localhost:3000/products/family/rose?_rsc=8q5tj",
//         "http://localhost:3000/products/family/sun%20flower",
//         "http://localhost:3000/products/family/sun%20flower?_rsc=8q5tj",
//         "http://localhost:3000/profile?_rsc=1me53",
//         "http://localhost:3000/profile?_rsc=9ehs5",
//         "http://localhost:3000/signup",
//       ];
//       const bestUrl = tt.find((url) => url.includes(formattedUrl));
//       if (!data && bestUrl) {
//         const response = await axios({
//           method: "GET",
//           url: bestUrl,
//           headers: apis[api].reqHeaders,
//           responseType: "arraybuffer",
//         });
//         cacheData[cacheKey] = {
//           data: response.data,
//           status: response.status,
//           headers: response.headers,
//           reqHeaders: apis[api].reqHeaders,
//         };
//       }
//     }
//     try {
//       await fs.writeFile("cacheDatax.txt", JSON.stringify(cacheData), "utf8");
//     } catch (err) {
//       console.log(err);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

export async function generateAndLoadCache() {
  try {
    const sourceBasePath = "C:/Users/abinb/Documents/site/Thanal/.next";
    const destBasePath = "C:/Users/abinb/Documents/site/Thanal_API/static";
    const staticDirectory = path.join(sourceBasePath, "/static");
    const newCache = {};
    await fs.rm(destBasePath, { recursive: true, force: true });
    console.log(`Deleted all files and folders inside ${destBasePath}`);
    await copyDirectory(staticDirectory, destBasePath);
    const routesDirectory = path.join(sourceBasePath, "/server/app");
    await loadRouteCaches(routesDirectory, newCache);
    const productService: ProductServices = Injector.get("productService");
    const products = await productService.getAllProducts();
    await callAndGetCache(products, newCache);
    await fs.writeFile("cacheData.json", JSON.stringify(newCache), "utf-8");
    await loadCache();
    return "Cache generated and loaded";
  } catch (err) {
    console.log(err);
    return { "Error generating and loading cache": err };
  }
}

export async function copyDirectory(src, dest) {
  try {
    await fs.cp(src, dest, { recursive: true });
    console.log(`Directory copied from ${src} to ${dest}`);
  } catch (error) {
    console.error(`Error copying directory: ${error.message}`);
  }
}

async function loadRouteCaches(dir, cache) {
  try {
    // Read the directory contents
    const files = await fs.readdir(dir);

    for (const file of files) {
      if ([".html", ".rsc"].includes(path.extname(file))) {
        const fileName =
          path.parse(file).name === "index" ? "" : path.parse(file).name;
        const filePath = path.join(dir, file);
        const content = await fs.readFile(filePath, "utf8");
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
      cache[`/products/family/${product.family}`] = familyResp.data;
      cache["/favicon.ico"] = favIcon.data;
    }
    return cache;
  } catch (error) {
    console.log(error);
  }
}
