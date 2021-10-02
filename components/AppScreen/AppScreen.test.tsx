import AppScreen from "./AppScreen";
import React from "react";
import renderer from "react-test-renderer";

describe("<App />", () => {
	it("renders correctly", () => {
		const tree = renderer.create(<AppScreen />).toJSON();

		expect(tree).toMatchSnapshot();
	});
});
