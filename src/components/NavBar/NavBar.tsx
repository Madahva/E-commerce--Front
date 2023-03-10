import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchBySearch } from "../../redux/features/filterSlice";
import {
  selectShoppingCartItems,
  removeItem,
  updateCart,
} from "../../redux/features/shoppingCartSlice";
import {
  fetchPayment,
  createPaymentHistory,
  fetchUserPaymentHistory,
  selectUserPaymentHistory,
} from "../../redux/features/paymentSlice";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import {
  Button,
  Input,
  Link,
  Modal,
  Typography,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HomeIcon from "@mui/icons-material/Home";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import CircularProgress from "@material-ui/core/CircularProgress";

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
  modal: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "white",
    padding: "2rem",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
    width: "fit-content",
    height: 400,
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    alignItems: "center",
    justifyContent: "center",
  },
  closeButton: {
    position: "absolute",
    top: "1rem",
  },
  buyButton: {
    position: "absolute",
    bottom: "2rem",
  },
  item_container: {
    alignItems: "center",
    gap: "3rem",
    display: "flex",
    borderBottom: "1px solid #ccc",
    justifyContent: "space-between",
    width: "100%",
  },
  paperHistory: {
    backgroundColor: "white",
    padding: "6rem 2rem",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
    width: "fit-content",
    height: 400,
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    alignItems: "center",
    justifyContent: "center",
  },
  labelContainer: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    color: "#1976d2",
  },
  quantity: {
    alignItems: "center",
    display: "flex",
    height: "40px",
    margin: "2rem 0",
  },
}));

const NavBar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [showBuying, setShowBuying] = useState(false);
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const isAdmind: boolean =
    isAuthenticated &&
    (user.email === process.env.REACT_APP_EMAIL_ADMIN_1 ||
      user.email === process.env.REACT_APP_EMAIL_ADMIN_2);

  const goToHome = () => {
    navigate("/");
  };

  const handleShoppingCart = () => {
    setIsModalOpen(true);
  };

  const handleHistoryButton = () => {
    setIsHistoryModalOpen(true);
    dispatch(fetchUserPaymentHistory(user.email));
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

  const handleBuyButton = () => {
    if (isAuthenticated) {
      dispatch(createPaymentHistory({ shoppingCart, userEmail: user.email }));
      dispatch(fetchPayment(shoppingCart));
      setShowBuying(true);
    } else {
      setShowSnackbar(true);
    }
  };

  const userPaymentHistory = useAppSelector(selectUserPaymentHistory);
  const shoppingCart = useAppSelector(selectShoppingCartItems);
  const [quantity, setQuantity] = useState<number | null>(1);

  const handleIncrease = (itemQuantity:number) => {
    console.log(itemQuantity)
    setQuantity(itemQuantity)
    setQuantity(itemQuantity + 1);
  };
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    const updatedCart = shoppingCart.map((item: any) => ({
      ...item,
      quantity,
    }));
    console.log(shoppingCart);
    dispatch(updateCart(updatedCart));
  }, [quantity]);

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
          <Button onClick={handleShoppingCart}>
            <ShoppingCartOutlinedIcon />
          </Button>
        </div>
        <Modal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          className={classes.modal}
        >
          <div className={classes.paper}>
            <div className={classes.labelContainer}>
              <Typography></Typography>
              <Typography>Quantity</Typography>
              <Typography>Price</Typography>
              <Typography>Title</Typography>
              <Typography>Amount</Typography>
              <Typography>Delete</Typography>
            </div>
            {shoppingCart.length === 0 ? (
              <Typography>There are no items in the shopping cart.</Typography>
            ) : (
              shoppingCart.map((item: any, index: number) => {
                return (
                  <div className={classes.item_container} key={index}>
                    <Snackbar
                      open={showSnackbar}
                      autoHideDuration={5000}
                      onClose={() => setShowSnackbar(false)}
                    >
                      <Alert
                        severity="warning"
                        onClose={() => setShowSnackbar(false)}
                      >
                        You must be logged in to make a purchase.
                      </Alert>
                    </Snackbar>
                    <div className={classes.quantity}>
                      <Button
                        onClick={handleDecrease}
                        variant="contained"
                        sx={{ height: "55px", minWidth: "10px" }}
                        color="primary"
                      >
                        <h3>-</h3>
                      </Button>
                      <TextField
                        label={"quantity"}
                        type={"number"}
                        value={item.quantity}
                        sx={{ width: "100px" }}
                      />
                      <Button
                        onClick={ ()=> handleIncrease(item.quantity)}
                        sx={{ height: "55px", minWidth: "10px" }}
                        variant="contained"
                        color="primary"
                      >
                        <h3>+</h3>
                      </Button>
                    </div>
                    <Typography>${item.unit_price}</Typography>
                    <Typography sx={{ minWidth: "150px" }}>
                      {item.title}
                    </Typography>
                    <Typography>${item.unit_price * item.quantity}</Typography>
                    <Button
                      variant="text"
                      style={{ color: "red" }}
                      onClick={() => dispatch(removeItem(item.id))}
                    >
                      <DeleteOutlineIcon />
                    </Button>
                  </div>
                );
              })
            )}
            <div className={classes.closeButton}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setIsModalOpen(false)}
              >
                <CloseIcon />
              </Button>
            </div>
            <div className={classes.buyButton}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleBuyButton}
              >
                {showBuying ? <CircularProgress /> : "Buy all"}
              </Button>
            </div>
          </div>
        </Modal>

        <Modal
          open={isHistoryModalOpen}
          onClose={() => setIsHistoryModalOpen(false)}
          className={classes.modal}
        >
          <div className={classes.paperHistory}>
            <div className={classes.labelContainer}>
              <Typography>Quantity</Typography>
              <Typography>Title</Typography>
              <Typography>Price</Typography>
              <Typography>Date</Typography>
              <Typography>Amount</Typography>
            </div>
            {userPaymentHistory.length === 0 ? (
              <Typography>There are no items to show.</Typography>
            ) : (
              userPaymentHistory.data.map((item: any, index: number) => {
                const fechaCompleta = item.createdAt;
                const fecha = new Date(fechaCompleta);
                const date = fecha.toISOString().split("T")[0];
                return (
                  <div className={classes.item_container} key={index}>
                    <Typography>{item.quantity}</Typography>
                    <Typography sx={{ maxWidth: "150px" }}>
                      {item.title}
                    </Typography>
                    <Typography>{item.price}</Typography>
                    <Typography>{date}</Typography>
                    <Typography>{item.amount}</Typography>
                  </div>
                );
              })
            )}

            <div className={classes.closeButton}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setIsHistoryModalOpen(false)}
              >
                <CloseIcon />
              </Button>
            </div>
          </div>
        </Modal>
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
                      onClick={handleHistoryButton}
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
