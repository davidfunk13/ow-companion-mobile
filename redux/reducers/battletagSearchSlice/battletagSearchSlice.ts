import Battletag from "../../../models/Battletag";
import { RootState, } from "../../store";
import battletagSearch from "../../thunks/battletagSearch/battletagSearchThunk";
import { PayloadAction, createSlice, } from "@reduxjs/toolkit";

export interface IBattletagSearchSliceState {
	loading: boolean
	battletags: Battletag[]
	error: string
}

const initialState: IBattletagSearchSliceState = {
	loading:    false,
	battletags: [],
	error:      "",
};

export const battletagSearchSlice = createSlice({
	name:     "battletagSearch",
	initialState,
	reducers: {
		resetBattletagSearchSlice: (state: IBattletagSearchSliceState) => {
			state.loading = initialState.loading;

			state.battletags = initialState.battletags;

			state.error = initialState.error;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(battletagSearch.pending, (state: IBattletagSearchSliceState) => {
				state.loading = true;
			})
			.addCase(battletagSearch.rejected, (state: IBattletagSearchSliceState, action: PayloadAction<unknown>) => {
				state.loading = false;

				state.battletags = initialState.battletags;

				state.error = action.payload as string;
			})
			.addCase(battletagSearch.fulfilled, (state: IBattletagSearchSliceState, action: PayloadAction<Battletag[]>) => {
				state.loading = false;

				state.error = "";

				state.battletags = action.payload;
			});
	},
});

export const selectBattletagSearchLoading = (state: RootState) => state.battletagSearch.loading;
export const selectBattletagSearchBattletags = (state: RootState) => state.battletagSearch.battletags;
export const selectBattletagSearchError = (state: RootState) => state.battletagSearch.error;

export const { resetBattletagSearchSlice, } = battletagSearchSlice.actions;

export default battletagSearchSlice.reducer;
