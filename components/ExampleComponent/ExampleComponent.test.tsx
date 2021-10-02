import ExampleComponent from "./ExampleComponent";
import React from "react";
import { fireEvent, render, waitFor, } from "@testing-library/react-native";
import renderer from "react-test-renderer";

describe("examples of some things", () => {
	it("renders correctly", () => {
		const tree = render(<ExampleComponent />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it("should do some shit", async () => {

		const { getByTestId, getByText, queryByTestId, toJSON, } = render(<ExampleComponent/>);
    
		const famousProgrammerInHistory = "Ada Lovelace";

		const input = getByTestId("input");

		fireEvent.changeText(input, famousProgrammerInHistory);

		const button = getByText("Print Username");

		fireEvent.press(button);

		await waitFor(() => expect(queryByTestId("printed-username")).toBeTruthy());

		expect(getByTestId("printed-username").props.children).toBe(
			famousProgrammerInHistory
		);

		expect(toJSON()).toMatchSnapshot();
	});
})
;
