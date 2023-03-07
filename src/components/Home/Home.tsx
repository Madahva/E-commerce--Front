import React from "react";
import Banner from "../Banner/Banner";
import MosaicCategories from "../MosaicCategories/MosaicCategories";
import Container from "@mui/material/Container";
import Carousels from "../Carousels/Carousels";
import { Box } from "@mui/system";
import Stack from "@mui/material/Stack";

const Home = () => {
  return (
    <>
      <Banner />
      <Container fixed>
        <Box sx={{ width: "100%" }}>
          <Carousels />
          <Stack direction="column" justifyContent="center" alignItems="center" spacing={6}>
            <MosaicCategories />
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default Home;
