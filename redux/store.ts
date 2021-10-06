import battletagSearchSlice from "./reducers/battletagSearchSlice/battletagSearchSlice";
import { Action, ThunkAction, configureStore, } from "@reduxjs/toolkit";

export const store = configureStore({ reducer: { battletagSearch: battletagSearchSlice, }, });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
