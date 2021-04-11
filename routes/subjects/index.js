const express = require("express");

const {
  getSubjects,
  getSubject,
  addSubject,
  editSubject,
  deleteSubject,
  searchSubjects,
} = require("../../controllers/subjects");
const {
  addTopic,
  getTopics,
  getTopic,
  editTopic,
  deleteTopic,
  editNotes,
  addCard,
  editCard,
  updateCardBucket,
  getOrDeleteCard,
} = require("../../controllers/topics");

const { verifyJWT } = require("../../controllers/auth");

const router = express.Router();

// SUBJECTS
router.get("", verifyJWT, getSubjects);
router.get("/:subjectId", getSubject);
router.post("", verifyJWT, addSubject);
router.patch("/:subjectId", verifyJWT, editSubject);
router.delete("/:subjectId", verifyJWT, deleteSubject);

// TOPICS
router.get("/:subjectId/topics", getTopics);
router.get("/:subjectId/:topicId", getTopic);
router.post("/:subjectId/topics", addTopic);
router.patch("/:subjectId/:topicId", editTopic);
router.delete("/:subjectId/:topicId", deleteTopic);

// NOTES
router.patch("/:subjectId/:topicId/notes", editNotes);

// CARDS
router.post("/:subjectId/:topicId/cards", addCard);
router.patch("/:subjectId/:topicId/cards", editCard);
router.put("/:subjectId/:topicId/cards", getOrDeleteCard);

// CARD
router.patch("/:subjectId/:topicId/card", updateCardBucket);

module.exports = router;
