import React from "react";
import { products } from "../../assets/styles/Data";
import { Link, useParams } from "react-router-dom";
import { makeStyles, styled } from "@mui/styles";
import Button from "@mui/material/Button";
import { Breadcrumbs, Divider, Grid, IconButton, InputLabel, Rating, TextField, Typography } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import Container from "@mui/material/Container";
import AttachMoneySharpIcon from '@mui/icons-material/AttachMoneySharp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
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
    maxWidth: "350px",
    width: "100%",
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
  const [value, setValue] = useState(1);

  const handleIncrease = () => {
    setValue(value + 1);
  };
  const handleDecrease = () => {
    setValue(value - 1);
  };

  const classes = useStyles();
  const { category = "", id } = useParams();
  const product = products[category][parseInt(id)];

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center" className={classes.detailsPage}>
      <Container fixed className={classes.detail}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link className={classes.link} to="/">
            Home
          </Link>
          <Link className={classes.link} to="/">
            Categories
          </Link>
          <Link className={classes.link} to={`/${product.category}`}>
            {product.category}
          </Link>
          <Typography color="text.primary">{product.name}</Typography>
        </Breadcrumbs>
        <Grid container
          direction="row"
          justifyContent="center"
          alignItems="flex-start">

          <Grid item sm={12} md={6}>
            <img src={product.image} alt={product.name} className={classes.productImage} />
          </Grid>
          <Grid item sm={12} md={6}>
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
                    <Grid item sm={3} md={5}>
                      <Button onClick={handleDecrease} variant="contained" color="primary"><h3>-</h3></Button>
                      <TextField label={value} type={"number"} sx={{ width: '75px', height: '100%', padding: '10px' }} />
                      <Button onClick={handleIncrease} variant="contained" color="primary"><h3>+</h3></Button>
                    </Grid>
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
