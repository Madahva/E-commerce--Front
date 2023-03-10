import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { selectProductDetailds } from "../../redux/features/productSlice";
import {
  fetchPayment,
  selectPayment,
  createPaymentHistory,
} from "../../redux/features/paymentSlice";
import { addItem } from "../../redux/features/shoppingCartSlice";
import { Product } from "../../types";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { Breadcrumbs, Typography, TextField } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import { Box } from "@mui/system";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  detailsPage: {
    backgroundColor: "#ededed",
    padding: "2rem 4rem 6rem 4rem",
  },
  detail: {
    alignItems: "center",
    display: "flex",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: "1rem 1rem 4rem 1rem",
    width: "75vw",
    margin: "0 auto",
  },
  productImage: {
    maxWidth: "100%",
    maxHeight: "420px",
    width: "auto",
    height: "auto",
  },
  link: {
    color: "inherit",
    cursor: "pointer",
    textTransform: "capitalize",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  detail__description: {
    alignItems: "center",
    display: "flex",
    gap: "2rem",
    justifyContent: "space-between",
  },
  quantity: {
    alignItems: "center",
    display: "flex",
    height: "40px",
    margin: "2rem 0",
  },
}));

const DetailsPage: React.FC = () => {
  const classes = useStyles();

  const url = window.location.href;
  const splitUrl = url.split("/");
  const productCategory = splitUrl[3];

  const productDetaild: Product[] = useAppSelector(selectProductDetailds);
  if (productDetaild[0]) {
    var product = productDetaild[0];
  }

  const [showSnackbar, setShowSnackbar] = useState(false);
  const [showSuccestMsg, setShowSuccestMsg] = useState(false);
  const [showBuying, setShowBuying] = useState(false);
  const { isAuthenticated, user } = useAuth0();

  const dispatch = useAppDispatch();
  const response = useAppSelector(selectPayment);
  useEffect(() => {
    if (response?.init_point) {
      window.location.href = response.init_point;
    }
  }, [response]);

  const handleAddToShoppingCart = (name: any, id: any, price: any) => {
    dispatch(
      addItem({
        title: name,
        id,
        quantity: quantity,
        unit_price: parseInt(price),
      })
    );
    setShowSuccestMsg(true);
  };
  const [quantity, setQuantity] = useState<number>(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleBuy = (name: string, price: string, quantity: number) => {
    if (isAuthenticated) {
      const shoppingCart = [
        {
          title: name,
          quantity: quantity,
          unit_price: parseInt(price),
        },
      ];

      dispatch(createPaymentHistory({ shoppingCart, userEmail: user.email }));
      dispatch(fetchPayment(shoppingCart));
      setShowBuying(true);
    } else {
      setShowSnackbar(true);
    }
  };

  const [rating, setRating] = React.useState<number | null>(null);

  useEffect(() => {
    if (product) {
      setRating(product.rating);
    }
  }, [product]);

  return (
    <div>
      {product ? (
        <div className={classes.detailsPage}>
          <Snackbar
            open={showSnackbar}
            autoHideDuration={5000}
            onClose={() => setShowSnackbar(false)}
          >
            <Alert severity="warning" onClose={() => setShowSnackbar(false)}>
              You must be logged in to make a purchase.
            </Alert>
          </Snackbar>

          <Snackbar
            open={showSuccestMsg}
            autoHideDuration={5000}
            onClose={() => setShowSuccestMsg(false)}
          >
            <Alert severity="success" onClose={() => setShowSuccestMsg(false)}>
              Product added to cart!
            </Alert>
          </Snackbar>

          <Breadcrumbs aria-label="breadcrumb">
            <Link className={classes.link} to="/">
              Categories
            </Link>
            <p className={classes.link} onClick={() => window.history.back()}>
              {productCategory}
            </p>

            <Typography color="text.primary">{product.name}</Typography>
          </Breadcrumbs>
          <Box sx={{ margin: "20px" }}></Box>

          <div className={classes.detail}>
            <h1>{product.name}</h1>
            <div className={classes.detail__description}>
              <img
                src={product.img}
                alt={product.name}
                className={classes.productImage}
              />
              <div>
                <div>
                  <p>{product.description}</p>
                  <p>{product.Marca}</p>
                  <Rating
                    name="simple-controlled"
                    value={rating}
                    onChange={(event, newValue) => {
                      setRating(newValue);
                    }}
                  />
                  <p>{product.price}</p>

                  <div className={classes.quantity}>
                    <Button
                      onClick={handleDecrease}
                      variant="contained"
                      sx={{ height: "100%" }}
                      color="primary"
                    >
                      <h3>-</h3>
                    </Button>
                    <TextField
                      label={"quantity"}
                      type={"number"}
                      value={quantity}
                      sx={{ width: "100px", padding: "10px" }}
                    />
                    <Button
                      onClick={handleIncrease}
                      sx={{ height: "40px" }}
                      variant="contained"
                      color="primary"
                    >
                      <h3>+</h3>
                    </Button>
                  </div>
                </div>

                <Button
                  variant="contained"
                  color="primary"
                  sx={{ padding: ".5rem 1rem" }}
                  onClick={() => {
                    handleAddToShoppingCart(
                      product.name,
                      product.id,
                      product.price
                    );
                  }}
                >
                  <AddShoppingCart />
                  Add to cart
                </Button>

                <Button
                  variant="contained"
                  onClick={() => {
                    handleBuy(product.name, product.price, quantity);
                  }}
                  style={{
                    backgroundColor: "#4CAF50",
                    marginLeft: "2rem",
                    padding: ".5rem 1rem",
                  }}
                >
                  {showBuying ? <CircularProgress /> : "Buy"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default DetailsPage;
