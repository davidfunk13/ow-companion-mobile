import { AnyAction, } from "redux";
import battletagSearch from "../../thunks/battletagSearch/battletagSearchThunk";
import reducer, { IBattletagSearchSliceState, resetBattletagSearchSlice, } from "./battletagSearchSlice";

describe("battletagSearchSlice", () => {
	const initialState: IBattletagSearchSliceState = {
		loading:    false,
		battletags: [],
		error:      "", 
	};

	it("should handle initial state", () => {
		const state = reducer(undefined, {} as AnyAction);

		expect(state).toEqual(initialState);
	});
  
	it("should handle reset", () => {   
		const reset = reducer(initialState, resetBattletagSearchSlice());

		expect(reset).toEqual(initialState);
	});
	
	describe("extraReducers", () => {
		it("sets loading to true when battletagSearch thunk is pending", () => {
			const action = { type: battletagSearch.pending.type, };
	
			console.log({ battletagSearch , });
	
			const state = reducer(initialState, action);
	
			expect(state.loading).toEqual(true);
		});
	
		it("sets state correctly when battletagSearchThunk is fulfilled", () => {
			const mockBattletags = [ { id: 1 , }, { id: 2 , } , ];
	
			const action = {
				type:    battletagSearch.fulfilled,
				payload: mockBattletags, 
			};
	
			const state = reducer(initialState, action);
	
			const mockState = {
				loading:    false,
				error:      "",
				battletags: mockBattletags ,
			};
	
			expect(state).toEqual(mockState);
		});
	
		it("sets state correctly when battletagSearchThunk is rejected", () => {
	
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

});
