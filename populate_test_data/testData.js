const { getRandomImage } = require("../utils/imageHandlers");

const testData = {
	subjects: [
		{
			title: "Subject 1",
			description: "Desc 1",
			image: getRandomImage(),
			topics: [
				{
					title: "Topic 1",
					image: getRandomImage(),
				},
				{
					title: "Topic 2",
					image: getRandomImage(),
				},
				{
					title: "Topic 3",
					image: getRandomImage(),
				},
				{
					title: "Topic 4",
					image: getRandomImage(),
				},
				{
					title: "Topic 5",
					image: getRandomImage(),
				},
				{
					title: "Topic 6",
					image: getRandomImage(),
				},
			],
		},
		{
			title: "Subject 2",
			description: "Desc 2",
			image: getRandomImage(),
			topics: [
				{
					title: "Topic 1",
					image: getRandomImage(),
				},
				{
					title: "Topic 2",
					image: getRandomImage(),
				},
				{
					title: "Topic 3",
					image: getRandomImage(),
				},
			],
		},
		{
			title: "Subject 3",
			description: "Desc 3",
			image: getRandomImage(),
			topics: [
				{
					title: "Topic 1",
					image: getRandomImage(),
				},
				{
					title: "Topic 2",
					image: getRandomImage(),
				},
				{
					title: "Topic 3",
					image: getRandomImage(),
				},
			],
		},
	],
};

module.exports = testData;
