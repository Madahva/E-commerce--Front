import { Button, FormControl, Grid, Input, InputLabel, OutlinedInput, TextField } from '@mui/material';
import React, { useState } from 'react';
import Typography from "@mui/material/Typography";
import type { ReactElement } from "react"
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import makeStyles from '@mui/styles/makeStyles';
import { Product } from "../../types";
import { DashBoardProducts } from '../DashBoardProducts/DashBoardProducts';
// import  editProduct  from "../../redux/features/productActions";
import { useDispatch} from "react-redux";
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { createNewProduct } from '../../redux/features/productSlice';
import { RootState } from '../../redux/store';
import validations from './Validations';

interface ProductError {
  name: string;
  quantity: number;
  description: string;
  price: number;
  Marca: string;
}

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
  }
}));

type AppDispatch = ThunkDispatch<RootState, void, AnyAction>;

export function DashCreateProduct(): ReactElement {
  const classes = useStyles();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();
  const isAdmind: boolean =
    isAuthenticated &&
    (user.email === process.env.REACT_APP_EMAIL_ADMIN_1 ||
      user.email === process.env.REACT_APP_EMAIL_ADMIN_2);

  if (!isAdmind) navigate("/");

  const [id, ] = useState("ghfdgf112312");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState("");
  const [img, ] = useState("");
  const [price, setPrice] = useState(0);
  const [deleted, ] = useState(false);
  const [rating, ] = useState(0);
  const [Marca, setBrand] = useState("");
  const [category_id, ] = useState(1);
  const [errors, setErrors] = useState({});

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }
  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(event.target.value));
  }
  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  }
  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(event.target.value));
  }
  const handleBrandChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBrand(event.target.value);
  }
  
  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const product: ProductError = {
      name: name,
      quantity: quantity,
      description: description,
      price: price,
      Marca: Marca,
    }
    
    setErrors(validations(product));
      
    const newProduct: Product = { id, name, quantity, description, img, price, deleted,rating, Marca, category_id};
    console.log(newProduct)
    dispatch(createNewProduct(newProduct));
    alert("Product has been created successfully!");
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
              Create Product
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
          <form onSubmit={handleSubmit} style={{ width: '95%', margin: '3%', maxHeight: '180vh' }}>
            
              <Grid container spacing={2} >
                <Grid item xs={12}>
                  <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="name">Name</InputLabel>
                  <OutlinedInput
                    id="name"
                    value={name}
                    onChange={handleNameChange}
                    fullWidth
                  />
                  {/* {errors.name && (<p className={classes.error}>{errors.name}</p>)} */}
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="quantity">Quantity</InputLabel>
                  <OutlinedInput
                    id="quantity"
                    value={quantity}
                    onChange={handleQuantityChange}
                    fullWidth
                  />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="description">Description</InputLabel>
                  <OutlinedInput
                    id="description"
                    value={description}
                    onChange={handleDescriptionChange}
                    fullWidth
                  />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="price">Price</InputLabel>
                  <OutlinedInput
                    id="price"
                    value={price}
                    onChange={handlePriceChange}
                    fullWidth
                  />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="brand">Brand</InputLabel>
                  <OutlinedInput
                    id="brand"
                    value={Marca}
                    onChange={handleBrandChange}
                    fullWidth
                  />
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



