import themeReducer, {
	IThemeState,
	setTheme,
} from "./themeSlice";

describe("Theme reducer", () => {
	const initialState: IThemeState = { theme: "light", };

	it("should handle initial state", () => {
		expect(themeReducer(undefined, { type: "unknown", })).toEqual(initialState);
	});

	it("should handle setting the theme  when toggled", () => {
		const actual = themeReducer(initialState, setTheme("dark"));

		expect(actual.theme).toEqual("dark");
	});
});
