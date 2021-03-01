const express = require("express");
const {
	getSubjects,
	getSubject,
	addSubject,
} = require("../../controllers/subjects");
const { verifyJWT } = require("../../controllers/auth");

const router = express.Router();

router.get("", getSubjects);
router.get("/:id", getSubject);

router.post("", verifyJWT, addSubject);

module.exports = router;
