import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { Box } from "@mui/system";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";

const ProductCatalog = (props) => {
  //celulares hardcodeados
  const samsungSmartphones = [
    {
      name: "Samsung Galaxy S22 Ultra 5G",
      description:
        "Samsung's top-of-the-line flagship smartphone with 5G capabilities.",
      category: "Smartphone",
      brand: "Samsung",
      romMemory: "128GB/256GB/512GB",
      ramMemory: "12GB/16GB",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_2X_687089-MLA52140335784_102022-F.webp",
      price: 1199.99,
    },
    {
      name: "Samsung Galaxy Note 20 Ultra 5G",
      description:
        "Samsung's high-end smartphone with a large screen, S Pen, and 5G capabilities.",
      category: "Smartphone",
      brand: "Samsung",
      romMemory: "128GB/256GB/512GB",
      ramMemory: "12GB",
      image:
        "https://cdn.shopify.com/s/files/1/0271/0922/8578/products/Samsung-galaxy-s20-ultra_18d96eeb-331c-43c7-b338-871d301f5cf5_700x.png?v=1621301850",
      price: 1299.99,
    },
    {
      name: "Samsung Galaxy S21 5G",
      description:
        "Samsung's mid-range flagship smartphone with 5G capabilities.",
      category: "Smartphone",
      brand: "Samsung",
      romMemory: "128GB/256GB",
      ramMemory: "8GB",
      image:
        "https://cdn.shopify.com/s/files/1/0271/0922/8578/products/samsung-galaxy-s21-5g-0_700x.jpg?v=1634321179",
      price: 799.99,
    },
    {
      name: "Samsung Galaxy A52 5G",
      description:
        "Samsung's affordable 5G smartphone with a long-lasting battery.",
      category: "Smartphone",
      brand: "Samsung",
      romMemory: "128GB/256GB",
      ramMemory: "6GB/8GB",
      image:
        "https://cdn.shopify.com/s/files/1/0271/0922/8578/products/samsung-galaxy-a52-4g-10_700x.jpg?v=1643760347",
      price: 449.99,
    },
    {
      name: "Samsung Galaxy A12",
      description:
        "Samsung's budget smartphone with a large display and multiple cameras.",
      category: "Smartphone",
      brand: "Samsung",
      romMemory: "32GB/64GB/128GB",
      ramMemory: "3GB/4GB/6GB",
      image:
        "https://cdn.shopify.com/s/files/1/0271/0922/8578/products/samsung-galaxy-a12-sm-a125-1_700x.jpg?v=1639666000",
      price: 179.99,
    },
  ];
  const hh = window.location.href;
  console.log(hh);
  const categorieSeccion = hh.split("/").slice(-1).join("/");

  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });

  return (
    <>
      <Container fixed>
        <Box sx={{ width: "100%" }}>
          <Stack direction="column" spacing={12}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                Home
              </Link>
              <Link underline="hover" color="inherit" href="/categories">
                Categories
              </Link>
              <Typography color="text.primary">{categorieSeccion}</Typography>
            </Breadcrumbs>

            <Grid
              container
              direction="row"
              spacing={2}
              justifyContent="center"
              alignItems="flex-start"
            >
              <Grid xs={3}>
                <h2>Filters: </h2>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid xs={8}>
                <Grid
                  container
                  rowSpacing={12}
                  direction="column"
                  justifyContent="space-between"
                  alignItems="stretch"
                >
                  <h2>Show XX items of XX</h2>
                  {samsungSmartphones.map((el) => {
                    return (
                      <Paper
                        sx={{
                          p: 2,
                          margin: "10px",
                          maxWidth: 1280,
                          flexGrow: 1,
                          backgroundColor: (theme) =>
                            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                        }}
                      >
                        <Grid container spacing={2}>
                          <Grid item>
                            <ButtonBase sx={{ width: 128, height: 128 }}>
                              <Img alt={el.name} src={el.image} />
                            </ButtonBase>
                          </Grid>
                          <Grid item xs={12} sm container>
                            <Grid
                              item
                              xs
                              container
                              direction="column"
                              spacing={2}
                            >
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
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  {el.brand}
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography
                                  sx={{ cursor: "pointer" }}
                                  variant="body2"
                                >
                                  {"Favorites <3"}
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
                    );
                  })}
                </Grid>
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default ProductCatalog;
