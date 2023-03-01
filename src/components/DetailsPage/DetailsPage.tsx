import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { selectProductDetailds } from "../../redux/features/productSlice";
import { Product } from "../../types";
import { Link, useParams } from "react-router-dom";
import { makeStyles, styled } from "@mui/styles";
import Button from "@mui/material/Button";
import {
  Breadcrumbs,
  Divider,
  Grid,
  IconButton,
  InputLabel,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import Container from "@mui/material/Container";
import AttachMoneySharpIcon from "@mui/icons-material/AttachMoneySharp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box, height, Stack } from "@mui/system";
import { useState } from "react";

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
    width: "75vw",
    margin: "0 auto",
  },
  productImage: {
    maxWidth: "100%",
    maxHeight: "820px",
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
}));

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

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

  const [value, setValue] = useState(1);

  const handleIncrease = () => {
    setValue(value + 1);
  };
  const handleDecrease = () => {
    setValue(value - 1);
  };
  const { category = "", id } = useParams();
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
