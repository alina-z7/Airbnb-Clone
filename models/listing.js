const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema(
    {
        title: { type: String, required: true },
        description: String,
        image: { type: String, set: (imgVal) => v === "" ? "def img link" : imgVal },
        price: Number,
        location: String,
        country: String
    }
);

const Listing = mongoose.model("Listing", listingSchema);
module.export = Listing;