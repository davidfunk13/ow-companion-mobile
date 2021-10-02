import Battletag from "../../../models/Battletag";
import battletagSearch from "../../thunks/battletagSearch/battletagSearchThunk";
import { PayloadAction, createSlice, } from "@reduxjs/toolkit";
import { RootState, } from "../../store";

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
	name:          "battletagSearch",
	initialState,
	reducers:      {},
	extraReducers: builder => {
		builder
			.addCase(battletagSearch.pending, (state: IBattletagSearchSliceState) => {
				state.loading = true;
			})
			.addCase(battletagSearch.rejected, (state: IBattletagSearchSliceState, action: PayloadAction<unknown>) => {
				state.loading = false;

				state.battletags = initialState.battletags;

				state.error = action.payload as string;
			}).addCase(battletagSearch.fulfilled, (state: IBattletagSearchSliceState, action: PayloadAction<Battletag[]>) => {
				state.loading = false;

				state.error = "";

				console.log({ slice: action.payload , });

				state.battletags = action.payload;
			});
	},
});

export const selectBattletagSearchLoading = (state: RootState) => state.battletagSearch.loading;
export const selectBattletagSearchBattletags = (state: RootState) => state.battletagSearch.battletags;
export const selectBattletagSearchError = (state: RootState) => state.battletagSearch.error;

export default battletagSearchSlice.reducer;
