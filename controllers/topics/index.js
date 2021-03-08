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

exports.getTopic = async (req, res) => {
	const { subjectId, topicId } = req.params;
	try {
		const subject = await Subject.findById(subjectId);
		const topic = subject.topics.find((t) => t._id == topicId);
		return res.json(topic);
	} catch (error) {
		console.log("COULD NOT FIND TOPIC WITH ID: ", topicId);
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

exports.editNotes = async (req, res) => {
	try {
		const {
			body,
			params: { subjectId, topicId },
		} = req;

		const editedSubject = await Subject.findOneAndUpdate(
			{ _id: subjectId },
			{
				$set: {
					"topics.$[topic].notes": body.markdown,
					"topics.$[topic]._id": topicId,
				},
			},
			{
				arrayFilters: [{ "topic._id": topicId }],
				new: true,
				returnOriginal: false,
				returnNewDocument: true,
			}
		);

		return res.json("Edit Notes working");
	} catch (error) {
		console.log("EDIT TOPIC NOTES FAILED WITH ERROR: ", error);
		return res.status(422).send(error.message);
	}
};

exports.addCard = async (req, res) => {
	try {
		const {
			body: newCard,
			params: { subjectId, topicId },
		} = req;

		const editedSubject = await Subject.findOneAndUpdate(
			{ _id: subjectId },
			{
				$push: {
					"topics.$[topic].cards": newCard,
				},
				$set: {
					"topics.$[topic]._id": topicId,
				},
			},
			{
				arrayFilters: [{ "topic._id": topicId }],
				new: true,
				returnOriginal: false,
				returnNewDocument: true,
			}
		);

		return res.json("Add card working");
	} catch (error) {
		console.log("ADD TOPIC CARD FAILED WITH ERROR: ", error);
		return res.status(422).send(error.message);
	}
};

exports.editCard = async (req, res) => {
	try {
		const {
			body: { cardId, newCard },
			params: { subjectId, topicId },
		} = req;

		const editedSubject = await Subject.findOneAndUpdate(
			{ _id: subjectId },
			{
				$set: {
					"topics.$[topic].cards.$[card]": newCard,
					"topics.$[topic]._id": topicId,
				},
			},
			{
				arrayFilters: [{ "topic._id": topicId }, { "card._id": cardId }],
				new: true,
				returnOriginal: false,
				returnNewDocument: true,
			}
		);

		return res.json("Edit card working");
	} catch (error) {
		console.log("EDIT TOPIC CARD FAILED WITH ERROR: ", error);
		return res.status(422).send(error.message);
	}
};

exports.getCard = async (req, res) => {
	const {
		body: { cardId },
		params: { subjectId, topicId },
	} = req;

	try {
		const subject = await Subject.findById(subjectId);
		const topic = subject.topics.find((t) => t._id == topicId);
		const card = topic.cards.find((c) => c._id == cardId);
		// console.log("FOUND CARD: ", card);
		return res.json(card);
	} catch (error) {
		console.log("COULD NOT FIND CARD WITH ID: ", cardId);
		return res.status(422).send(error.message);
	}
};
