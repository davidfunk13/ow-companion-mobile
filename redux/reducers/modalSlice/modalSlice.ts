import Battletag from "../../../models/Battletag";
import { RootState, } from "../../store";
import { PayloadAction, createSlice, } from "@reduxjs/toolkit";

export interface IModalSliceState {
	open: boolean
	modalData?: Battletag
}

const initialState: IModalSliceState = {
	open:      false,
	modalData: undefined,
};

export const modalSlice = createSlice({
	name:     "modal",
	initialState,
	reducers: {
		setModalOpen: (state: IModalSliceState, action: PayloadAction<boolean>) => {
			state.open = action.payload;
		},
		setModalData: (state: IModalSliceState, action: PayloadAction<Battletag>) => {
			state.modalData = action.payload;
		},
	},
});

export const selectModalOpen = (state: RootState) => state.modal.open;
export const selectModalData = (state: RootState) => state.modal.modalData;

export const { setModalOpen, setModalData, } = modalSlice.actions;

export default modalSlice.reducer;
