const express = require("express");

const router = express.Router();

module.exports = (gfs, upload) => {
  // Utility functions to upload image
  router.post("/upload", upload.single("image"), (req, res) => {
    console.log("========IMAGE UPLOAD BEING CALLED=========", req.file);
    try {
      res.json({ data: req.file });
    } catch (error) {
      console.log("Error while uploading image: ", error);
      res.status(500).json({ error: error.message });
    }
  });

  // Render image
  router.get("/display", (req, res) => {
    gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
      if (!file || file.length === 0) {
        return res.status(404).json({ error: "File Not Found" });
      } else if (
        file.contentType !== "image/jpeg" ||
        file.contentType !== "image/png"
      ) {
        return res.status(404).json({ error: "File is not an image" });
      } else {
        const readStream = gfs.createReadStream(file.filename);
        readStream.pipe(res);
      }
    });
  });

  return router;
};
