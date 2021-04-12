const mongoose = require("mongoose");
const config = require("../config");
const testDatabase = require("./testDatabase");

// Named export of connection function
connectMongoose = async () => {
  try {
    const connection = await mongoose.connect(config.CONNECTION_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("=====POPULATING TEST DATABASE WITH DEBUG DATA=====");
    await testDatabase.reloadData();
    await mongoose.connection.close();
    console.log(`=====SUCCESSFULLY POPULATED TEST DATABASE=====`);
    return connection;
  } catch (error) {
    console.log(`Connection failure: ${error}`);
  }
};

connectMongoose();
