export class Pos {
	x: number = 0;
	y: number = 0;

	constructor(x: number = 0, y: number = 0) {
		this.x = x;
		this.y = y;
	}

	// Method to add two Pos objects
	add(other: Pos): Pos {
		return new Pos(this.x + other.x, this.y + other.y);
	}

	// Method to add two Pos objects
	sub(other: Pos): Pos {
		return new Pos(this.x - other.x, this.y - other.y);
	}
}
