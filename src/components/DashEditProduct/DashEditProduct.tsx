import { Button, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Product } from "../../types";
import { DashBoardProducts } from '../DashBoardProducts/DashBoardProducts';
// import  editProduct  from "../../redux/features/productActions";
import { useDispatch} from "react-redux";
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppDispatch } from '../../redux/store';
import { updateProduct } from '../../redux/features/productSlice';


interface FormEditProps {
  id: any,
  name: string;
  quantity: number;
  description: string;
  price: any; 
  Marca: string;
  img: string;
  setIsCancel: (isTable: boolean) => void;
  setIsCancel2: (isPaginated: boolean) => void;
  
  // setName: (name: string) => void;
  // setIsEditing: (isEditing: boolean) => void;
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
// export function DashEditProduct(id: string, name: string, quantity: number, description: string, 
//   price: number, rating: number, brand: string, category_id: number, img: string, deleted: boolean) 

export function DashEditProduct(props: FormEditProps) {

  // const props: FormEditProps = {
  //   name: name,
  //   setName: (name: string) => console.log(name),
  //   setIsEditing: (isEditing: boolean) => console.log(isEditing),
  // };
  const [name, setUpDateName] = useState(props.name);
  const [quantity, setUpDateQuantity] = useState(props.quantity);
  const [description, setUpDateDescription] = useState(props.description);
  const [price, setUpDatePrice] = useState(props.price);
  const [deleted, ] = useState(false);
  const [rating, ] = useState(4);
  const [Marca, setUpDateBrand] = useState(props.Marca);
  const [id, setID] = useState(props.id);
  const [img, setImage] = useState(props.img);
  const [category_id, setCategoryID] = useState(1);

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

  // const handleApellidoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setNuevoApellido(event.target.value);
  // }

  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updataProduct: Product = { id, name, quantity, description, img, price, deleted,rating, Marca, category_id};
    dispatch(updateProduct(updataProduct));
    alert("Product has been created successfully!");
  };
  // const [showTable, setShowTable] = useState(true);
  // const [showPaginated, setshowPaginated] = useState(true);

  // type AppDispatch = ThunkDispatch<RootState, void, AnyAction>;
  // const dispatch: AppDispatch = useDispatch();
  const handleCancelClick = () => {
    props.setIsCancel(true);
    props.setIsCancel2(true);
    // const editedProduct = {
    //   name,
    //   description,
    //   price,
    //   brand,
    // };
    // dispatch(editProduct(editedProduct));
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
      <Button variant="contained" color="primary" type="submit">
        Guardar
      </Button>
      <Button variant="contained" color="secondary" onClick={handleCancelClick}>
        Cancelar
      </Button>
    </form>

  );
}



