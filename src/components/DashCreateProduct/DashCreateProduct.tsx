import { Button, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Typography from "@mui/material/Typography";
import type { ReactElement } from "react"
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import makeStyles from '@mui/styles/makeStyles';
import { ProductCreate } from "../../types";
import { Category } from "../../types";
import { DashBoardProducts } from '../DashBoardProducts/DashBoardProducts';
// import  editProduct  from "../../redux/features/productActions";
import { useDispatch} from "react-redux";
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { createNewProduct } from '../../redux/features/productSlice';
import { RootState } from '../../redux/store';
import validations from './Validations';
import { Container, FormGroup, Input } from "@mui/material";
import { SelectChangeEvent } from '@mui/material/Select';
import { useAppSelector } from "../../redux/hooks";
import { fetchCategories } from '../../redux/features/categorySlice';
import Breadcrumbs from "@mui/material/Breadcrumbs";

interface ProductError {
  name: string;
  quantity: number;
  description: string;
  price: number;
  Marca: string;
}

interface Brand {
  id: number;
  name: string;
}

const brands: Brand[] = [
  {
    id: 1,
    name: 'AMD',
  },
  {
    id: 2,
    name: 'BGH',
  },
  {
    id: 3,
    name: 'DELL',
  },
  {
    id: 4,
    name: 'Electrolux',
  },
  {
    id: 5,
    name: 'HP',
  },
  {
    id: 6,
    name: 'Huawei',
  },
  {
    id: 7,
    name: 'Lenovo',
  },
  {
    id: 8,
    name: 'LG',
  },
  {
    id: 9,
    name: 'Logitech',
  },
  {
    id: 10,
    name: 'Noblex',
  },
  {
    id: 11,
    name: 'Nokia',
  },
  {
    id: 12,
    name: 'Philco',
  },
  {
    id: 13,
    name: 'Philips',
  },
  {
    id: 14,
    name: 'Samsung',
  },
  {
    id: 15,
    name: 'Sony',
  },
  {
    id: 16,
    name: 'Xiaomi',
  },
];
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

export function DashCreateProduct(): ReactElement {
  const classes = useStyles();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();
  const isAdmind: boolean =
    isAuthenticated &&
    (user.email === process.env.REACT_APP_EMAIL_ADMIN_1 ||
      user.email === process.env.REACT_APP_EMAIL_ADMIN_2);

  if (!isAdmind) navigate("/");
  
 
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [deleted, ] = useState(false);
  const [rating, ] = useState(4);
  const [Marca, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [category_id, setCategoryID] = useState(0);
  const [errors, setErrors] = useState({});

  const allCategories = useAppSelector((state: RootState) => state.categoryReducer.categories);
  
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

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
  const handleBrandChange = (event: SelectChangeEvent<string>, child: React.ReactNode) => {
    setBrand(event.target.value);
  }
  const handleCategoryChange = (event: SelectChangeEvent<string>, child: React.ReactNode) => {
    const categoryType = event.target.value;
    const selectedCategory = allCategories.find((c) => c.typecategory === categoryType);
  
    if (selectedCategory) {
      setCategoryID(selectedCategory.id);
      setCategory(categoryType);
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
    const newProduct: ProductCreate = { name, quantity, description, img, price, deleted,rating, Marca, category_id};
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
          <div style={{ marginLeft: "45px", marginTop: "10px", marginBottom: "-10px"}}>
          <Breadcrumbs aria-label="breadcrumb">
              <Link className={classes.link} to="/">
                Home
              </Link>
              <Link className={classes.link} to="/dashboard">
                Dashboard
              </Link>
              <Link className={classes.link} to="/dashboard-products">
                Products Dashboard
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
                  <Select
                    value={Marca}
                    onChange={handleBrandChange}
                    displayEmpty
                  >
                  <MenuItem value='' disabled>
                  Brand
                  </MenuItem>
                  {brands?.map((b) => (
                    <MenuItem key={b.name} value={b.name}>
                    {b.name.toUpperCase()}
                    </MenuItem>
                  ))}
                  </Select>
                  {/* <OutlinedInput
                    id="brand"
                    value={Marca}
                    onChange={handleBrandChange}
                    fullWidth
                  /> */}
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="category">Category</InputLabel>
                  <Select
                    value={category}
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



