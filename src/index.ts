require("dotenv").config();
import { dbConnect } from "./model/DB";
import { expressInitialize } from "./routes/index";

console.log(process.env.HELLO);

async function start() {
  await dbConnect();
  expressInitialize();
}

start();
