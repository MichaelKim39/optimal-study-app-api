const mongoose = require("mongoose");
const Subject = mongoose.model("Subject");

exports.getSubjects = async (req, res) => {
	const subjects = await Subject.find({});
	return res.json(subjects);
};

exports.getSubject = async (req, res) => {
	try {
		const subject = await Subject.findById(req.params.id);
		return res.json({ data: subject, message: "GET subject working" });
	} catch (error) {
		console.log(error);
		return res.status(422).send(error.message);
	}
};

exports.addSubject = async (req, res) => {
	try {
		return res.json({ message: "POST subject working" });
	} catch (error) {
		console.log(error);
		return res.status(422).send(error.message);
	}
};
