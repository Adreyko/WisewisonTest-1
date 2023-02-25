import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRepo } from "../../../../api/getRepo";
import { IRepo } from "../../../../intarfaces/intarfaces";
import { setRepos } from "../RepoSlice";

export const fetchRepo = createAsyncThunk(
  "repo/fetchRepo",
  async (userName: string, { dispatch }) => {
    const { data } = await getRepo(userName + "/repos");
    const repos: IRepo[] = data.map((el: IRepo) => ({
      name: el.name,
      html_url: el.html_url,
      id: el.id,
    }));
    dispatch(setRepos(repos));
  }
);
