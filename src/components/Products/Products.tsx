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
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";

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
    notFoundMsg: {
      color: "#555",
      textAlign: "center",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
      backgroundColor: "white",
      padding: "2rem 4rem",
    },
  }));
  const classes = useStyles();
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });

  const dispatch = useAppDispatch();

  const handleClick = (productID: string) => {
    dispatch(fetchProductByID(productID));
  };

  return (
    <>
      {products.length === 0 && (
        <Typography className={classes.notFoundMsg}>
          {" "}
          Nothing to see here. 🤭
        </Typography>
      )}
      {products &&
        products.map((el: Product, index: number) => {
          // if (el.deleted) return null;
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
                      <Img alt={el.name} src={el.img} />
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
                          {el.Marca}
                        </Typography>
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
