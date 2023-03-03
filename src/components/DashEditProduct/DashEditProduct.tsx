import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Product } from "../../types";

interface FormEditProps {
  name: string;
  quantity: number;
  description: string;
  price: any; 
  Marca: string; 
  // setName: (name: string) => void;
  // setIsEditing: (isEditing: boolean) => void;
}

// export function DashEditProduct(id: string, name: string, quantity: number, description: string, 
//   price: number, rating: number, brand: string, category_id: number, img: string, deleted: boolean) 

export function DashEditProduct(props: FormEditProps) {

  // const props: FormEditProps = {
  //   name: name,
  //   setName: (name: string) => console.log(name),
  //   setIsEditing: (isEditing: boolean) => console.log(isEditing),
  // };

  // const [newNombre, setNewName] = useState(props.name);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setNewName(event.target.value);
  }

  // const handleApellidoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setNuevoApellido(event.target.value);
  // }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // props.setName(newNombre);
    // props.setIsEditing(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="name"
            label="Name"
            value={props.name}
            onChange={handleNameChange}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="quantity"
            label="Quantity"
            value={props.quantity}
            onChange={handleNameChange}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="description"
            label="Description"
            value={props.description}
            onChange={handleNameChange}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="price"
            label="Price"
            value={props.price}
            onChange={handleNameChange}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="brand"
            label="Brand"
            value={props.Marca}
            onChange={handleNameChange}
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>
      <br />
      <br />
      <Button variant="contained" color="primary" type="submit">
        Guardar
      </Button>
      <Button variant="contained" color="secondary">
        Cancelar
      </Button>
    </form>

  );
}



