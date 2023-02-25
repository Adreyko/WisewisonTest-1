import { List, Typography } from "@mui/material";
import { memo } from "react";
import { useAppSelector } from "../../redux/redux-hooks/hooks";
import ReposList from "./ReposList/ReposList";

const UserRepos = () => {
  const userRepos = useAppSelector((repos) => repos.repos.repos);

  const reposEl = userRepos.map((repos) => (
    <ReposList
      key={repos.id}
      name={repos.name}
      html_url={repos.html_url}
      id={repos.id}
    />
  ));

  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        height: "400px",
        overflow: "auto",
      }}
    >
      {userRepos.length ? (
        reposEl
      ) : (
        <Typography
          sx={{ marginTop: "200px" }}
          variant="h2"
          component="h2"
          align="center"
          color="#3f51b5"
        >
          No one found
          <Typography>probably the user has private repositories</Typography>
        </Typography>
      )}
    </List>
  );
};

export default memo(UserRepos);
