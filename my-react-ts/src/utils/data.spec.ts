/*
	Functions that should have tests from "./data.ts"
	- getRacerData
*/
import { getRacerData } from './data';
const expected = Array<Object>();
describe('./data.ts', () => {
	it('should get the racer data', () => {
		expect(getRacerData()).toEqual(expect.arrayContaining(expected));
	});
});