import { Product } from "../../types";


// Definimos una interfaz para el objeto que representa la información del producto a editar
interface EditProductPayload {
  id: string;
  name: string;
  quantity: number;
  description: string;
  price: number;
  rating: number;
  Marca: string;
  category_id: number;
}

// Definimos una interfaz para la acción que edita un producto
interface EditProductAction {
  type: 'EDIT_PRODUCT';
  payload: EditProductPayload;
}

// Definimos un creador de acciones que devuelve una acción de tipo EditProductAction
export function editProduct(product: Product): EditProductAction {
  const { id, name, quantity, description, price, rating, Marca, category_id } = product;
  return {
    type: 'EDIT_PRODUCT',
    payload: { id, name, quantity, description, price, rating, Marca, category_id },
  };
}
