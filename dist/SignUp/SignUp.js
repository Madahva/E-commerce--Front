import * as React from "react";
import { Link } from "react-router-dom";
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
export default function SignUp() {
    return (React.createElement(CssVarsProvider, null,
        React.createElement("main", null,
            React.createElement(Sheet, { sx: {
                    width: 300,
                    mx: "auto",
                    my: 4,
                    py: 3,
                    px: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    borderRadius: "sm",
                    boxShadow: "md",
                }, variant: "outlined" },
                React.createElement("div", null,
                    React.createElement(Typography, { level: "h4", component: "h1" },
                        React.createElement("b", null, "Sign Up")),
                    React.createElement(Typography, { level: "body2" }, "Create an account to get started.")),
                React.createElement(FormControl, null,
                    React.createElement(FormLabel, null, "Full Name"),
                    React.createElement(Input
                    // html input attribute
                    , { 
                        // html input attribute
                        name: "full_name", type: "text", placeholder: "John Doe" })),
                React.createElement(FormControl, null,
                    React.createElement(FormLabel, null, "Email"),
                    React.createElement(Input
                    // html input attribute
                    , { 
                        // html input attribute
                        name: "email", type: "email", placeholder: "johndoe@email.com" })),
                React.createElement(FormControl, null,
                    React.createElement(FormLabel, null, "Password"),
                    React.createElement(Input
                    // html input attribute
                    , { 
                        // html input attribute
                        name: "password", type: "password", placeholder: "password" })),
                React.createElement(FormControl, null,
                    React.createElement(FormLabel, null, "Confirm Password"),
                    React.createElement(Input
                    // html input attribute
                    , { 
                        // html input attribute
                        name: "confirm_password", type: "password", placeholder: "confirm password" })),
                React.createElement(Button, { sx: { mt: 1 /* margin top */ } }, "Sign Up"),
                React.createElement(Typography, { endDecorator: React.createElement(Link, { to: "/log-in" }, "Log in"), fontSize: "sm", sx: { alignSelf: "center" } }, "Already have an account?")))));
}
