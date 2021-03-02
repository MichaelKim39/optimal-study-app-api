const mongoose = require("mongoose");
const Subject = mongoose.model("Subject");

exports.getSubjects = async (req, res) => {
	const subjects = await Subject.find({});
	return res.json(subjects);
};

exports.getSubject = async (req, res) => {
	try {
		const subject = await Subject.findById(req.params.subjectId);
		console.log("FOUND SUBJECT WITH ID: ", req.params);
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
		return res.json(editedSubject);
	} catch (error) {
		console.log(error);
		return res.status(422).send(error.message);
	}
};
