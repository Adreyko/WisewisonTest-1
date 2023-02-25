import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { memo } from "react";
import Search from "./Search/Search";

function Header() {
  return (
    <Box sx={{ display: "flex" }}>
      <Typography
        marginRight="20px"
        variant="h4"
        component="h4"
        align="center"
        color="#3f51b5"
        padding='10px'
      >
        Search repository by username
      </Typography>
      <Search />
    </Box>
  );
}

export default memo(Header);
