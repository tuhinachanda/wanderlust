const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review");

const DEFAULT_IMAGE_URL =
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80";

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  image: {
    type: String,
    default: DEFAULT_IMAGE_URL,
    set: (v) => {
      if (typeof v === "object" && v !== null && v.url) {
        return v.url.trim() === "" ? DEFAULT_IMAGE_URL : v.url.trim();
      }
      return !v || (typeof v === "string" && v.trim() === "")
        ? DEFAULT_IMAGE_URL
        : v.trim();
    }
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  country: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    enum: [
      "Trending",
      "Rooms",
      "Iconic Cities",
      "Mountains",
      "Castles",
      "Amazing Pools",
      "Camping",
      "Farms",
      "Arctic",
      "Beach",
      "Boats"
    ],
    default: "Trending"
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review"
    }
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing && listing.reviews && listing.reviews.length) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

module.exports = mongoose.model("Listing", listingSchema);
