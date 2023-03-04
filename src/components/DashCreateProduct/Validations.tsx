interface Product {
    name: string;
    quantity: number;
    description: string;
    price: number;
    Marca: string;
  }
  
  interface Errors {
    name?: string;
    quantity?: string;
    description?: string;
    price?: string;
    Marca?: string;
  }
  
  const validations = (input: Product): Errors => {
    let err: Errors = {};
  
    // let search = pokemons.find(e => e.name.toLowerCase() === input.name.toLowerCase());
  
    // if (search){
    //     err.name = "There is already a Pokemon with that name"
    // } 
  
    if (!input.name) {
      err.name = "The name is required";
    }
  
    if (input.name.search("[^A-Za-z0-9_]") !== -1) {
      err.name = "The name must not have symbols";
    }
  
    if (input.name.search("[0-9]") !== -1) {
      err.name = "The name must not have numbers";
    }
  
    if (input.name.length > 20) {
      err.name = "The name must be between 1 and 20 characters";
    }
  
    if (input.name[0] === " ") {
      err.name = "The first character cannot be a space";
    }

    if (input.quantity <= 0) {
        err.quantity = "Value must be greater than 0 ";
    }
  
    if (input.description === "") {
      err.description = "The description is required";
    }
  
    if (input.price <= 0) {
      err.price= "Value must be greater than 0 ";
    }

    if (input.Marca === "") {
        err.Marca= "The brand is required";
    }
  
    return err;
  };
  
  export default validations;
  