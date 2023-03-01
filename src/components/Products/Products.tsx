import * as React from "react";
import { Product } from "../../types";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { selectProduct } from "../../redux/features/filterSlice";
import { fetchProductByID } from "../../redux/features/productSlice";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import ButtonBase from "@mui/material/ButtonBase";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { AddShoppingCart } from "@mui/icons-material";

import { fill } from "@cloudinary/url-gen/actions/resize";
import { CloudinaryImage } from '@cloudinary/url-gen';
import { AdvancedImage } from "@cloudinary/react";

interface ProductsProps {
  categorieSeccion: string;
}

const Products = ({ categorieSeccion }: ProductsProps) => {
  const products: Product[] = useAppSelector(selectProduct);
  const useStyles = makeStyles((theme) => ({
    link: {
      color: "inherit",
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline",
      },
    },
    product: {
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#d1fdff",
        transition: "all ease-in .2s",
      },
    },
  }));
  const classes = useStyles();

  const dispatch = useAppDispatch();

  const handleClick = (productID: string) => {
    dispatch(fetchProductByID(productID));
  };

  return (
    <>
      {products.length === 0 && <Typography> Nothing to see here. 🤭</Typography>}
      {products &&
        products.map((el: Product, index: number) => {
          return (
            <Link
              to={`/${categorieSeccion}/${el.id}`}
              key={el.name}
              onClick={() => handleClick(el.id)}
            >
              <Paper
                className={classes.product}
                sx={{
                  p: 2,
                  margin: "10px",
                  maxWidth: 1280,
                  flexGrow: 1,
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                }}
                key={index}
              >
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                      <img src={`https://res.cloudinary.com/dpnnlqglr/image/upload/c_fill,h_128,w_128/${el.id}`} />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          component="div"
                        >
                          {el.name}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          {el.description}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {el.brand}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          sx={{ width: 128 }}
                        >
                          <AddShoppingCart />
                        </Button>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1" component="div">
                        {"$" + el.price}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Link>
          );
        })}
    </>
  );
};

export default Products;
