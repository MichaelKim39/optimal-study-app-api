const mongoose = require("mongoose");

const testTopics = [
	{
		title: "Topic 1",
		description: "Topic Desc 1",
		notes: "this is some notes...",
		cards: [
			{
				question: "Card 1 question",
				answer: "Card 1 answer",
			},
		],
	},
	{
		title: "Topic 2",
		description: "Topic Desc 2",
		notes: "this is some notes...",
		cards: [
			{
				question: "Card 2 question",
				answer: "Card 2 answer",
			},
		],
	},
	{
		title: "Topic 3",
		description: "Topic Desc 3",
		notes: "this is some notes...",
		cards: [
			{
				question: "Card 3 question",
				answer: "Card 3 answer",
			},
		],
	},
	{
		title: "Topic 4",
		description: "Topic Desc 4",
		notes: "this is some notes...",
		cards: [
			{
				question: "Card 4 question",
				answer: "Card 4 answer",
			},
		],
	},
	{
		title: "Topic 5",
		description: "Topic Desc 5",
		notes: "this is some notes...",
		cards: [
			{
				question: "Card 5 question",
				answer: "Card 5 answer",
			},
		],
	},
	{
		title: "Topic 6",
		description: "Topic Desc 6",
		notes: "this is some notes...",
		cards: [
			{
				question: "Card 6 question",
				answer: "Card 6 answer",
			},
		],
	},
	{
		title: "Topic 7",
		description: "Topic Desc 7",
		notes: "this is some notes...",
		cards: [
			{
				question: "Card 7 question",
				answer: "Card 7 answer",
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
		title: "Subject 1",
		description: "Desc 1",
		userId: "google-oauth2|103866370184806712992",
		topics: [testTopics[0], testTopics[1]],
	},
	{
		title: "Subject 2",
		description: "Desc 2",
		userId: "google-oauth2|103866370184806712992",
		topics: [testTopics[2], testTopics[3]],
	},
	{
		title: "Subject 3",
		description: "Desc 3",
		userId: "google-oauth2|103866370184806712992",
		topics: [testTopics[4], testTopics[5]],
	},
];

module.exports = { testTopics, testSubjects };
