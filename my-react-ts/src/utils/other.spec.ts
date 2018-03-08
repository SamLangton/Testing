import {
	isNullOrEmpty, isNullOrUndefined, isNullOrWhitespace, isArrayAndEmpty,
	isObject, isObjectAndEmpty, isStringAndEmpty, isUndefined, deepCopy
} from './other';

/*
	Functions that should have tests from "./other.ts"
	- isNullOrUndefined
	- isNullOrEmpty
	- isUndefined
	- isNullOrWhitespace
	- isStringAndEmpty
	- isArrayAndEmpty
	- isObject
	- isObjectAndEmpty
	- deepCopy
*/
describe('./other.ts', () => {
	it('should check if isNullOrUndefined', () => {
		const value = null;
		expect(isNullOrUndefined(value)).toBeTruthy;
	});

	it('should check if isNullOrEmpty', () => {
		const value = [];
		expect(isNullOrEmpty(value)).toBeTruthy;
	});

	it('should check if isUndefined', () => {
		const value = undefined;
		expect(isUndefined(value)).toBeTruthy;
	});

	it('should check if isNullOrWhitespaces', () => {
		const value = '';
		expect(isNullOrWhitespace(value)).toBeTruthy;
	});

	it('should check if isStringAndEmpty', () => {
		const value = '';
		expect(isStringAndEmpty(value)).toBeTruthy;
	});

	it('should check if isArrayAndEmpty', () => {
		const value = [];
		expect(isArrayAndEmpty(value)).toBeTruthy;
	});

	it('should check if isObject', () => {
		const value: Object = '';
		expect(isObject(value)).toBeTruthy;
	});

	it('should check if isObjectAndEmpty', () => {
		const value: Object = '';
		expect(isObjectAndEmpty(value)).toBeTruthy;
	});

	it('should check if deepCopy', () => {
		expect(deepCopy).toBeTruthy();
	});

});