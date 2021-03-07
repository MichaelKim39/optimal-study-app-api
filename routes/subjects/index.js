const express = require("express");
const {
	getSubjects,
	getSubject,
	addSubject,
	editSubject,
	deleteSubject,
} = require("../../controllers/subjects");
const {
	addTopic,
	getTopics,
	getTopic,
	editTopic,
	deleteTopic,
	editNotes,
} = require("../../controllers/topics");

const { verifyJWT } = require("../../controllers/auth");

const router = express.Router();

router.get("", getSubjects);
router.get("/:subjectId", getSubject);
router.post("", verifyJWT, addSubject);
router.patch("/:subjectId", verifyJWT, editSubject);
router.delete("/:subjectId", verifyJWT, deleteSubject);

router.get("/:subjectId/topics", getTopics);
router.get("/:subjectId/:topicId", getTopic);
router.post("/:subjectId/topics", addTopic);
router.patch("/:subjectId/:topicId", editTopic);
router.delete("/:subjectId/:topicId", deleteTopic);
router.patch("/:subjectId/:topicId/notes", editNotes);

module.exports = router;
