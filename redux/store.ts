import testReducer from "./reducers/test/testSlice";
import themeReducer from "./reducers/theme/themeSlice";
import { Action, ThunkAction, configureStore, } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    test: testReducer,
    theme: themeReducer,
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
