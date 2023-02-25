import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRepo } from "../../../../api/getRepo";
import { setRepos } from "../RepoSlice";

export const fetchRepo = createAsyncThunk(
  "repo/fetchRepo",
  async (userName: string, { dispatch }) => {
    const { data } = await getRepo(userName + "/repos");
    dispatch(setRepos(data));
  }
);
