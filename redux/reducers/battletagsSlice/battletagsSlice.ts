import Battletag from "../../../models/Battletag";
import { RootState, } from "../../store";
import getAllBattletagsThunk from "../../thunks/battletag/getAll/getAllBattletagsThunk";
import { PayloadAction, createSlice, } from "@reduxjs/toolkit";

export interface IBattletagSliceState {
	loading: boolean
	battletags: Battletag[]
	error: string
}

const initialState: IBattletagSliceState = {
	loading:    false,
	battletags: [],
	error:      "",
};

export const battletagsSlice = createSlice({
	name:     "battletags",
	initialState,
	reducers: {
		resetBattletagsSlice: (state: IBattletagSliceState) => {
			state.loading = initialState.loading;

			state.battletags = initialState.battletags;

			state.error = initialState.error;
		},
	},
	extraReducers: builder => builder
		.addCase(getAllBattletagsThunk.pending, (state: IBattletagSliceState) => {
			state.loading = true;
		})
		.addCase(getAllBattletagsThunk.fulfilled, (state: IBattletagSliceState, action) => {
			state.loading = false;

			state.battletags = action.payload;
		})
		.addCase(getAllBattletagsThunk.rejected, (state: IBattletagSliceState, action) => {
			state.loading = false;

			state.error = action.payload as string;
		}),
});

export const selectBattletagsLoading = (state: RootState) => state.battletags.loading;
export const selectBattletags = (state: RootState) => state.battletags.battletags;
export const selectBattletagsError = (state: RootState) => state.battletags.error;

export const { resetBattletagsSlice, } = battletagsSlice.actions;

export default battletagsSlice.reducer;
