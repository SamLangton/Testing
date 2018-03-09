/*
	Snapshot tests for "./Horse.tsx"
*/
import * as React from 'react';
import Horse from './Horse';
import * as renderer from 'react-test-renderer';
import { getRacerData } from '../../utils';

describe('./Horse.tsx', () => {

	it('should render as expected', () => {
		const component = renderer.create(
			<Horse racer={"Racer"}/>
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});