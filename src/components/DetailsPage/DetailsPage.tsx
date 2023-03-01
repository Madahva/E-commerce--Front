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


import { products } from "../../assets/styles/Data";


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
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
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
  //const { category = "", id } = useParams();
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center" className={classes.detailsPage}>
      <Container fixed className={classes.detail}>
        <Box sx={{ margin: "10px" }}></Box>
        <Breadcrumbs aria-label="breadcrumb">
          <Link className={classes.link} to="/">
            Home
          </Link>
          <Link className={classes.link} to="/">
            Categories
          </Link>
          <Link className={classes.link} to={`/${productCategory}`}>
            {productCategory}
          </Link>
          <Typography color="text.primary">{product.name}</Typography>
        </Breadcrumbs>
        <Box sx={{ margin: "20px" }}></Box>
        <Grid container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start">

          <Grid item sm={12} md={6}>
            <Stack spacing={2} justifyContent="center"
              alignItems="center" >
              <img src={product.img} alt={product.name} className={classes.productImage} />
              <Grid>
                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThHXM2GURRPNifTGEs7vq1EL_5KKO4rS_h-6f7ImXxMs1wB141nSRiYibpMKNaR5acpQg&usqp=CAU"} alt={product.name} id={"1"} />
              </Grid>
            </Stack>
          </Grid>
          <Divider flexItem orientation="vertical" />
          <Grid item sm={12} md={5}>
            <div >
              <h1>{product.name}</h1>
              <div>
                <h2>{product.brand}</h2>
                <h1><AttachMoneySharpIcon />{product.price}</h1>
                <Divider flexItem />
                <Stack spacing={6} sx={{ width: '100%' }} >

                  <h3>{product.description}</h3>
                  {product.romMemory ? <h4>{product.romMemory}</h4> : null}
                  {product.ramMemory ? <h4>{product.ramMemory}</h4> : null}
                  {product.processor ? <h4>{product.processor}</h4> : null}
                  {product.graphicsCard ? <h4>{product.graphicsCard}</h4> : null}
                  {product.display ? <h4>{product.display}</h4> : null}
                  {product.size ? <h4>{product.size}</h4> : null}
                  <StyledRating
                    name="ratingProduct"
                    defaultValue={product.rating}
                    precision={0.5}
                    icon={<FavoriteIcon fontSize="inherit" />}
                    emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                  />
                  <Grid container direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                  >

                    <Button onClick={handleDecrease} variant="contained" color="primary"><h3>-</h3></Button>
                    <TextField label={value} type={"number"} sx={{ width: '75px', height: '100%', padding: '10px' }} />
                    <Button onClick={handleIncrease} variant="contained" color="primary"><h3>+</h3></Button>

                  </Grid>
                  <Button variant="contained" color="primary">
                    <AddShoppingCart />
                    <h2> Add to cart</h2>
                  </Button>
                </Stack>
              </div>
            </div>
          </Grid>

        </Grid>
      </Container>
    </Grid>
  );
};
export default DetailsPage;
