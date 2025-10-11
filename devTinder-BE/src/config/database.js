const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://vaibhav:VaibhavBhai786@cluster0.gsl1r6q.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
