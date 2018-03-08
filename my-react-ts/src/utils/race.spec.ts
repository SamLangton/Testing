import { calculateRacerPosition } from ".";

/*
	Functions that should have tests from "./race.ts"
	- calculateRacerPosition
*/

describe('./race.ts', () => {
	const value = 0;
	it('should caluculateRacerPosition', () => {
		expect(calculateRacerPosition(value)).toBeGreaterThan(0);
	});
});