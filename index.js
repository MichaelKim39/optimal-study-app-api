const express = require("express");
const { connectMongoose } = require("./database");

const port = parseInt(process.env.PORT, 10) || 3001;
const app = express();

const initialiseServer = async () => {
	await connectMongoose();
	const subjectsRoutes = require("./routes/subjects");
	app.use("/api/v1/subjects", subjectsRoutes);
	app.listen(port, (error) => {
		console.log(error || `Server ready on port ${port}`);
	});
};

initialiseServer();
