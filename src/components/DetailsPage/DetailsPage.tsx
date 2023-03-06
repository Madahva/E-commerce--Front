import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { selectProductDetailds } from "../../redux/features/productSlice";
import { Product } from "../../types";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import { Breadcrumbs, Typography } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import { Box } from "@mui/system";

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
}));

const DetailsPage: React.FC = () => {
  const classes = useStyles();

  const url = window.location.href;
  const splitUrl = url.split("/");
  const productCategory = splitUrl[3];

  const productDetaild: Product[] = useAppSelector(selectProductDetailds);
  if (productDetaild[0]) {
    var product = productDetaild[0];
    console.log(product);
  }

  return (
    <div>
      {product ? (
        <div className={classes.detailsPage}>
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
                  <p>{product.price}</p>
                </div>
                <Button variant="contained" color="primary">
                  <AddShoppingCart />
                  Add to cart
                </Button>

                <Button
                  variant="contained"
                  style={{ backgroundColor: "#4CAF50", marginLeft: "2rem" }}
                >
                  Buy
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
