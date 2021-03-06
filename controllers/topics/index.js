const mongoose = require("mongoose");
const Subject = mongoose.model("Subject");

exports.getTopics = async (req, res) => {
	try {
		const subject = await Subject.findById(req.params.subjectId);
		return res.json(subject.topics);
	} catch (error) {
		// console.log(error);
		console.log("COULD NOT FIND TOPICS FOR SUBJECT WITH ID: ", req.params);
		return res.status(422).send(error.message);
	}
};

exports.addTopic = async (req, res) => {
	try {
		const {
			body: newTopic,
			params: { subjectId },
		} = req;

		const addedTopic = await Subject.findOneAndUpdate(
			{ _id: subjectId },
			{
				$push: {
					topics: newTopic,
				},
			},
			{
				returnNewDocument: true,
			}
		);

		return res.json(addedTopic.topics.pop());
	} catch (error) {
		console.log("Error while adding Topic: ", error);
		return res.status(422).send(error.message);
	}
};

exports.editTopic = async (req, res) => {
	try {
		const {
			body,
			params: { subjectId, topicId },
		} = req;

		const newTopic = { ...body, _id: topicId };

		const editedSubject = await Subject.findOneAndUpdate(
			{ _id: subjectId },
			{
				$set: {
					"topics.$[topic]": newTopic,
				},
			},
			{
				arrayFilters: [{ "topic._id": topicId }],
				new: true,
				returnOriginal: false,
				returnNewDocument: true,
			}
		);

		return res.json(editedSubject);
	} catch (error) {
		console.log("EDIT TOPIC FAILED WITH ERROR: ", error);
		return res.status(422).send(error.message);
	}
};

exports.deleteTopic = async (req, res) => {
	try {
		const deletedTopic = await Subject.updateOne(
			{ "topics._id": req.params.topicId },
			{
				$pull: {
					topics: { _id: req.params.topicId },
				},
			}
		);

		return res.json({ _id: req.params.topicId });
	} catch (error) {
		console.log("DELETE TOPIC FAILED WITH ERROR: ", error);
		return res.status(422).send(error.message);
	}
};
