const express = require("express");
const {
	getSubjects,
	getSubject,
	addSubject,
	editSubject,
	deleteSubject,
} = require("../../controllers/subjects");
const { addTopic, getTopics } = require("../../controllers/topics");

const { verifyJWT } = require("../../controllers/auth");

const router = express.Router();

router.get("", getSubjects);
router.get("/:subjectId", getSubject);
router.post("", verifyJWT, addSubject);
router.patch("/:subjectId", verifyJWT, editSubject);
router.delete("/:subjectId", verifyJWT, deleteSubject);

router.post("/:subjectId/topic", verifyJWT, addTopic);
router.get("/:subjectId/topics", getTopics);

module.exports = router;
