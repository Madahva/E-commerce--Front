import * as React from "react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  fetchCategories,
  selectCategory,
} from "../../redux/features/categorySlice";
import {
  fetchCategoryByID,
} from "../../redux/features/filterSlice";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const image: string[] = [
  "https://http2.mlstatic.com/D_NQ_NP_2X_975871-MLA53397625865_012023-F.webp",
  "https://http2.mlstatic.com/D_NQ_NP_2X_710945-MLA48007822991_102021-F.webp",
  "https://http2.mlstatic.com/D_NQ_NP_874295-MLA51839167918_102022-O.webp",
  "https://http2.mlstatic.com/D_NQ_NP_2X_627149-MLA44484230438_012021-F.webp",
  "https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/sony_ilce7m2k_b_ac_alpha_a7_ii_mirrorless_1671460837_1324642.jpg",
  "https://http2.mlstatic.com/D_NQ_NP_624812-MLA52366680104_112022-O.webp",
  "https://http2.mlstatic.com/D_NQ_NP_926388-MLA51248091890_082022-O.webp",
  "https://http2.mlstatic.com/D_NQ_NP_2X_720590-MLA48994471714_022022-F.webp",
  "https://authogar.vtexassets.com/arquivos/ids/184569-800-auto?v=638048243255100000&width=800&height=auto&aspect=true",
];

const MosaicCategories = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);


  interface Category {
    id: number;
    typecategory: string;
  }

  const categories: Category[] = useAppSelector(selectCategory);

  const handleClick = (categoryId: number) => {
    dispatch(fetchCategoryByID(categoryId));
  };

  return (
    <Grid
      sx={{ flexGrow: 1, margin: "6rem 0" }}
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      {categories.map((category: Category, index: number) => {
        return (
          <Grid
            item
            xs={12}
            sm={4}
            key={index}
            onClick={() => handleClick(category.id)}
          >
            <Link to={`/${category.typecategory.toLowerCase()}`}>
              <Card sx={{ maxWidth: 920 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    sx={{
                      height: "150px",
                      width: "100%",
                      objectFit: "scale-down",
                      borderRadius: "4px",
                    }}
                    image={image[index]}
                    alt={category.typecategory}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      style={{ textTransform: "capitalize" }}
                    >
                      {category.typecategory}
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
