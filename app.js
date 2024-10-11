const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("../models/listing.js")

const MONGODB_URL = "mongodb://127.0.0.1:27017/wanderlust";
const PORT = 7700;

main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    })

async function main() {
    await mongoose.connect(MONGODB_URL)
}

app.get("/", (req, res) => {
    res.send("Hi, I am root");
});

app.get("/testListening", (req, res) => {
    let exampleListing = new Listing({
        title: "Neverland",
        description: "A place where you never grow up.",
        price: 0,
        location: "Sea of One Thousand Islands",
        country: "USA"
    });
})
app.listen(PORT, () => {
    console.log(`server is listening to port ${PORT}`);
})