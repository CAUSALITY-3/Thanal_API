import express from 'express';
require('dotenv').config();
console.log(process.env.HELLO)
const app = express();
const port = 5000;

const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name:String,
    age:Number
})

const User = mongoose.model('User', userSchema)

 mongoose.connect('mongodb://127.0.0.1:27017/thanal')
    console.log("sasi")

run()

async function run() {
    const user = await User.create({name:"Abin",age:26})
    console.log(user)
}

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});