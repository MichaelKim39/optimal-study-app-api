const express = require("express");
const { getSubjects, getSubject } = require("../../controllers/subjects");

const router = express.Router();

router.get("/subjects", getSubjects);
router.get("/subjects/:id", getSubject);

module.exports = router;
