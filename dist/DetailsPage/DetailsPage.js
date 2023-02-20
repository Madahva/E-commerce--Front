import React from "react";
import { products } from "../../assets/styles/Data";
import { useParams } from "react-router-dom";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
    detailsPage: {
        backgroundColor: "#ededed",
    },
    detail: {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#fff",
        padding: "1rem",
        width: "50vw",
        margin: "0 auto",
    },
    productImage: {
        maxWidth: "350px",
        width: "100%",
        height: "auto",
    },
}));
const DetailsPage = () => {
    const classes = useStyles();
    const { category = "", id } = useParams();
    const product = products[category][parseInt(id)];
    return (React.createElement("div", { className: classes.detailsPage },
        React.createElement("div", { className: classes.detail },
            React.createElement("h1", null, product.name),
            React.createElement("img", { src: product.image, alt: product.name, className: classes.productImage }),
            React.createElement("div", null,
                React.createElement("p", null, product.description),
                React.createElement("p", null, product.brand),
                React.createElement("p", null, product.price),
                React.createElement("p", null, product.size)))));
};
export default DetailsPage;
