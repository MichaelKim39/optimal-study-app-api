const express = require("express");
const {
	getSubjects,
	getSubject,
	addSubject,
	editSubject,
} = require("../../controllers/subjects");
const { verifyJWT } = require("../../controllers/auth");

const router = express.Router();

router.get("", getSubjects);
router.get("/:subjectId", getSubject);

router.post("", verifyJWT, addSubject);

router.patch("/:subjectId", verifyJWT, editSubject);

module.exports = router;
