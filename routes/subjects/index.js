const express = require("express");
const {
	getSubjects,
	getSubject,
	addSubject,
} = require("../../controllers/subjects");

const router = express.Router();

router.get("", getSubjects);
router.get("/:id", getSubject);

router.post("", addSubject);

module.exports = router;
