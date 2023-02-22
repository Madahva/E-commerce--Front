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
    "@media (min-width: 960px)": {
      padding: "1rem 10rem",
    },
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
    "@media (min-width: 960px)": {
      padding: "1rem 10rem",
      justifyContent: "flex-start",
    },
  },
  menu_text: {
    color: "#1976d2",
  },
  menu_btn: {
    alignItems: "center",
    display: "flex",
    gap: ".5rem",
    justifyContent: "flex-start",
    "@media (min-width: 960px)": {
      gap: "2rem",
    },
  },
  button: {
    "@media (min-width: 960px)": {
      width: "15rem",
    },
  },
}));

const NavBar = () => {
  const location = useLocation();
  const segments = location.pathname.split("/");
  const url = segments.pop();
  let showMenu = true;
  if (url === "sign-up" || url === "log-in") showMenu = false;
  const classes = useStyles();
  const [showBtn, setShowBtn] = useState(false);

  const toggleMenu = () => {
    setShowBtn(!showBtn);
  };

  useEffect(() => {
    setShowBtn(false);
  }, [location.pathname]);

  return (
    <div className={classes.navBarContainer}>
      <div className={classes.navBar}>
        <Link to="/">
          <Button variant="contained">Home</Button>
        </Link>
        <form className={classes.form}>
          <Button>
            <SearchIcon />
          </Button>
          <Input
            className={classes.input}
            autoFocus
            type="text"
            placeholder="Search..."
          />
        </form>
        <div className={classes.icons}>
          {showMenu ? (
            <Button onClick={toggleMenu}>
              {showBtn ? <CloseIcon /> : <MenuIcon />}
            </Button>
          ) : null}
          <Link to="/shoppingCart">
            <Button>
              <ShoppingCartOutlinedIcon />{" "}
            </Button>
          </Link>
        </div>
      </div>
      {showBtn && (
        <div className={classes.menu}>
          <div>
            <AccountCircleIcon sx={{ color: "#1976d2" }} fontSize="large" />
          </div>
          <div className={classes.menu_text}>
            <h3 style={{ margin: "0" }}>Welcome!</h3>
            <p style={{ color: "rgba(0,0,0,.45)" }}>
              Sign in to your account to check out your purchase history, saved
              items, and more.
            </p>
            <div className={classes.menu_btn}>
              <Link to="/log-in">
                <Button
                  sx={{ backgroundColor: "#DFE8EF" }}
                  className={classes.button}
                >
                  Login
                </Button>
              </Link>
              <Link to="/sign-up">
                <Button
                  sx={{ backgroundColor: "#DFE8EF" }}
                  className={classes.button}
                >
                  Register
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
