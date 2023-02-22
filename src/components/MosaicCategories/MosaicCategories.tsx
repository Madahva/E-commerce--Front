import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { categories } from "../../assets/styles/Data.js";

const MosaicCategories = () => {
  return (
    <Grid
      sx={{ flexGrow: 1 }}
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      {categories.map((categories, index) => {
        return (
          <Grid item xs={12} sm={4} key={index} >
            <Link to={`/${categories.title}`}>
              <Card sx={{ maxWidth: 920 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={categories.img}
                    alt={categories.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {categories.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default MosaicCategories;
