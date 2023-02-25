import { createSlice } from "@reduxjs/toolkit";
import { IRepo } from "../../../intarfaces/intarfaces";
import { PayloadAction } from "@reduxjs/toolkit";
import { fetchRepo } from "./thunk/fetchRepo";

interface IState {
  repos: IRepo[];
  error: null | string;
  status: "loading" | "resolved" | "rejected" | null;
}

const initialState: IState = {
  repos: [],
  error: null,
  status: null,
};

const RepoSlice = createSlice({
  name: "repos",
  initialState,
  reducers: {
    setRepos(state: IState, action: PayloadAction<IRepo[]>) {
      state.repos = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRepo.pending, (state: IState) => {
      state.error = null;
      state.status = "loading";
    });
    builder.addCase(fetchRepo.fulfilled, (state: IState) => {
      state.error = null;
      state.status = "resolved";
    });
    builder.addCase(fetchRepo.rejected, (state: IState, action: any) => {
      state.error = action.payload;
      state.repos = [];
      state.status = "rejected";
    });
  },
});

export const { setRepos } = RepoSlice.actions;
export default RepoSlice.reducer;
