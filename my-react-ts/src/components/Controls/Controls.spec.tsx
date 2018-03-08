/*
	Snapshot tests for "./Controls.tsx"
*/
import * as React from 'react';
import Controls from './Controls';
import * as renderer from 'react-test-renderer';;

describe('./Controls', () => {
	it('should render as expected', () =>{
		const component = renderer.create(
			<Controls raceInProgress={false}
			raceStartPosition={true}
			/>
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});