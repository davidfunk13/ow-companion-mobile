import { MonoText, } from "../Examples/StyledText";
import React from "react";
import renderer from "react-test-renderer";

describe("Styled Text", () => {
	it(`renders correctly`, () => {
		const tree = renderer.create(<MonoText>Snapshot test!</MonoText>).toJSON();
  
		expect(tree).toMatchSnapshot();
	});
});

