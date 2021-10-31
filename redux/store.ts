import battletagSearchSlice from "./reducers/battletagSearchSlice/battletagSearchSlice";
import battletagsSlice from "./reducers/battletagsSlice/battletagsSlice";
import logger from "redux-logger";
import modalSlice from "./reducers/modalSlice/modalSlice";
import { Action, ThunkAction, configureStore, } from "@reduxjs/toolkit";

export const store = configureStore({
	reducer: {
		battletags:      battletagsSlice,
		battletagSearch: battletagSearchSlice, 
		modal:           modalSlice,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
