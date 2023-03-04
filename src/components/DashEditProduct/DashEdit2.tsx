// import { ChangeEvent, FormEvent, useState } from "react";
// import { useDispatch} from "react-redux";
// import { RootState } from "../../redux/store";
// import { ThunkDispatch } from 'redux-thunk';
// import { AnyAction } from 'redux';
// import { editProduct } from "../../redux/features/productSlice";

// // Agrega este estado a tu componente para manejar el formulario de edición
// const [editProductForm, setEditProductForm] = useState<{
//     id: string;
//     name: string;
//     quantity: number;
//     description: string;
//     price: number;
//     rating: number;
//     Marca: string;
//     category_id: number;
//   }>({
//     id: "",
//     name: "",
//     quantity: 0,
//     description: "",
//     price: 0,
//     rating: 0,
//     Marca: "",
//     category_id: 0,
//   });
//   type AppDispatch = ThunkDispatch<RootState, void, AnyAction>;
//   // Estado para controlar si el formulario de edición está abierto o cerrado
//   const [isEditFormOpen, setIsEditFormOpen] = useState(false);
//   const dispatch: AppDispatch = useDispatch();
  
//   // Agrega esta función para manejar el envío del formulario de edición
//   const handleEditProductSubmit = (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     dispatch(editProduct(editProductForm));
//     setIsEditFormOpen(false);
//   };
  
//   // Agrega esta función para manejar el cambio de valor en el formulario de edición
//   const handleEditProductChange = (event: ChangeEvent<HTMLInputElement>) => {
//     setEditProductForm({
//       ...editProductForm,
//       [event.target.name]:
//         event.target.type === "number"
//           ? Number(event.target.value)
//           : event.target.value,
//     });
//   };
  
//   // Agrega esta función para abrir el formulario de edición cuando se hace clic en el botón de "Editar" en una fila
//   const handleEditButtonClick = (product: {
//     id: string;
//     name: string;
//     quantity: number;
//     description: string;
//     price: number;
//     rating: number;
//     Marca: string;
//     category_id: number;
//   }) => {
//     setEditProductForm(product);
//     setIsEditFormOpen(true);
//   };
  
//   // Agrega esta función para cerrar el formulario de edición cuando se hace clic en el botón de "Cancelar" en el formulario
//   const handleEditFormClose = () => {
//     setIsEditFormOpen(false);
//   };
  
//   // Agrega este código a la función de renderizado de tu componente para mostrar el botón de "Editar" en cada fila de la tabla
// //   <StyledTableCell align="right">
// //     <Button onClick={() => handleEditButtonClick(row)}>
// //       <img src={editIcon} alt="Edit" />
// //     </Button>
// //   </StyledTableCell>
  
//   // Agrega este código al final de la función de renderizado para mostrar el formulario de edición si está abierto
//   {isEditFormOpen && (
//     <form onSubmit={handleEditProductSubmit}>
//       <h2>Edit Product</h2>
//       <label>
//         Name:
//         <input
//           type="text"
//           name="name"
//           value={editProductForm.name}
//           onChange={handleEditProductChange}
//         />
//       </label>
//       <br />
//       <label>
//         Quantity:
//         <input
//           type="number"
//           name="quantity"
//           value={editProductForm.quantity}
//           onChange={handleEditProductChange}
  


