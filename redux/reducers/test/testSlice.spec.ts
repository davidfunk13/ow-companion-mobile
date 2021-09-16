import testReducer, {
	TestSliceState,
	decrement,
	increment,
	incrementByAmount,
} from "./testSlice";
  
describe("test reducer", () => {
	const initialState: TestSliceState = {
		value:  3,
		status: "idle",
	};

	it("should handle initial state", () => {
		expect(testReducer(undefined, { type: "unknown", })).toEqual({
			value:  0,
			status: "idle",
		});
	});
  
	it("should handle increment", () => {
		const actual = testReducer(initialState, increment());

		expect(actual.value).toEqual(4);
	});
  
	it("should handle decrement", () => {
		const actual = testReducer(initialState, decrement());

		expect(actual.value).toEqual(2);
	});
  
	it("should handle incrementByAmount", () => {
		const actual = testReducer(initialState, incrementByAmount(2));

		expect(actual.value).toEqual(5);
	});
});
