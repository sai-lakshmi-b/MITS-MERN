const mongoose = require("mongoose");

mongoose.set("debug", false);
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/myDB");
    console.log("MongoDB connected successfully ✅");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
