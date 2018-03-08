/*
	Snapshot tests for "./ScoreBoard.tsx"
*/
import * as React from 'react';
import ScoreBoard from './ScoreBoard';
import * as renderer from 'react-test-renderer';

describe('./ScoreBoard.tsx', () => {
	console.log(<ScoreBoard lastWinner={""}/>)
	it('should render as expected', () => {
		const component = renderer.create(
			<ScoreBoard lastWinner={""} />
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});