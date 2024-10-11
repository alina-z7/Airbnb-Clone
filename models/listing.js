const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema(
    {
        title: { type: String, required: true },
        description: String,
        image: { type: String, set: (imgVal) => v === "" ? "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : imgVal },
        price: Number,
        location: String,
        country: String
    }
);

const Listing = mongoose.model("Listing", listingSchema);
module.export = Listing;