import { createSlice, AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Category } from "../../types";
const serverURL: string =
  "https://e-commerce-back-production-848f.up.railway.app/category";

interface CategoryState {
  categories: Category[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: CategoryState = {
  categories: [],
  status: "idle",
  error: null,
};

export const fetchCategories: AsyncThunk<
  Category[],
  void,
  {}
> = createAsyncThunk("category/fetchCategories", async () => {
  const response = await fetch(serverURL);
  const data = await response.json();
  return data;
});

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectCategory = (state: RootState) =>
  state.categoryReducer.categories;
export default categorySlice.reducer;
