import * as React from "react";
import { useAppDispatch } from "../../redux/hooks";
import {
  sortProductsByPrice,
  filterProductsByPrice,
} from "../../redux/features/filterSlice";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import Chip from "@mui/material/Chip";
import Products from "../Products/Products";
import Carousels from "../Carousels/Carousels";
import FilterSelect from "./FilterSelect/FilterSelect";

const useStyles = makeStyles(() => ({
  link: {
    color: "inherit",
    textDecoration: "none",
    textTransform: "capitalize",
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
  priceFilter: {
    transition: "all ease-in .3s",
    pointer: "cursor",
    minWidth: "120px",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
}));

const ProductCatalog = () => {
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const location = useLocation();
  const segments = location.pathname.split("/");
  const lastSegment = segments.pop();
  let categorieSeccion: string = decodeURIComponent(lastSegment);
  const [filter, setFilter] = useState<string>("mostRelevant");

  const handleSortChange = (newFilter: string) => {
    setFilter(newFilter);
    dispatch(sortProductsByPrice(newFilter));
  };

  const handleFilter = (price: string) => {
    dispatch(filterProductsByPrice(price));
  };

  return (
    <>
      <Container fixed>
        <Box sx={{ width: "100%", margin: "2rem 0 6rem 0" }}>
          <Stack direction="column" spacing={6}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link className={classes.link} to="/">
                Home
              </Link>
              <Link className={classes.link} to="/">
                Categories
              </Link>
              <Link className={classes.link} to="#">
                {" "}
                {categorieSeccion}
              </Link>
            </Breadcrumbs>
            <Carousels />
            <Grid
              container
              direction="row"
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={3}>
                <Stack
                  spacing={2}
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Typography>Filters:</Typography>
                  <Chip
                    className={classes.priceFilter}
                    label="Up to $500"
                    onClick={() => handleFilter("Up to $500")}
                  />
                  <Chip
                    className={classes.priceFilter}
                    label="$500 to $1500"
                    onClick={() => handleFilter("$500 to $1500")}
                  />
                  <Chip
                    className={classes.priceFilter}
                    label="> $1500"
                    onClick={() => handleFilter("> $1500")}
                  />
                  <Chip
                    className={classes.priceFilter}
                    label="Clear 🧹"
                    onClick={() => handleFilter("🧹")}
                  />
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
                      <FilterSelect
                        value={filter}
                        onChange={handleSortChange}
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
