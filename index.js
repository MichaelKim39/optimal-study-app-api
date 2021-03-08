const express = require("express");
const { connectMongoose } = require("./database");
const bodyParser = require("body-parser");

const port = parseInt(process.env.PORT, 10) || 3001;
const app = express();

const initialiseServer = async () => {
	await connectMongoose();

	app.use(bodyParser.json());

	const subjectsRoutes = require("./routes/subjects");
	const searchRoutes = require("./routes/search");
	app.use("/api/v1/subjects", subjectsRoutes);
	app.use("/api/v1/search", searchRoutes);
	app.listen(port, (error) => {
		console.log(error || `Server ready on port ${port}`);
	});
};

initialiseServer();
