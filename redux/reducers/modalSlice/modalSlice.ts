import { RootState, } from "../../store";
import { PayloadAction, createSlice, } from "@reduxjs/toolkit";

export interface IModalSliceState {
	open: boolean
}

const initialState: IModalSliceState = { open: false, };

export const modalSlice = createSlice({
	name:     "modal",
	initialState,
	reducers: {
		setModalOpen: (state: IModalSliceState, action: PayloadAction<boolean>) => {
			state.open = action.payload;
		},
	},
});

export const selectModalOpen = (state: RootState) => state.modal.open;

export const { setModalOpen, } = modalSlice.actions;

export default modalSlice.reducer;
