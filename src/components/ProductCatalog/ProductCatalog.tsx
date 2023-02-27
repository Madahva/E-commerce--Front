import * as React from "react";
import { useAppDispatch } from "../../redux/hooks";
import { sortProductsByPrice } from "../../redux/features/filterSlice";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Chip from "@mui/material/Chip";
import Products from "../Products/Products";
import Carousels from "../Carousels/Carousels";
import FilterSelect from "./FilterSelect/FilterSelect";

const useStyles = makeStyles(() => ({
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
      backgroundColor: "#b0ecfd",
      transition: "all ease-in .2s",
    },
  },
}));

const ProductCatalog = () => {
  const dispatch = useAppDispatch()
  const classes = useStyles();
  const location = useLocation();
  const segments = location.pathname.split("/");
  const lastSegment = segments.pop();
  let categorieSeccion: string = decodeURIComponent(lastSegment);
  const [filter, setFilter] = useState<string>("mostRelevant");

  const handleFilterChange = (
    newFilter: "mostRelevant" | "lowerPrice" | "higherPrice"
  ) => {
    setFilter(newFilter);
    dispatch(sortProductsByPrice(filter))
    console.log(newFilter)
  };

  return (
    <>
      <Carousels />
      <Container fixed>
        <Box sx={{ width: "100%" }}>
          <Stack direction="column" spacing={6}>
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
                <Stack
                  spacing={2}
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <h1>Filters: </h1>
                  <Box sx={{ margin: 1.4 }}></Box>
                  <h3>Prices</h3>
                  <Chip label="Up to $50" />
                  <Chip label="$50 to $100" />
                  <Chip label="$100 to $500" />
                  <Chip label="$500 to $1000" />
                </Stack>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={8}>
                <Grid
                  container
                  rowSpacing={2}
                  direction="column"
                  justifyContent="space-between"
                  alignItems="stretch"
                >
                  <Grid item xs>
                    <Grid
                      container
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      spacing={2}
                    >
                      <Grid item xs={4}>
                        <h2>Show XX items of XX</h2>
                      </Grid>
                      <FilterSelect
                        value={filter}
                        onChange={handleFilterChange}
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs>
                    <Products categorieSeccion={categorieSeccion} />
                  </Grid>
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
