const mongoose = require("mongoose");
const Topic = mongoose.model("Topic");
const Subject = mongoose.model("Subject");

exports.getTopics = async (req, res) => {
	try {
		const subject = await Subject.findById(req.params.subjectId);
		const topicIds = subject.topics.map((t) => t.topicId);
		const topics = topicIds.map((id) => Topic.findById(id));
		return res.json(topics);
	} catch (error) {
		// console.log(error);
		console.log("COULD NOT FIND TOPICS FOR SUBJECT WITH ID: ", req.params);
		return res.status(422).send(error.message);
	}
};

exports.getTopic = async (req, res) => {
	try {
		const topic = await Topic.findById(req.params.topicId);
		return res.json(topic);
	} catch (error) {
		console.log("COULD NOT FIND TOPIC WITH ID: ", req.params);
		return res.status(422).send(error.message);
	}
};

exports.addTopic = async (req, res) => {
	try {
		const topicJSON = req.body;
		const topic = new Topic(topicJSON);

		const userId = req.user.sub;
		topic.userId = userId;

		const addedTopic = await topic.save();
		return res.json(addedTopic);
	} catch (error) {
		console.log("Error during add topic: ", error);
		return res.status(422).send(error.message);
	}
};
