const mongoose = require("mongoose");
const { getRandomImage } = require("../../utils/imageHandlers");

const Schema = mongoose.Schema;

const topicSchema = new Schema({
  title: { type: String, required: true, maxLength: 100 },
  description: { type: String },
  image: {
    type: String,
    default: getRandomImage(),
  },
  notes: { type: String, default: "" },
  cards: [
    {
      bucket: { type: Number, required: true, default: 1 },
      question: { type: String },
      answer: { type: String },
    },
  ],
  creationDate: { type: Date, default: Date.now },
  isPublic: { type: Boolean, default: true },
});

// Make _id immutable
topicSchema.path("_id").immutable(true);

const subjectSchema = new Schema({
  title: { type: String, required: true, maxLength: 100 },
  description: { type: String },
  image: {
    type: String,
    default: getRandomImage(),
  },
  topics: [topicSchema],
  creationDate: { type: Date, default: Date.now },
  userId: { type: String, required: true },
});

subjectSchema.index({ title: "text", description: "text" });

module.exports = mongoose.model("Subject", subjectSchema);
