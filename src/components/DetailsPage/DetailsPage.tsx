import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { selectProductDetailds } from "../../redux/features/productSlice";
import { Product } from "../../types";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import { AddShoppingCart } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  detailsPage: {
    backgroundColor: "#ededed",
  },
  detail: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: "1rem",
    width: "50vw",
    margin: "0 auto",
  },
  productImage: {
    maxWidth: "350px",
    width: "100%",
    height: "auto",
  },
}));

const DetailsPage: React.FC = () => {
  const classes = useStyles();
  const productDetaild: Product[] = useAppSelector(selectProductDetailds);

  if (productDetaild[0]) {
    var product = productDetaild[0];
  }

  return (
    <div>
      {product ? (
        <div className={classes.detailsPage}>
          <div className={classes.detail}>
            <h1>{product.name}</h1>
            <img
              src={product.img}
              alt={product.name}
              className={classes.productImage}
            />
            <div>
              <p>{product.description}</p>
              <p>{product.Marca}</p>
              <p>{product.price}</p>
            </div>
            <Button variant="contained" color="primary">
              <AddShoppingCart />
              <h2> Add to cart</h2>
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default DetailsPage;
