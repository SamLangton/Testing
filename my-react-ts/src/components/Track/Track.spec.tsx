/*
	Snapshot tests for "./Track.tsx"
*/
import * as React from 'react';
import Track from './Track';
import * as renderer from 'react-test-renderer';

describe('./Track.tsx', () => {
	it('should render as expected', () => {
		const component = renderer.create(
			<Track />
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});