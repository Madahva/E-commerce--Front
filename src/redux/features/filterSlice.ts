import {
  createSlice,
  createAsyncThunk,
  AsyncThunk,
  PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Product } from "../../types";

const filterCategoryURL: string =
  "https://e-commerce-back-production-848f.up.railway.app/filters/category?category_id=";

interface filterState {
  product: Product[];
  filter: string;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: filterState = {
  product: [],
  filter: "",
  status: "idle",
  error: null,
};

export const fetchCategoryByID = createAsyncThunk(
  "filter/fetchCategoryByID",
  async (category: number) => {
    const newURL: string = `${filterCategoryURL}${category}`;
    const response = await fetch(newURL);
    const products = await response.json();
    const parsedProducts = products.map((product: Product) => ({
      ...product,
      price: parseFloat(product.price),
      rating: parseFloat(product.rating),
    })) as Product[];
    return parsedProducts;
  }
);
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    sortProductsByPrice: (state, action: PayloadAction<string>) => {
      const mostRelevant = (a: Product, b: Product) => b.rating - a.rating;
      const higherPrice = (a: Product, b: Product) => b.price - a.price;
      const lowerPrice = (a: Product, b: Product) => a.price - b.price;
      
      let orderPrice

      if (action.payload === "mostRelevant") orderPrice = mostRelevant;
      if (action.payload === "higherPrice") orderPrice = higherPrice;
      if (action.payload === "lowerPrice") orderPrice = lowerPrice;

      state.product.sort(orderPrice);
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoryByID.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategoryByID.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.product = action.payload;
      })
      .addCase(fetchCategoryByID.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { sortProductsByPrice } = filterSlice.actions;
export const selectProduct = (state: RootState) => state.filterReducer.product;
export default filterSlice.reducer;
