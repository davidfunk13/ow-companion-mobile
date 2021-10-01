import { fetchCount, } from "../../mockApi";
import { AppThunk, RootState, } from "../../store";
import { PayloadAction, createAsyncThunk, createSlice, } from "@reduxjs/toolkit";

export interface IThemeState {
    theme: "light" | "dark"
}

const initialState: IThemeState = { theme: "light", };

export const themeSlice = createSlice({
	name:     "theme",
	initialState,
	reducers: {
		setTheme: (state: IThemeState, action: PayloadAction<"light" | "dark">) => {
			state.theme = action.payload;
		},
	},
});

export const { setTheme, } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.theme;

export default themeSlice.reducer;
