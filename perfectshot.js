let finalPosition = (moves) => {
	let coords = [0, 0];
	for (let move of moves) {
		switch (move) {
			case "north":
				coords[1] += 1;
				break;
			case "south":
				coords[1] -= 1;
				break;
			case "east":
				coords[0] += 1;
				break;
			case "west":
				coords[0] -= 1;
				break;
		}
		console.log(coords);
	}
	return coords;
};

const moves = ["north", "north", "west", "west", "north", "east", "north"];

console.log(finalPosition(moves));
