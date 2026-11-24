const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const User = require("../models/user.js");

const MONGO_URL =
  process.env.ATLASDB_URL || "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("Connected to DB for seeding");
    initDB();
  })
  .catch((err) => {
    console.error("DB connection error during seed:", err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  try {
    // Clear old listings and reviews
    await Listing.deleteMany({});
    await Review.deleteMany({});
    console.log("Cleared existing listings and reviews.");

    // Find or create default host user
    let defaultUser = await User.findOne({ username: "wanderlust_host" });
    if (!defaultUser) {
      const newUser = new User({
        email: "host@wanderlust.com",
        username: "wanderlust_host"
      });
      defaultUser = await User.register(newUser, "wanderlust123");
      console.log("Created default seed host user: wanderlust_host");
    }

    // Attach owner to sample listings
    const listingsWithOwner = initData.data.map((obj) => ({
      ...obj,
      owner: defaultUser._id
    }));

    await Listing.insertMany(listingsWithOwner);
    console.log(`Successfully seeded ${listingsWithOwner.length} listings into database!`);
  } catch (error) {
    console.error("Error during database seed:", error);
  } finally {
    await mongoose.connection.close();
    console.log("Database connection closed.");
  }
};
