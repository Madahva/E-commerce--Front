import { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Button, Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
//import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const useStyles = makeStyles((theme) => ({
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
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    padding: "1rem 0",
    borderBottom: "1px solid #ccc",
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

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
          <Button onClick={toggleMenu}>
            {showMenu ? <CloseIcon /> : <MenuIcon />}
          </Button>

          <Link to="/shoppingCart">
            <Button>
              <ShoppingCartOutlinedIcon />{" "}
            </Button>
          </Link>
        </div>
      </div>
      {showMenu && (
        <div className={classes.menu}>
          <Button>Iniciar sesión</Button>
          <Button>Registrarse</Button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
