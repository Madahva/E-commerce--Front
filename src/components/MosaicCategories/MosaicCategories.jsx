import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const MosaicCategories = ({ categories }) => {
  const image =
    "https://images.samsung.com/is/image/samsung/assets/co/smartphones/galaxy-z-flip3-5g/buy/ZFlip3_Carousel_FoldUnfoldCombo_Lavender_MO.jpg";

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      {categories.map((el) => {
        return (
          <Grid item xs>
            <Link to={`/categories/${el.title}`}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={el.img}
                    alt={el.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {el.title}
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
