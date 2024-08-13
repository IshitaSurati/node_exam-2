const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb+srv://ishitasurati83:TEST2@cluster0.93tbw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Connected to the database");
  } catch (error) {
    console.error("Database connection failed:", error.message);
  }
};

module.exports = dbConnect;
