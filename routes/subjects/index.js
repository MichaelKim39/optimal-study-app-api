const express = require("express");
const { getSubjects } = require("../../controllers/subjects");

const router = express.Router();

router.get("/subjects", getSubjects);

module.exports = router;
