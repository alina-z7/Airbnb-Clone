const mongoose = require("mongoose");
const initialData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGODB_URL = "mongodb://127.0.0.1:27017/airbnb";

main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGODB_URL);
}

const initializeData = async () => {
    await Listing.deleteMany({});
    await Listing.insertMany(initialData.data);
    console.log("data has been initialized");
};

initializeData();