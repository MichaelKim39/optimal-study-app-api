const express = require("express");
const mongoose = require("mongoose");
const crypto = require("crypto");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const multer = require("multer");
const Grid = require("gridfs-stream");
const GridFsStorage = require("multer-gridfs-storage");

const config = require("./config/dev");
const { connectMongoose } = require("./database");

const port = parseInt(process.env.PORT, 10) || 3001;
const app = express();

const initialiseServer = async () => {
  const connection = await connectMongoose();

  app.use(bodyParser.json());

  // Enable form deletion of images using method override
  app.use(methodOverride("_method"));

  //   Initialise GridFS Stream
  let gfs;
  mongoose.connection.once("open", () => {
    gfs = Grid(connection.db, mongoose.mongo);
    gfs.collection("uploads");
  });

  // Create Image storage engine using multer-gridfs-storage
  const imageStorage = new GridFsStorage({
    url: config.CONNECTION_URI,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          const filename =
            buf.toString("hex") + path.extname(file.originalname);
          const fileInfo = {
            filename: filename,
            bucketName: "uploads",
          };
          resolve(fileInfo);
        });
      });
    },
  });
  const upload = multer({ imageStorage });

  const subjectsRoutes = require("./routes/subjects");
  const searchRoutes = require("./routes/search");
  app.use("/api/v1/subjects", subjectsRoutes(upload));
  app.use("/api/v1/search", searchRoutes);

  app.listen(port, (error) => {
    console.log(error || `Server ready on port ${port}`);
  });
};

initialiseServer();
