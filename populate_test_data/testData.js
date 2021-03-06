const mongoose = require("mongoose");

const { getRandomImage } = require("../utils/imageHandlers");

const testData = {
	subjects: [
		{
			title: "Subject 1",
			description: "Desc 1",
			userId: "google-oauth2|103866370184806712992",
			topics: [
				{
					title: "Topic 1",
					topicId: "1",
				},
				{
					title: "Topic 2",
					topicId: "2",
				},
				{
					title: "Topic 3",
					topicId: "3",
				},
			],
		},
		{
			title: "Subject 2",
			description: "Desc 2",
			userId: "google-oauth2|103866370184806712992",
			topics: [
				{
					title: "Topic 4",
					topicId: "4",
				},
				{
					title: "Topic 5",
					topicId: "5",
				},
			],
		},
		{
			title: "Subject 3",
			description: "Desc 3",
			userId: "google-oauth2|103866370184806712992",
			topics: [
				{
					title: "Topic 6",
					topicId: "6",
				},
				{
					title: "Topic 7",
					topicId: "7",
				},
				{
					title: "Topic 8",
					topicId: "8",
				},
				{
					title: "Topic 9",
					topicId: "9",
				},
			],
		},
	],
	topics: [
		{
			_id: mongoose.Types.ObjectId("000000000001"),
			title: "Topic 1",
			description: "Topic Desc 1",
			notes: "this is some notes...",
			cards: [
				{
					question: "Card 1 question",
					answer: "Card 1 answer",
				},
			],
			userId: "google-oauth2|103866370184806712992",
		},
		{
			_id: mongoose.Types.ObjectId("000000000002"),
			title: "Topic 2",
			description: "Topic Desc 2",
			notes: "this is some notes...",
			cards: [
				{
					question: "Card 2 question",
					answer: "Card 2 answer",
				},
			],
			userId: "google-oauth2|103866370184806712992",
		},
		{
			_id: mongoose.Types.ObjectId("000000000003"),
			title: "Topic 3",
			description: "Topic Desc 3",
			notes: "this is some notes...",
			cards: [
				{
					question: "Card 3 question",
					answer: "Card 3 answer",
				},
			],
			userId: "google-oauth2|103866370184806712992",
		},
		{
			_id: mongoose.Types.ObjectId("000000000004"),
			title: "Topic 4",
			description: "Topic Desc 4",
			notes: "this is some notes...",
			cards: [
				{
					question: "Card 4 question",
					answer: "Card 4 answer",
				},
			],
			userId: "google-oauth2|103866370184806712992",
		},
		{
			_id: mongoose.Types.ObjectId("000000000005"),
			title: "Topic 5",
			description: "Topic Desc 5",
			notes: "this is some notes...",
			cards: [
				{
					question: "Card 5 question",
					answer: "Card 5 answer",
				},
			],
			userId: "google-oauth2|103866370184806712992",
		},
		{
			_id: mongoose.Types.ObjectId("000000000006"),
			title: "Topic 6",
			description: "Topic Desc 6",
			notes: "this is some notes...",
			cards: [
				{
					question: "Card 6 question",
					answer: "Card 6 answer",
				},
			],
			userId: "google-oauth2|103866370184806712992",
		},
		{
			_id: mongoose.Types.ObjectId("000000000007"),
			title: "Topic 7",
			description: "Topic Desc 7",
			notes: "this is some notes...",
			cards: [
				{
					question: "Card 7 question",
					answer: "Card 7 answer",
				},
			],
			userId: "google-oauth2|103866370184806712992",
		},
		{
			_id: mongoose.Types.ObjectId("000000000008"),
			title: "Topic 8",
			description: "Topic Desc 8",
			notes: "this is some notes...",
			cards: [
				{
					question: "Card 8 question",
					answer: "Card 8 answer",
				},
			],
			userId: "google-oauth2|103866370184806712992",
		},
		{
			_id: mongoose.Types.ObjectId("000000000009"),
			title: "Topic 9",
			description: "Topic Desc 9",
			notes: "this is some notes...",
			cards: [
				{
					question: "Card 9 question",
					answer: "Card 9 answer",
				},
			],
			userId: "google-oauth2|103866370184806712992",
		},
	],
};

module.exports = testData;
