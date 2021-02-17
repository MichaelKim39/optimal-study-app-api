const express = require("express");

const port = parseInt(process.env.PORT, 10) || 3001;
const app = express();

app.listen(port, (error) => {
	error ? console.log(error) : console.log(`Server ready on port ${port}`);
});
