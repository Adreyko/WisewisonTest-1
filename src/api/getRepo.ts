import { url } from "../constants/url";
import axios from "axios";
export const getRepo = (userName: string) =>
  axios.get(url + userName, {
    headers: {
      Authorization: process.env.REACT_APP_ACCES_TOKEN,
    },
  });
