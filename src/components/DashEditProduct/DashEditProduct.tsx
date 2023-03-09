import { Button, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Product } from "../../types";
import { DashBoardProducts } from '../DashBoardProducts/DashBoardProducts';
import { useDispatch} from "react-redux";
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppDispatch } from '../../redux/store';
import { updateProduct } from '../../redux/features/productSlice';
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

interface FormEditProps {
  id: any,
  name: string;
  quantity: number;
  description: string;
  price: any; 
  Marca: string;
  img: string;
  category_id: any;
  setIsCancel: (isTable: boolean) => void;
  setIsCancel2: (isPaginated: boolean) => void;
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

export function DashEditProduct(props: FormEditProps) {


  const [name, setUpDateName] = useState(props.name);
  const [quantity, setUpDateQuantity] = useState(props.quantity);
  const [description, setUpDateDescription] = useState(props.description);
  const [price, setUpDatePrice] = useState(props.price);
  const [deleted, ] = useState(false);
  const [rating, ] = useState(4);
  const [Marca, setUpDateBrand] = useState(props.Marca);
  const [id, setID] = useState(props.id);
  const [img, setImage] = useState(props.img);
  const [category_id, setCategoryID] = useState(props.category_id);
  const [showSuccestMsg, setShowSuccestMsg] = useState(false);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpDateName(event.target.value);
  }
  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpDateQuantity(Number(event.target.value));
  }
  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpDateDescription(event.target.value);
  }
  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpDatePrice(event.target.value);
  }
  const handleBrandChange = (event: SelectChangeEvent<string>, child: React.ReactNode) => {
    setUpDateBrand(event.target.value);
  }

  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updataProduct: Product = { id, name, quantity, description, img, price, deleted,rating, Marca, category_id};
    dispatch(updateProduct(updataProduct));
    setShowSuccestMsg(true);
  };

  const handleCancelClick = () => {
    props.setIsCancel(true);
    props.setIsCancel2(true);
  };

  return (
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
          {/* {errors.name && (<p className={classes.error}>{errors.name}</p>)} */}
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
          {/* {errors.name && (<p className={classes.error}>{errors.name}</p>)} */}
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="price">price</InputLabel>
          <OutlinedInput
            id="price"
            value={price}
            onChange={handlePriceChange}
            fullWidth
          />
          {/* {errors.name && (<p className={classes.error}>{errors.name}</p>)} */}
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
          </FormControl>
        </Grid>
      </Grid>
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Button variant="contained" color="primary" type="submit" style={{ marginRight: "80px" }}>
        Guardar
      </Button>
      <Button variant="contained" color="secondary" onClick={handleCancelClick}>
        Cancelar
      </Button>
      </div>
      <Snackbar
            open={showSuccestMsg}
            autoHideDuration={5000}
            onClose={() => setShowSuccestMsg(false)}
            >
            <Alert severity="success" onClose={() => setShowSuccestMsg(false)}>
              Product edited!
            </Alert>
      </Snackbar>
    </form>

  );
}



