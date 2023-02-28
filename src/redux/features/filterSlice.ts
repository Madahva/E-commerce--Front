import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Product } from "../../types";

const filterCategoryURL: string =
  "https://e-commerce-back-production-848f.up.railway.app/filters/category?category_id=";

const searchURL: string =
  "https://e-commerce-back-production-848f.up.railway.app/filters/name?name=";

interface filterState {
  product: Product[];
  filteredProducts: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: filterState = {
  product: [],
  filteredProducts: [],
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

export const fetchBySearch = createAsyncThunk(
  "search/fetchBySearch",
  async (name: string) => {
    const newURL: string = `${searchURL}${name}`;
    const response = await fetch(newURL);
    return (await response.json()) as Product[];
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

      let orderPrice;

      if (action.payload === "mostRelevant") orderPrice = mostRelevant;
      if (action.payload === "higherPrice") orderPrice = higherPrice;
      if (action.payload === "lowerPrice") orderPrice = lowerPrice;

      state.filteredProducts.sort(orderPrice);
    },
    filterProductsByPrice: (state, action: PayloadAction<string>) => {
      const selectedPrice = action.payload;
      if (selectedPrice === "Up to $500") {
        state.filteredProducts = state.product.filter(
          (product) => product.price <= 500
        );
      } else if (selectedPrice === "$500 to $1500") {
        state.filteredProducts = state.product.filter(
          (product) => product.price > 500 && product.price <= 1500
        );
      } else if (selectedPrice === "> $1500") {
        state.filteredProducts = state.product.filter(
          (product) => product.price > 1500
        );
      } else {
        state.filteredProducts = state.product;
      }
    },
    updateProductsFromSearch: (state, action: PayloadAction<Product[]>) => {
      state.filteredProducts = action.payload;
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
        state.filteredProducts = action.payload;
      })
      .addCase(fetchCategoryByID.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchBySearch.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBySearch.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.product = action.payload;
        state.filteredProducts = action.payload;
      })
      .addCase(fetchBySearch.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {
  sortProductsByPrice,
  filterProductsByPrice,
} = filterSlice.actions;
export const selectProduct = (state: RootState) =>
  state.filterReducer.filteredProducts;
export default filterSlice.reducer;
