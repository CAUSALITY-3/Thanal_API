const mongoose = require("mongoose");

export async function dbConnect() {
    const url = process.env.MONGO_URL
    try {
        await mongoose.connect(url);
        console.info("Successfully connecte to DB")
    } catch (err) {
        console.error("Unable to connect to DB ", err)
        throw err;
    }
}
