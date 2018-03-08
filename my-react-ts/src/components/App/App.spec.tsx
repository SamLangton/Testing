/*
	Snapshot tests for "./App.tsx"
*/
import * as React from 'react';
import App from './App';
import * as renderer from 'react-test-renderer';

describe('./App.tsx', () => {

	it('should render as expected', () => {
		const component = renderer.create(
			<App
			/>
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});