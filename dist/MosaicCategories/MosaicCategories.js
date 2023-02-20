import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { categories } from "../../assets/styles/Data.js";
const MosaicCategories = () => {
    return (React.createElement(Grid, { sx: { flexGrow: 1 }, container: true, direction: "row", justifyContent: "center", alignItems: "center", spacing: 2 }, categories.map((categories, index) => {
        return (React.createElement(Grid, { item: true, xs: 12, sm: 4, key: index },
            React.createElement(Link, { to: `/${categories.title}` },
                React.createElement(Card, { sx: { maxWidth: 920 } },
                    React.createElement(CardActionArea, null,
                        React.createElement(CardMedia, { component: "img", height: "140", image: categories.img, alt: categories.title }),
                        React.createElement(CardContent, null,
                            React.createElement(Typography, { gutterBottom: true, variant: "h5", component: "div" }, categories.title)))))));
    })));
};
export default MosaicCategories;
