/*
	Snapshot tests for "./Race.tsx"
*/
import * as React from 'react';
import Race from './Race';
// import * as renderer from 'react-test-renderer';
import * as ShallowRenderer from 'react-test-renderer/shallow';
import { getRacerData } from '../../utils';
jest.mock('../Race', () => 'Race');
describe('./Race.tsx', () => {

	it('should render as expected', () => {
		const renderer = new ShallowRenderer();
		renderer.render(<Race raceInProgress = {false}
			raceStartPosition={true}
			setWinner = { () => '' } />);
		const raceState = getRacerData();
		const result = renderer.getRenderOutput().setState({racer: raceState[0]});
		// const component = renderer.create(
		// 	<Race raceInProgress = {false}
		// 	raceStartPosition={true}
		// 	setWinner = { () => '' }
			 
		// 	/>
		// )
		let tree = result.toJSON();
		expect(tree).toMatchSnapshot();
	});
});