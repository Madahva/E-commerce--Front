import { Button, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import React, { useState } from 'react';
import Typography from "@mui/material/Typography";
import type { ReactElement } from "react"
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import makeStyles from '@mui/styles/makeStyles';
import { Category } from "../../types";
import { DashBoardProducts } from '../DashBoardProducts/DashBoardProducts';
// import  editProduct  from "../../redux/features/productActions";
import { useDispatch} from "react-redux";
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { createNewProduct } from '../../redux/features/productSlice';
import { RootState } from '../../redux/store';
import { Container, FormGroup, Input } from "@mui/material";
import { SelectChangeEvent } from '@mui/material/Select';
import { useAppSelector } from "../../redux/hooks";
import Breadcrumbs from "@mui/material/Breadcrumbs";


const useStyles = makeStyles(() => ({
  navBar: {
    alignItems: "center",
    textAlign: "center",
    display: "flex",
    backgroundColor: "#1976d2",
    justifyContent: "space-between",
    gap: "1rem",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
    padding: ".5rem",
    "@media (min-width: 960px)": {
      padding: "1rem 5rem",
    },
  },
  button: {
    backgroundColor: "rgba(250,250,250,.1)",
    borderRadius: ".5rem",
  },
  Box: {
    marginTop: "30vh",
    padding: "0 5rem",
  },
  error: {
    color: "rgb(131, 22, 22)",
    fontFamily: 'VT323', 
    fontSize: '0.7rem',
    position: "absolute",
    backgroundColor: "transparent",
  },
  link: {
    color: "inherit",
    textDecoration: "none",
    textTransform: "capitalize",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

type AppDispatch = ThunkDispatch<RootState, void, AnyAction>;

export function DashCreateCategory(): ReactElement {
  const classes = useStyles();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();
  const isAdmind: boolean =
    isAuthenticated &&
    (user.email === process.env.REACT_APP_EMAIL_ADMIN_1 ||
      user.email === process.env.REACT_APP_EMAIL_ADMIN_2);

  if (!isAdmind) navigate("/");

  const [typecategory, setTypeCategory] = useState("");
  const [id, setID] = useState("");

  const allCategories = useAppSelector((state: RootState) => state.categoryReducer.categories);

  console.log(allCategories)

  
  const handleCategoryChange = (event: SelectChangeEvent<string>, child: React.ReactNode) => {
    const categoryType = event.target.value;
    const selectedCategory = allCategories.find((c) => c.typecategory === categoryType);
  
    if (selectedCategory) {
      setID(selectedCategory.id);
      setTypeCategory(categoryType);
      console.log(selectedCategory.id)
    }
  }

  //Cloudinary
  const [img, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  
  const upload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files[0];
    const data = new FormData();
    data.append("file",files)
    data.append("upload_preset", "products");
    setLoading(true)
    const res = await fetch(`https://api.cloudinary.com/v1_1/dqkucfw4m/image/upload`, 
        { method: "POST", body: data })
      
    const img_url = await res.json();
    console.log(res)
    setImage(img_url.secure_url)
    console.log(img_url.secure_url)
    setLoading(false)
  };
  //////////////////
  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newCategory: Category = { id, typecategory};
    console.log(newCategory)
    // dispatch(createNewCategory(newCategory));
    alert("Category has been created successfully!");
  };
  
  return (
    <div>
      {isLoading ? (
        "Loading..."
      ) : (
        <div>
          <div className={classes.navBar}>
            <Link to="/" className={classes.button}>
              <Button>
                <HomeIcon style={{ color: "white" }} />
              </Button>
            </Link>
  
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ color: "white" }}
            >
              Create Category
            </Typography>
  
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ color: "white" }}
            >
              Admin: {user.given_name}
            </Typography>
          </div>
          <div style={{ marginLeft: "45px", marginTop: "10px", marginBottom: "-10px"}}>
          <Breadcrumbs aria-label="breadcrumb">
              <Link className={classes.link} to="/">
                Home
              </Link>
              <Link className={classes.link} to="/dashboard">
                Dashboard
              </Link>
              <Link className={classes.link} to="/dashboard-categories">
                Category Dashboard
              </Link>
          </Breadcrumbs>
          </div>
          <div>
            <Container>
                <h1 style = {{marginLeft: "-15px"}}>
                    Upload Imagen
                </h1>
                {loading?(<h3>Loading Imagen...</h3>):(<img src = {img} style = {{width: "300px", marginLeft: "-15px"}}/>)}
            </Container>
             <FormGroup>
              <Input
                    type = "file"
                    name = "file"
                    placeholder = "Choose your product"
                    onChange = {upload}
                    style = {{width: "157px" , marginLeft: "40px"}}
              />
            </FormGroup>
          </div>
          <form onSubmit={handleSubmit} style={{ width: '95%', margin: '3%', maxHeight: '180vh' }}>
            
              <Grid container spacing={2} >
                <Grid item xs={12}>
                  <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="category">Category</InputLabel>
                  <Select
                    value={typecategory}
                    onChange={handleCategoryChange}
                    displayEmpty
                  >
                  <MenuItem value='' disabled>
                  Category
                  </MenuItem>
                  {allCategories?.map((c) => (
                    <MenuItem key={c.id} value={c.typecategory}>
                    {c.typecategory.toUpperCase()}
                    </MenuItem>
                  ))}
                  </Select>
                  </FormControl>
                </Grid>
              </Grid>
            
            <br />
            <br />
            <Button variant="contained" color="primary" type="submit">
              Create
            </Button>
          </form>
        </div>
      )}
    </div>
  );
}
