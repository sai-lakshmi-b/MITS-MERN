const mongoose = require("mongoose");

mongoose.set("debug", false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected successfully ✅");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
