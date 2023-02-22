import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Button, Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
const useStyles = makeStyles(() => ({
    navBarContainer: {
        display: "flex",
        flexDirection: "column",
    },
    navBar: {
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        gap: "1rem",
        padding: ".5rem",
    },
    form: {
        display: "flex",
        width: "100%",
    },
    input: {
        flexGrow: 1,
    },
    icons: {
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
    },
    menu: {
        alignItems: "center",
        borderTop: "1px solid rgba(0,0,0,.1)",
        display: "flex",
        justifyContent: "space-between",
        gap: "2rem",
        padding: ".5rem",
        borderBottom: "1px solid #ccc",
    },
    menu_text: {
        color: "#1976d2",
    },
    menu_btn: {
        alignItems: "center",
        display: "flex",
        gap: ".5rem",
        justifyContent: "flex-start",
    },
    button: {},
}));
const NavBar = () => {
    const location = useLocation();
    const segments = location.pathname.split("/");
    const url = segments.pop();
    let showMenu = true;
    if (url === "sign-up" || url === "log-in")
        showMenu = false;
    const classes = useStyles();
    const [showBtn, setShowBtn] = useState(false);
    const toggleMenu = () => {
        setShowBtn(!showBtn);
    };
    useEffect(() => {
        setShowBtn(false);
    }, [location.pathname]);
    return (React.createElement("div", { className: classes.navBarContainer },
        React.createElement("div", { className: classes.navBar },
            React.createElement(Link, { to: "/" },
                React.createElement(Button, { variant: "contained" }, "Home")),
            React.createElement("form", { className: classes.form },
                React.createElement(Button, null,
                    React.createElement(SearchIcon, null)),
                React.createElement(Input, { className: classes.input, autoFocus: true, type: "text", placeholder: "Search..." })),
            React.createElement("div", { className: classes.icons },
                showMenu ? React.createElement(Button, { onClick: toggleMenu }, showBtn ? React.createElement(CloseIcon, null) : React.createElement(MenuIcon, null)) : null,
                React.createElement(Link, { to: "/shoppingCart" },
                    React.createElement(Button, null,
                        React.createElement(ShoppingCartOutlinedIcon, null),
                        " ")))),
        showBtn && (React.createElement("div", { className: classes.menu },
            React.createElement("div", null,
                React.createElement(AccountCircleIcon, { sx: { color: "#1976d2" }, fontSize: "large" })),
            React.createElement("div", { className: classes.menu_text },
                React.createElement("h3", { style: { margin: "0" } }, "Welcome!"),
                React.createElement("p", { style: { color: "rgba(0,0,0,.45)" } }, "Sign in to your account to check out your purchase history, saved items, and more."),
                React.createElement("div", { className: classes.menu_btn },
                    React.createElement(Link, { to: "/log-in" },
                        React.createElement(Button, { sx: { backgroundColor: "#DFE8EF" }, className: classes.button }, "Login")),
                    React.createElement(Link, { to: "/sign-up" },
                        React.createElement(Button, { sx: { backgroundColor: "#DFE8EF" }, className: classes.button }, "Register"))))))));
};
export default NavBar;
