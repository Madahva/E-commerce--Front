import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Chip from "@mui/material/Chip";
import Products from "../Products/Products";
import Carousels from "../Carousels/Carousels";
const useStyles = makeStyles(() => ({
    link: {
        color: "inherit",
        textDecoration: "none",
        "&:hover": {
            textDecoration: "underline",
        },
    },
    product: {
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "#b0ecfd",
            transition: "all ease-in .2s",
        },
    },
}));
const ProductCatalog = () => {
    const classes = useStyles();
    const location = useLocation();
    const segments = location.pathname.split("/");
    const lastSegment = segments.pop();
    let categorieSeccion = decodeURIComponent(lastSegment);
    const [buttonText, setButtonText] = useState("Most relevant");
    if (categorieSeccion === "Game Consoles")
        categorieSeccion = "GameConsoles";
    if (categorieSeccion === "Smart Watches")
        categorieSeccion = "SmartWatches";
    //en typescript se cambia
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (event) => {
        setButtonText(event.target.textContent || "Most relevant");
        setAnchorEl(null);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Carousels, null),
        React.createElement(Container, { fixed: true },
            React.createElement(Box, { sx: { width: "100%" } },
                React.createElement(Stack, { direction: "column", spacing: 6 },
                    React.createElement(Breadcrumbs, { "aria-label": "breadcrumb" },
                        React.createElement(Link, { className: classes.link, to: "/" }, "Home"),
                        React.createElement(Link, { className: classes.link, to: "/" }, "Categories"),
                        React.createElement(Typography, { color: "text.primary" }, categorieSeccion)),
                    React.createElement(Grid, { container: true, direction: "row", spacing: 2, justifyContent: "center", alignItems: "flex-start" },
                        React.createElement(Grid, { item: true, xs: 3 },
                            React.createElement(Stack, { spacing: 2, direction: "column", justifyContent: "center", alignItems: "center" },
                                React.createElement("h1", null, "Filters: "),
                                React.createElement(Box, { sx: { margin: 1.4 } }),
                                React.createElement("h3", null, "Prices"),
                                React.createElement(Chip, { label: "Up to $50" }),
                                React.createElement(Chip, { label: "$50 to $100" }),
                                React.createElement(Chip, { label: "$100 to $500" }),
                                React.createElement(Chip, { label: "$500 to $1000" }))),
                        React.createElement(Divider, { orientation: "vertical", flexItem: true }),
                        React.createElement(Grid, { item: true, xs: 8 },
                            React.createElement(Grid, { container: true, rowSpacing: 2, direction: "column", justifyContent: "space-between", alignItems: "stretch" },
                                React.createElement(Grid, { item: true, xs: true },
                                    React.createElement(Grid, { container: true, direction: "row", justifyContent: "space-between", alignItems: "center", spacing: 2 },
                                        React.createElement(Grid, { item: true, xs: 4 },
                                            React.createElement("h2", null, "Show XX items of XX")),
                                        React.createElement(Grid, { item: true, xs: 4 },
                                            React.createElement(Grid, { container: true, spacing: 2 },
                                                React.createElement(Grid, { item: true, xs: 5 },
                                                    React.createElement("h3", null, "Order by: ")),
                                                React.createElement(Grid, { item: true, xs: 7 },
                                                    React.createElement(Box, { sx: { margin: 1.4 } }),
                                                    React.createElement(Button
                                                    /* id="basic-button"
                                                    aria-controls={open ? "basic-menu" : ""}
                                                    aria-haspopup="true"
                                                    aria-expanded={open ? "true" : ""}
                                                    onClick={handleClick} */
                                                    , null, buttonText),
                                                    React.createElement(Menu, { id: "basic-menu", anchorEl: anchorEl, open: open, onClose: handleClose, MenuListProps: {
                                                            "aria-labelledby": "basic-button",
                                                        } },
                                                        React.createElement(MenuItem, { onClick: (e) => handleClose(e) }, "Most relevant"),
                                                        React.createElement(MenuItem, { onClick: (e) => handleClose(e) }, "Lower price"),
                                                        React.createElement(MenuItem, { onClick: (e) => handleClose(e) }, "Higher price"))))))),
                                React.createElement(Grid, { item: true, xs: true },
                                    React.createElement(Products, { categorieSeccion: categorieSeccion }))))))))));
};
export default ProductCatalog;
