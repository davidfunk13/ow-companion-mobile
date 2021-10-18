import Battletag from "../../../models/Battletag";
import { RootState, } from "../../store";
import { createSlice, } from "@reduxjs/toolkit";
import deleteBattletagThunk from "../../thunks/battletag/delete/deleteBattletagThunk";
import getAllBattletagsThunk from "../../thunks/battletag/getAll/getAllBattletagsThunk";

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
		setBattletags: (state, action) => {
			state.battletags = action.payload;
		},
		resetBattletagsSlice: (state: IBattletagSliceState) => {
			state.loading = initialState.loading;

			state.battletags = initialState.battletags;

			state.error = initialState.error;
		},
	},
	extraReducers: (builder) => {
		builder
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
			})
			.addCase(deleteBattletagThunk.pending, (state: IBattletagSliceState) => {
				state.loading = true;
			})
			.addCase(deleteBattletagThunk.fulfilled, (state: IBattletagSliceState, action) => {
				state.loading = false;
			})
			.addCase(deleteBattletagThunk.rejected, (state: IBattletagSliceState, action) => {
				state.loading = false;

				state.error = action.payload as string;
			});
	},
});

export const selectBattletagsLoading = (state: RootState) => state.battletags.loading;
export const selectBattletags = (state: RootState) => state.battletags.battletags;
export const selectBattletagsError = (state: RootState) => state.battletags.error;

export const { resetBattletagsSlice, setBattletags, } = battletagsSlice.actions;

export default battletagsSlice.reducer;
