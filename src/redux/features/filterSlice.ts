import { createSlice, createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Product } from "../../types";

const filterCategoryURL: string =
  "https://e-commerce-back-production-848f.up.railway.app/filters/category?category_id=";

interface filterState {
  product: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: filterState = {
  product: [],
  status: "idle",
  error: null,
};

export const fetchCategoryByID: AsyncThunk<
  Product[],
  number,
  {}
> = createAsyncThunk("filter/fetchCategoryByID", async (category) => {
  const newURL: string = `${filterCategoryURL}${category}`;
  const response = await fetch(newURL);
  const data = await response.json();
  return data;
});

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {},
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

export const selectProduct = (state: RootState) => state.filterReducer.product;
export default filterSlice.reducer;
