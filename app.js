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
    });

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

app.get("/listings/:id", async (req, res) => {
    let {ID} = req.params;
    const matchListing = await Listing.findById(ID);
    // render react component
});

app.post("/listings", async (req, res) => {
    const newListingInfo = req.body.listing;
    const newListing = new Listing(newListingInfo);
    await newListing.save();
});

app.get("/listings/:id/edit", async (req, res) => {
    let {ID} = req.params;
    const listing = await Listing.findById(ID);
    // render react component
});

app.put("/listings/:id/update", async (req, res) => {
    let {ID} = req.params;
    Listing.findByIdAndUpdate(ID, {...req.body.listing});
    // render react component
});

app.delete("/listings/:id/", async (req, res) => {
    let {ID} = req.params;
    Listing.findByIdAndDelete(ID, {...req.body.listing})
});

app.listen(PORT, () => {
    console.log(`server is listening to port ${PORT}`);
})