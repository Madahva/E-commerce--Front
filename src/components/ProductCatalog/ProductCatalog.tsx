import * as React from "react";
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
  const classes = useStyles();
  const location = useLocation();
  const segments = location.pathname.split("/");
  const lastSegment = segments.pop();
  let categorieSeccion = decodeURIComponent(lastSegment);
  const [buttonText, setButtonText] = useState("Most relevant");

  console.log(categorieSeccion)
  if (categorieSeccion === "gaming consoles") categorieSeccion = "GameConsoles";
  if (categorieSeccion === "smart watches") categorieSeccion = "SmartWatches";

  if (categorieSeccion === "smartphones") categorieSeccion = "Smartphones";

  //en typescript se cambia
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event: React.MouseEvent<HTMLLIElement>) => {
    setButtonText((event.target as HTMLInputElement).textContent || "Most relevant");
    setAnchorEl(null);
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
            <Grid container direction="row" spacing={2} justifyContent="center" alignItems="flex-start">
              <Grid item xs={3}>
                <Stack spacing={2} direction="column" justifyContent="center" alignItems="center">
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
                <Grid container rowSpacing={2} direction="column" justifyContent="space-between" alignItems="stretch">
                  <Grid item xs>
                    <Grid container direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                      <Grid item xs={4}>
                        <h2>Show XX items of XX</h2>
                      </Grid>
                      <Grid item xs={4}>
                        <Grid container spacing={2}>
                          <Grid item xs={5}>
                            <h3>Order by: </h3>
                          </Grid>
                          <Grid item xs={7}>
                            <Box sx={{ margin: 1.4 }}></Box>
                            <Button
                              /* id="basic-button"
                              aria-controls={open ? "basic-menu" : ""}
                              aria-haspopup="true"
                              aria-expanded={open ? "true" : ""}
                              onClick={handleClick} */
                            >
                              {buttonText}
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorEl}
                              open={open}
                              onClose={handleClose}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem onClick={(e: React.MouseEvent<HTMLLIElement>) => handleClose(e)}>
                                Most relevant
                              </MenuItem>
                              <MenuItem onClick={(e: React.MouseEvent<HTMLLIElement>) => handleClose(e)}>
                                Lower price
                              </MenuItem>
                              <MenuItem onClick={(e: React.MouseEvent<HTMLLIElement>) => handleClose(e)}>
                                Higher price
                              </MenuItem>
                            </Menu>
                          </Grid>
                        </Grid>
                      </Grid>
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
