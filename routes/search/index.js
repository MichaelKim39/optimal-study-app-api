const express = require("express");
const { searchSubjects } = require("../../controllers/subjects");

const { verifyJWT } = require("../../controllers/auth");

const router = express.Router();

// SEARCH
router.get("/:query", searchSubjects);

module.exports = router;
