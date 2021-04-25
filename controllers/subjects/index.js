const mongoose = require("mongoose");
const Subject = mongoose.model("Subject");

exports.getSubjects = async (req, res) => {
	const subjects = await Subject.find({ userId: req.user.sub });
	return res.json(subjects);
};

exports.getSubject = async (req, res) => {
	try {
		const subject = await Subject.findById(req.params.subjectId);
		return res.json({ data: subject, message: "GET subject working" });
	} catch (error) {
		// console.log(error);
		console.log("COULD NOT FIND SUBJECT WITH ID: ", req.params);
		return res.status(422).send(error.message);
	}
};

exports.addSubject = async (req, res) => {
	try {
		const subjectJSON = req.body;
		const subject = new Subject(subjectJSON);
		const userId = req.user.sub;
		subject.userId = userId;

		const addedSubject = await subject.save();
		return res.json({ data: addedSubject, message: "ADD subject working" });
	} catch (error) {
		console.log(error);
		return res.status(422).send(error.message);
	}
};

exports.editSubject = async (req, res) => {
	try {
		const {
			body: newSubject,
			params: { subjectId },
		} = req;

		const editedSubject = await Subject.findOneAndUpdate(
			{ _id: subjectId },
			newSubject,
			{ new: true, runValidators: true }
		);

		// console.log("EDIT SUBJECT SUCCESS WITH REQ: ", newSubject);
		return res.json(editedSubject);
	} catch (error) {
		console.log("EDIT SUBJECT FAILED WITH ERROR: ", error);
		return res.status(422).send(error.message);
	}
};

exports.deleteSubject = async (req, res) => {
	const deletedSubject = await Subject.findOneAndDelete({
		_id: req.params.subjectId,
	});
	// console.log("Deleted subject: ", deletedSubject);
	return res.json({ _id: deletedSubject._id });
};

exports.searchSubjects = async (req, res) => {
	const { query } = req.params;
	try {
		const searchResults = await Subject.find({
			$text: {
				$search: query,
				$caseSensitive: false,
				$diacriticSensitive: false,
			},
		});
		return res.json(searchResults);
	} catch (error) {
		console.log("COULD NOT GET SEARCH RESULTS FOR QUERY: ", query);
		return res.status(422).send(error.message);
	}
};

exports.saveSubject = async (req, res) => {
	try {
		const subjectJSON = req.body;

		const resetCardBuckets = (topics) => {
			const resetTopics = topics.map((topic) => {
				topic.cards.map((card) => {
					card.bucket = 1;
					return card;
				});
				return topic;
			});
			return resetTopics;
		};

		const resetTopics = resetCardBuckets(subjectJSON.topics);

		const subjectCopy = {
			title: subjectJSON.title,
			description: subjectJSON.description,
			image: subjectJSON.image,
			topics: resetTopics,
		};
		const subject = new Subject(subjectCopy);

		const userId = req.user.sub;
		subject.userId = userId;

		const savedSubject = await subject.save();
		return res.json({ data: savedSubject, message: "SAVE subject working" });
	} catch (error) {
		console.log(error);
		return res.status(422).send(error.message);
	}
};
