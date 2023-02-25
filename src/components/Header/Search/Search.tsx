import { TextField } from "@mui/material";
import { ChangeEvent, memo, useCallback, useState } from "react";
import { useEffect } from "react";
import { useAppDispatch } from "../../../redux/redux-hooks/hooks";
import { setRepos } from "../../../redux/slices/RepoSlice/RepoSlice";
import { fetchRepo } from "../../../redux/slices/RepoSlice/thunk/fetchRepo";
import debounce from "lodash.debounce";


const Search = () => {
  const dispatch = useAppDispatch();
  const [searchInput, setSearchInput] = useState<string>("");
  const [value, setValue] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchInput(str);
    }, 1000),
    [],
  );

  useEffect(() => {
    if (searchInput) {
      dispatch(fetchRepo(searchInput));
    } else {
      dispatch(setRepos([]));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

  return (
    <TextField
      id="standard-basic"
      label="Search..."
      variant="standard"
      value={value}
      color="primary"
      onChange={handleInputChange}
      
    />
  );
};

export default memo(Search);
