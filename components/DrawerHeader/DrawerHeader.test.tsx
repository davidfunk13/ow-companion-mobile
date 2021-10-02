import DrawerHeader from "./DrawerHeader";
import React from "react";
import { render , } from "@testing-library/react-native";

describe("DrawerHeader", () => {
	it("renders correctly", () => {
		const tree = render(<DrawerHeader />).toJSON();
    
		expect(tree).toMatchSnapshot();
	});
});
