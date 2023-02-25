import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import RepoSlice from "../slices/RepoSlice/RepoSlice";

export const store = configureStore({
  reducer: {
    repos: RepoSlice,
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
