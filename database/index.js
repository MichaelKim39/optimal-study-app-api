const mongoose = require("mongoose");
const config = require("../config");

// Register created models
require("./models/subject");

// Named export of connection function
exports.connectMongoose = async () => {
  try {
    const connection = await mongoose.connect(config.CONNECTION_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log(`Connected to Database Successfully`);
    return connection;
  } catch (error) {
    console.log(`Connection failure: ${error}`);
  }
};
