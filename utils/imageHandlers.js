const generateSeed = (seedLength) => {
	let seed = "";
	let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for (var i = 0; i < seedLength; i++) {
		seed += chars.charAt(Math.floor(Math.random() * chars.length));
	}
	return seed;
};

exports.getRandomImage = (
	seed = generateSeed(5),
	width = 400,
	height = 400
) => {
	// return `https://source.unsplash.com/300x300/daily?learning`;
	return `https://picsum.photos/seed/${seed}/${width}/${height}`;
};
