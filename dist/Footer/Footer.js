import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Link, Typography } from "@mui/material";
const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: "#000",
        color: "#999",
        fontFamily: "Proxima Nova,-apple-system,Roboto,Arial,sans-serif",
        padding: "2rem",
    },
    container: {
        margin: "0 auto",
        width: "100%",
    },
    nav: {
        display: "flex",
        listStyle: "none",
        margin: 0,
        justifyContent: "space-between",
        gap: "1rem",
        padding: "2rem 0",
        flexWrap: "wrap",
    },
    navItem: {
        padding: "0px 3px",
        fontSize: "13px",
        fontFamily: "Proxima Nova,-apple-system,Roboto,Arial,sans-serif",
        color: "#333",
    },
}));
function Footer() {
    const classes = useStyles();
    return (React.createElement("div", null,
        React.createElement(Grid, { container: true, justifyContent: "center", className: classes.root },
            React.createElement(Grid, { container: true, item: true, xs: 11, md: 9, lg: 7, className: classes.container },
                React.createElement(Grid, { container: true, item: true, justifyContent: "space-between" },
                    React.createElement(Grid, { item: true },
                        React.createElement("nav", null,
                            React.createElement("ul", { className: classes.nav },
                                React.createElement("li", { className: classes.navItem },
                                    React.createElement(Link, { href: "#", underline: "hover", color: "inherit" }, "Trabaj\u00E1 con nosotros")),
                                React.createElement("li", { className: classes.navItem },
                                    React.createElement(Link, { href: "#", underline: "hover", color: "inherit" }, "T\u00E9rminos y condiciones")),
                                React.createElement("li", { className: classes.navItem },
                                    React.createElement(Link, { href: "#", underline: "hover", color: "inherit" }, "C\u00F3mo cuidamos tu privacidad")),
                                React.createElement("li", { className: classes.navItem },
                                    React.createElement(Link, { href: "#", underline: "hover", color: "inherit" }, "Accesibilidad")),
                                React.createElement("li", { className: classes.navItem },
                                    React.createElement(Link, { href: "#", underline: "hover", color: "inherit" }, "Informaci\u00F3n al usuario financiero")),
                                React.createElement("li", { className: classes.navItem },
                                    React.createElement(Link, { href: "#", underline: "hover", color: "inherit" }, "Ayuda")),
                                React.createElement("li", { className: classes.navItem },
                                    React.createElement(Link, { href: "#", underline: "hover", color: "inherit" }, "Defensa del Consumidor")),
                                React.createElement("li", { className: classes.navItem },
                                    React.createElement(Link, { href: "#", underline: "hover", color: "inherit" }, "Informaci\u00F3n sobre seguros")))))),
                React.createElement(Grid, { item: true },
                    React.createElement(Typography, { variant: "caption" }, "Copyright \u00A9\u00A01999-2023 Mercado S.R.L."),
                    React.createElement("br", null),
                    React.createElement(Typography, { variant: "caption" }, "Av. Caseros 3039, Piso 2, CP 1264, Parque Patricios, CABA"))))));
}
export default Footer;
