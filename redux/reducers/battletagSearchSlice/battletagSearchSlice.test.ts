import { AnyAction, } from "redux";
import Battletag from "../../../models/Battletag";
import battletagSearch from "../../thunks/battletagSearch/battletagSearchThunk";
import reducer,{
	IBattletagSearchSliceState,
	resetBattletagSearchSlice,
	selectBattletagSearchLoading,
} from "./battletagSearchSlice";
import { selectBattletagSearchBattletags, selectBattletagSearchError, } from "./battletagSearchSlice";

const mockBattletagArray: Battletag[] = [
	{
		id:          2,
		name:        "Dave",
		urlName:     "Dave#42069",
		level:       420,
		portrait:    "XXXXXXXXXXXXX",
		platform:    "nintendo-switch",
		playerLevel: 352342,
		isPublic:    false,
	},
];

const initialState: IBattletagSearchSliceState = {
	loading:    false,
	battletags: [],
	error:      "",
};

describe("battletagSearchSlice", () => {

	it("should handle initial state", () => {
		const state = reducer(undefined, {} as AnyAction);

		expect(state).toEqual(initialState);
	});

	it("should handle reset", () => {
		const reset = reducer(initialState, resetBattletagSearchSlice());

		expect(reset).toEqual(initialState);
	});

	describe("battletagSearchSlice's extraReducers:", () => {
		it("Sets loading to true when battletagSearch thunk is pending.", () => {
			const action = { type: battletagSearch.pending.type, };

			const state = reducer(initialState, action);

			expect(state.loading).toEqual(true);
		});

		it("Sets state correctly when battletagSearchThunk is fulfilled.", () => {
			const action = {
				type:    battletagSearch.fulfilled,
				payload: mockBattletagArray,
			};

			const state = reducer(initialState, action);

			const mockState = {
				loading:    false,
				error:      "",
				battletags: mockBattletagArray,
			};

			expect(state).toEqual(mockState);
		});

		it("Sets state correctly when battletagSearchThunk is rejected.", () => {

			const action = {
				type:    battletagSearch.rejected,
				payload: "big fat soppy vaginas.",
			};

			const state = reducer(initialState, action);

			const mockState = {
				loading:    false,
				error:      action.payload,
				battletags: initialState.battletags,
			};

			expect(state).toEqual(mockState);
		});
	});

	it("Returns the proper values from it's selectors", () => {
		const mockState = {
			battletagSearch: {
				loading:    true,
				error:      "YOU DONE FUCKED UP",
				battletags: mockBattletagArray,
			},
		};

		const loading = selectBattletagSearchLoading(mockState);

		const error = selectBattletagSearchError(mockState);

		const battletags = selectBattletagSearchBattletags(mockState);

		expect(loading).toBe(mockState.battletagSearch.loading);

		expect(error).toBe(mockState.battletagSearch.error);

		expect(battletags).toBe(mockState.battletagSearch.battletags);
	});
});
