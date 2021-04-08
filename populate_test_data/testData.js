const mongoose = require("mongoose");
const { getRandomImage } = require("../utils/imageHandlers");

const testTopics = [
	{
		title: "Perceptron Model",
		description: "Specific Machine Learning Model",
		notes: "Notes for perceptron model",
		image: getRandomImage(),
		cards: [
			{
				question: "Card 1 question",
				answer: "Card 1 answer",
			},
			{
				question: "Card 2 question",
				answer: "Card 2 answer",
			},
			{
				question: "Card 3 question",
				answer: "Card 3 answer",
			},
			{
				question: "Card 4 question",
				answer: "Card 4 answer",
			},
			{
				question: "Card 5 question",
				answer: "Card 5 answer",
			},
		],
	},
	{
		title: "ML Intro",
		description: "Introductory Information",
		notes: "Machine Learning Intro Notes",
		image: getRandomImage(),
		cards: [
			{
				question: "Card 1 question",
				answer: "Card 1 answer",
			},
		],
	},
	{
		title: "PCA Data analysis",
		description: "Learning PCA with Matlab",
		notes: "Machine Learning Notes",
		image: getRandomImage(),
		cards: [
			{
				question: "Card 1 question",
				answer: "Card 1 answer",
			},
		],
	},
	{
		title: "HTML & CSS Basics",
		description: "Learning the basic elements and how to use HTML and CSS",
		notes: "this is some notes...",
		image: getRandomImage(),
		cards: [
			{
				question: "Card 3 question",
				answer: "Card 3 answer",
			},
		],
	},
	{
		title: "Fair use regulations",
		description:
			"Learning about copyright and fair use regulations and policies",
		notes: "Here are some notes",
		image: getRandomImage(),
		cards: [
			{
				question: "Card 4 question",
				answer: "Card 4 answer",
			},
		],
	},
	{
		title: "Copyright Laws",
		description:
			"Learning about copyright and fair use regulations and policies",
		notes: "Here are some notes",
		image: getRandomImage(),
		cards: [
			{
				question: "Card 4 question",
				answer: "Card 4 answer",
			},
		],
	},
	{
		title: "Nielsen's Heuristics",
		description: "Guidelines for optimal interface design",
		notes: "this is some notes...",
		image: getRandomImage(),
		cards: [
			{
				question: "Card 5 question",
				answer: "Card 5 answer",
			},
		],
	},
	{
		title: "Cognitive Walkthrough",
		description: "A framework for evaluating the interface of applications",
		notes: "Here are some notes",
		image: getRandomImage(),
		cards: [
			{
				question: "Card 6 question",
				answer: "Card 6 answer",
			},
		],
	},
	{
		title: "Guidelane Based Evaluation",
		description: "A method to evaluate system interfaces",
		notes: "Here are some notes",
		image: getRandomImage(),
		cards: [
			{
				question: "Card 6 question",
				answer: "Card 6 answer",
			},
		],
	},
	{
		title: "Topic 8",
		description: "Topic Desc 8",
		notes: "this is some notes...",
		cards: [
			{
				question: "Card 8 question",
				answer: "Card 8 answer",
			},
		],
	},
	{
		title: "Topic 9",
		description: "Topic Desc 9",
		notes: "this is some notes...",
		cards: [
			{
				question: "Card 9 question",
				answer: "Card 9 answer",
			},
		],
	},
];

const testSubjects = [
	{
		title: "Machine Learning",
		description: "Learning to build ML models",
		userId: "google-oauth2|103866370184806712992",
		image: getRandomImage(),
		topics: [testTopics[0], testTopics[1], testTopics[2]],
	},
	{
		title: "Professional Skills",
		description:
			"Learning foundational, professional skills for computer scientists",
		userId: "google-oauth2|103866370184806712992",
		image: getRandomImage(),
		topics: [testTopics[3], testTopics[4], testTopics[5]],
	},
	{
		title: "Social Informatics",
		description: "Learning the best practices for app UI & UX",
		userId: "google-oauth2|103866370184806712992",
		image: getRandomImage(),
		topics: [testTopics[6], testTopics[7], testTopics[8]],
	},
	{
		title: "Artificial Intelligence",
		description: "Learning the best practices for app UI & UX",
		userId: "google-oauth2|103866370184806712992",
		image: getRandomImage(),
		topics: [testTopics[6]],
	},
	{
		title: "Fault Tolerant Systems",
		description: "Learning the best practices for app UI & UX",
		userId: "google-oauth2|103866370184806712992",
		image: getRandomImage(),
		topics: [testTopics[6]],
	},
	{
		title: "MichaelKim339's Subject",
		description: "Test desc",
		userId: "google-oauth2|103076374532045017991",
		image: getRandomImage(),
		topics: [testTopics[9]],
	},
];

module.exports = { testTopics, testSubjects };
