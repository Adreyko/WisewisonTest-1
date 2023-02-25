import { Link, ListItem, Typography } from "@mui/material";
import { memo } from "react";
import { IRepo } from "../../../intarfaces/intarfaces";

const ReposList: React.FC<IRepo> = ({ name, html_url, id }: IRepo) => {
  return (
    <ListItem sx={{ border: 1 }} key={id}>
      <Link href={html_url} underline="hover">
        <Typography variant="h4" component="h4" align="center" color="#3f51b5">
          Repository: {name}
        </Typography>
      </Link>
    </ListItem>
  );
};

export default memo(ReposList);
