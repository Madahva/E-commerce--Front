import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Button, Input } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const useStyles = makeStyles((theme) => ({
  navBar: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    gap: "2rem",
    padding: "1rem"
  },
  input: {
    width:"40%"
  },
  accountCircleIcon: {
    fontSize:"54px",
  }
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.navBar}>
      <Link to="/">
        <Button variant="contained">Home</Button>
      </Link>
      <div className={classes.search}>
        <form>
          <Input className={classes.input} autoFocus type="text" placeholder="Search..." />
          <Button><SearchIcon /></Button>
        </form>
      </div>
      <div>
        <Button> <AccountCircleIcon style={{ fontSize: "40px" }} /> </Button>
      </div>
    </div>
  );
};

export default NavBar;
