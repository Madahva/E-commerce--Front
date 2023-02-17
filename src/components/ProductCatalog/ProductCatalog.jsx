import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { Box } from "@mui/system";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Divider from "@mui/material/Divider";
import { products } from "../../assets/styles/Data.js";

const useStyles = makeStyles((theme) => ({
  link: {
    color: "inherit",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

const ProductCatalog = (props) => {
  const classes = useStyles();
  const location = useLocation();
  const segments = location.pathname.split("/");
  const lastSegment = segments.pop();
  let categorieSeccion = decodeURIComponent(lastSegment);

  if (categorieSeccion === "Game Consoles") categorieSeccion = "GameConsoles";
  if (categorieSeccion === "Smart Watches") categorieSeccion = "SmartWatches";

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
              <Link className={classes.link} to="/">
                Home
              </Link>
              <Link className={classes.link} to="/">
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
              <Grid item xs={3}>
                <h2>Filters: </h2>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={8}>
                <Grid
                  container
                  rowSpacing={12}
                  direction="column"
                  justifyContent="space-between"
                  alignItems="stretch"
                >
                  <h2>Show XX items of XX</h2>
                  {products[categorieSeccion].map((el, index) => {
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
                        key={index}
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
