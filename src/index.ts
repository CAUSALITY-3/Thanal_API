import { dbConnect } from "./model/DB";
import { initializeServer } from "./serverInitialize";
import { injectServices } from "./seriviceInjector";
require("dotenv").config();

console.log(process.env.HELLO);

async function start() {
  await dbConnect();
  console.log("cr7");
  await injectServices();
  await initializeServer();
}
start();
