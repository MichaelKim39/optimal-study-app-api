const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subjectSchema = new Schema({
	title: String,
	description: String,
});

mongoose.model("Subject", subjectSchema);
