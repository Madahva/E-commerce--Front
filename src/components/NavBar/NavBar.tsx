import React, { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { fetchBySearch } from "../../redux/features/filterSlice"
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Button, Input, Link } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HomeIcon from "@mui/icons-material/Home";

const useStyles = makeStyles((theme) => ({
  navBarContainer: {
    display: "flex",
    justifyContent: "center",
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
    margin: "1rem 0",
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
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState<string>("");
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const isAdmind: boolean =
    isAuthenticated && user.email === "galarzaguillermo.ggm@gmail.com";

  const goToHome = () => {
    navigate("/");
  };

  const goToCart = () => {
    navigate("/shoppingCart");
  };

  const goToDashboard = () => {
    navigate("/dashboard");
  };

  let showMenu = true;
  const classes = useStyles();
  const [showBtn, setShowBtn] = useState(false);

  const toggleMenu = () => {
    setShowBtn(!showBtn);
  };

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    if (searchValue !== "") {
      dispatch(fetchBySearch(searchValue));
      navigate("/products");
      setSearchValue("");
    }
  };

  const handleSearchInputChange = (event: any) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className={classes.navBarContainer}>
      <div className={classes.navBar}>
        <Link onClick={goToHome}>
          <Button>
            <HomeIcon fontSize="large" />
          </Button>
        </Link>
        <form className={classes.form} onSubmit={handleFormSubmit}>
          <Button onClick={handleFormSubmit}>
            <SearchIcon />
          </Button>
          <Input
            className={classes.input}
            autoFocus
            type="text"
            placeholder="Search..."
            value={searchValue}
            onChange={handleSearchInputChange}
          />
        </form>
        <div className={classes.icons}>
          {showMenu ? (
            <Button onClick={toggleMenu}>
              {showBtn ? <CloseIcon /> : <MenuIcon />}
            </Button>
          ) : null}
          <Link onClick={goToCart}>
            <Button>
              <ShoppingCartOutlinedIcon />
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
            <h3 style={{ margin: "1rem 0" }}>
              Welcome! {isAuthenticated ? user.given_name : null}{" "}
            </h3>
            {!isAuthenticated ? (
              <p style={{ color: "rgba(0,0,0,.45)" }}>
                Sign in to your account to check out your purchase history,
                saved items, and more.
              </p>
            ) : null}
            {!isAuthenticated ? (
              <div className={classes.menu_btn}>
                <Link onClick={() => loginWithRedirect()}>
                  <Button
                    sx={{ backgroundColor: "#DFE8EF", padding: ".5rem" }}
                    className={classes.button}
                  >
                    Login
                  </Button>
                </Link>
                <Link>
                  <Button
                    onClick={() => loginWithRedirect()}
                    sx={{ backgroundColor: "#DFE8EF", padding: ".5rem" }}
                    className={classes.button}
                  >
                    Register
                  </Button>
                </Link>
              </div>
            ) : (
              <div className={classes.menu_btn}>
                <Link>
                  <Button
                    sx={{ backgroundColor: "#DFE8EF", padding: ".5rem" }}
                    className={classes.button}
                    onClick={() => logout()}
                  >
                    Logout
                  </Button>
                </Link>
                {!isAdmind ? (
                  <Link>
                    <Button
                      sx={{ backgroundColor: "#DFE8EF", padding: ".5rem" }}
                      className={classes.button}
                    >
                      History
                    </Button>
                  </Link>
                ) : (
                  <Link>
                    <Button
                      onClick={goToDashboard}
                      sx={{ backgroundColor: "#DFE8EF", padding: ".5rem" }}
                      className={classes.button}
                    >
                      Dashboard
                    </Button>
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
