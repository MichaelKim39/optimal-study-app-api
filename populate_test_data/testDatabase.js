const { testSubjects } = require("./testData");
const SubjectModel = require("../database/models/subject");

class TestDatabase {
	async clearData() {
		await SubjectModel.deleteMany({});
	}

	async addData() {
		await SubjectModel.create(testSubjects);
	}

	async reloadData() {
		await this.clearData();
		await this.addData();
	}
}

module.exports = new TestDatabase();
