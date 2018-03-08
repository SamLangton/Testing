/*
	Snapshot tests for "./Race.tsx"
*/
import * as React from 'react';
import Race from './Race';
import * as renderer from 'react-test-renderer';
jest.mock('../Race', () => 'Race');
describe('./Race.tsx', () => {

	it('should render as expected', () => {
		
		beforeEach(() => {
			require('Race').src = "https://avatars1.githubusercontent.com/u/16746699?v=4";
		});
		const component = renderer.create(
			<Race raceInProgress = {false}
			raceStartPosition={true}
			setWinner = {''} 
			/>
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});