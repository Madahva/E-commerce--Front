import * as React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { products } from "../../assets/styles/Data.js";
import ButtonBase from "@mui/material/ButtonBase";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
const Products = ({ categorieSeccion }) => {
    const useStyles = makeStyles((theme) => ({
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
    const classes = useStyles();
    const Img = styled("img")({
        margin: "auto",
        display: "block",
        maxWidth: "100%",
        maxHeight: "100%",
    });
    return (React.createElement(React.Fragment, null, products[categorieSeccion.categorieSeccion].map((el, index) => {
        return (React.createElement(Link, { to: `/${categorieSeccion.categorieSeccion}/${index}` },
            React.createElement(Paper, { className: classes.product, sx: {
                    p: 2,
                    margin: "10px",
                    maxWidth: 1280,
                    flexGrow: 1,
                    backgroundColor: (theme) => (theme.palette.mode === "dark" ? "#1A2027" : "#fff"),
                }, key: index },
                React.createElement(Grid, { container: true, spacing: 2 },
                    React.createElement(Grid, { item: true },
                        React.createElement(ButtonBase, { sx: { width: 128, height: 128 } },
                            React.createElement(Img, { alt: el.name, src: el.image }))),
                    React.createElement(Grid, { item: true, xs: 12, sm: true, container: true },
                        React.createElement(Grid, { item: true, xs: true, container: true, direction: "column", spacing: 2 },
                            React.createElement(Grid, { item: true, xs: true },
                                React.createElement(Typography, { gutterBottom: true, variant: "subtitle1", component: "div" }, el.name),
                                React.createElement(Typography, { variant: "body2", gutterBottom: true }, el.description),
                                React.createElement(Typography, { variant: "body2", color: "text.secondary" }, el.brand)),
                            React.createElement(Grid, { item: true },
                                React.createElement(Typography, { sx: { cursor: "pointer" }, variant: "body2" }, "Favorites <3"))),
                        React.createElement(Grid, { item: true },
                            React.createElement(Typography, { variant: "subtitle1", component: "div" }, "$" + el.price)))))));
    })));
};
export default Products;
