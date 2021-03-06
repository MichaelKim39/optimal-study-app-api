const mongoose = require("mongoose");
const { getRandomImage } = require("../../utils/imageHandlers");

const Schema = mongoose.Schema;

const subjectSchema = new Schema({
	title: { type: String, required: true, maxLength: 100 },
	description: { type: String },
	image: {
		type: String,
		default: getRandomImage(),
	},
	topics: [
		{
			title: { type: String },
			topicId: { type: mongoose.Types.ObjectId },
		},
	],
	creationDate: { type: Date, default: Date.now },
	userId: { type: String, required: true },
});

module.exports = mongoose.model("Subject", subjectSchema);
