import React from "react";
import renderer from "react-test-renderer";

import AppScreen from "./AppScreen";

describe("<App />", () => {
	it("renders correctly", () => {
		const tree = renderer.create(<AppScreen />).toJSON();

		expect(tree).toMatchSnapshot();
	});
});
