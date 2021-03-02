const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subjectSchema = new Schema({
	title: { type: String, required: true, maxLength: 100 },
	description: { type: String },
	image: {
		type: String,
		default: "https://source.unsplash.com/random/300x300",
	},
	topics: [
		{
			title: { type: String },
			image: {
				type: String,
				default: "https://source.unsplash.com/random/300x300",
			},
		},
	],
	creationDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Subject", subjectSchema);
