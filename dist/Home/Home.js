import React from "react";
import Banner from "../Banner/Banner";
import MosaicCategories from "../MosaicCategories/MosaicCategories";
import Container from "@mui/material/Container";
import Carousels from "../Carousels/Carousels";
import { Box } from "@mui/system";
import Stack from "@mui/material/Stack";
const Home = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement(Banner, null),
        React.createElement(Container, { fixed: true },
            React.createElement(Box, { sx: { width: "100%" } },
                React.createElement(Carousels, null),
                React.createElement(Stack, { direction: "column", justifyContent: "center", alignItems: "center", spacing: 6 },
                    React.createElement(MosaicCategories, null))))));
};
export default Home;
