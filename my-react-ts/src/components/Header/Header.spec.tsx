/*
	Snapshot tests for "./Header.tsx"
*/
import * as React from 'react';
import Header from './Header';
import * as renderer from 'react-test-renderer';

describe('./Header.tsx', () => {

	it('should render as expected', () => {
		const component = renderer.create(
			<Header raceInProgress={false} lastWinner={''}
			/>
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});