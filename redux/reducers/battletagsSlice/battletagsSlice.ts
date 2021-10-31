import Battletag from "../../../models/Battletag";
import { RootState, } from "../../store";
import deleteBattletagThunk from "../../thunks/battletag/delete/deleteBattletagThunk";
import getAllBattletagsThunk from "../../thunks/battletag/getAll/getAllBattletagsThunk";
import { PayloadAction, createSlice, } from "@reduxjs/toolkit";

export interface IBattletagSliceState {
	loading: boolean
	battletags: Battletag[]
	selected?: Battletag,
	deleteLoading: boolean
	error: string
}

const initialState: IBattletagSliceState = {
	loading:       false,
	deleteLoading: false,
	battletags:    [],
	selected:      undefined, 
	error:         "",
};

export const battletagsSlice = createSlice({
	name:     "battletags",
	initialState,
	reducers: {
		setBattletags: (state, action) => {
			state.battletags = action.payload;
		},
		setSelectedBattletag: (state, action:PayloadAction<Battletag>) => {
			state.selected = action.payload;
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

				state.battletags=initialState.battletags;
			})
			.addCase(getAllBattletagsThunk.fulfilled, (state: IBattletagSliceState, action) => {
				state.error = initialState.error;

				state.loading = false;

				state.battletags = action.payload as Battletag[];
			})
			.addCase(getAllBattletagsThunk.rejected, (state: IBattletagSliceState, action) => {
				state.loading = false;

				state.battletags = initialState.battletags;

				state.error = action.payload as string;
			})
			.addCase(deleteBattletagThunk.pending, (state: IBattletagSliceState) => {
				state.deleteLoading = true;
			})
			.addCase(deleteBattletagThunk.fulfilled, (state: IBattletagSliceState) => {
				state.deleteLoading = false;
			})
			.addCase(deleteBattletagThunk.rejected, (state: IBattletagSliceState, action) => {
				state.deleteLoading = false;

				state.error = action.payload as string;
			});
	},
});

export const selectBattletags = (state: RootState) => state.battletags.battletags;
export const selectBattletagsLoading = (state: RootState) => state.battletags.loading;
export const selectBattletagsError = (state: RootState) => state.battletags.error;
export const selectSelectedBattletag = (state: RootState) => state.battletags.selected;
export const selectDeleteBattletagLoading = (state: RootState) => state.battletags.deleteLoading;

export const { resetBattletagsSlice, setBattletags, setSelectedBattletag, } = battletagsSlice.actions;

export default battletagsSlice.reducer;
