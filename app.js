const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing")

const MONGODB_URL = "mongodb://127.0.0.1:27017/airbnb";
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

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true }));
app.use(methodOverride("_method"));


app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({});
    allListings.then((res) =>{
        console.log(res);
    })
    // render react component
});

app.get("/listings/:LID", async (req, res) => {
    let {listingID} = req.params
    const matchListing = await Listing.findById(listingID)
    // render react component
})

app.

app.listen(PORT, () => {
    console.log(`server is listening to port ${PORT}`);
})