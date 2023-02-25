import Header from "../Header/Header";
import UserRepos from "../UserRepos/UserRepos";

import { Box, Container } from "@mui/system";
import { Divider } from "@mui/material";
import { memo } from "react";

const Repos: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{ width: "100%" }}
        height="70vh"
        marginTop="50px"
        alignItems="center"
        width="100%"
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Header />
        <Divider
          sx={{
            marginTop: "20px",
            width: "100%",
            fontSize: "50px",
            borderBottomWidth: "1px",
          }}
          variant="middle"
        />
        <UserRepos />
      </Box>
    </Container>
  );
};

export default memo(Repos);
