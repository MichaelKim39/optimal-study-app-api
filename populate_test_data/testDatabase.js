const { subjects: subjectData, topics: topicData } = require("./testData");
const SubjectModel = require("../database/models/subject");
const TopicModel = require("../database/models/topic");

class TestDatabase {
	async clearData() {
		await SubjectModel.deleteMany({});
		await TopicModel.deleteMany({});
	}

	async addData() {
		await SubjectModel.create(subjectData);
		await TopicModel.create(topicData);
	}

	async reloadData() {
		await this.clearData();
		await this.addData();
	}
}

module.exports = new TestDatabase();
