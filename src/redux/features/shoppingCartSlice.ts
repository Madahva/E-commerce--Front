import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: any = {
  items: [],
};

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const itemExists = state.items.some(
        (item: any) => item.id === action.payload.id
      );
      if (!itemExists) {
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item: any) => item.id !== action.payload
      );
    },
  },
});

export const { addItem, removeItem } = shoppingCartSlice.actions;
export const selectShoppingCartItems = (state: RootState) =>
  state.shoppingReducer.items;
export default shoppingCartSlice.reducer;
