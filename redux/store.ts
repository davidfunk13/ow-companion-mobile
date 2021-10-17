import battletagSearchSlice from "./reducers/battletagSearchSlice/battletagSearchSlice";
import battletagsSlice from "./reducers/battletagsSlice/battletagsSlice";
import { Action, ThunkAction, configureStore, } from "@reduxjs/toolkit";

export const store = configureStore({
	reducer: {
		battletags:      battletagsSlice,
		battletagSearch: battletagSearchSlice, 
	}, 
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
