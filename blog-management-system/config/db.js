const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = async () => {
  try {
    await mongoose.connect("//ishitasurati83:test212345@cluster0.xiegc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Connected to the database");
  } catch (error) {
    console.error("Database connection failed:", error.message);
  }
};

module.exports = dbConnect;
