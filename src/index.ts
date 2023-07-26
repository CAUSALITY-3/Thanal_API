import express from 'express';
require('dotenv').config();
console.log(process.env.HELLO)
const app = express();
const port = 5000;

const mongoose = require('mongoose')
async function run() {
  try{
    await mongoose.connect('mongodb://127.0.0.1:27017/thanal')
    console.log("connected to db")
    } catch (e) {
    console.log("not connected",e)
  }
}
run()

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});