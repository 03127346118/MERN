const url="mongodb+srv://Jutt1234:Usama1234@cluster0.9vtom.mongodb.net/shop?retryWrites=true&w=majority"
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connection SUCCESS");
  } catch (error) {
    console.error("MongoDB connection FAIL");
    
  }
};

module.exports = connectDB;
