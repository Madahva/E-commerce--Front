import { Button, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Category} from "../../types";
import { DashBoardProducts } from '../DashBoardProducts/DashBoardProducts';
// import  editProduct  from "../../redux/features/productActions";
import { useDispatch} from "react-redux";
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppDispatch } from '../../redux/store';
import { updateProduct } from '../../redux/features/productSlice';


interface FormEditProps {
  id: any,
  typecategory: string;
  setIsCancel: (isTable: boolean) => void;
  setIsCancel2: (isPaginated: boolean) => void;
  
  // setName: (name: string) => void;
  // setIsEditing: (isEditing: boolean) => void;
}



export function DashEditCategory(props: FormEditProps) {


  const [typecategory, setUpDateName] = useState(props.typecategory);
  const [id, setID] = useState(props.id);


  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpDateName(event.target.value);
  }

  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updataProduct: Category = { id, typecategory};
    dispatch(updateProduct(updataProduct));
    alert("Product has been created successfully!");
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
            value={typecategory}
            onChange={handleNameChange}
            fullWidth
          />
          {/* {errors.name && (<p className={classes.error}>{errors.name}</p>)} */}
          </FormControl>
        </Grid> 
      </Grid>
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Button variant="contained" color="primary" type="submit">
        Guardar
      </Button>
      <Button variant="contained" color="secondary" onClick={handleCancelClick}>
        Cancelar
      </Button>
      </div>
    </form>

  );
}



