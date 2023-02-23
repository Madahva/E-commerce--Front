import type { ReactElement } from "react"
import React from "react"
import { Link } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  navBar: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    gap: "1rem",
    padding: ".5rem",
    "@media (min-width: 960px)": {
      padding: "1rem 10rem",
    },
  },
}));

export function Dashboard(): ReactElement {
  const classes = useStyles();
  const {user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();
  const isAdmind: boolean =  (isAuthenticated && user.email === "galarzaguillermo.ggm@gmail.com") 
  if (!isAdmind) navigate("/");

  return (
    <div>
      { isLoading ? "Loading..." : 

      <div className={classes.navBar}>
        <Link to="/">
          <Button variant="contained">Home</Button>
        </Link>
        <h3>Welcome! {user.given_name} </h3>
      </div>

      }
    </div>
  )
}
