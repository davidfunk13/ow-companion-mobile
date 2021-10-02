import battletagSearchReducer, { IBattletagSearchSliceState, battletagSearchSlice, resetBattletagSearchSlice, } from "./battletagSearch";
  
describe("battletagSearchSlice reducer", () => {
	const initialState: IBattletagSearchSliceState = {
		loading:    false,
		battletags: [],
		error:      "", 
	};

	it("should handle initial state", () => {
		expect(battletagSearchReducer(undefined,
			{ type: "unknown", }))
			.toEqual(initialState);
	});
  
	it("should handle increment", () => {
		const reset = battletagSearchReducer(initialState, resetBattletagSearchSlice());

		expect(reset).toEqual(initialState);
	});
  
});
