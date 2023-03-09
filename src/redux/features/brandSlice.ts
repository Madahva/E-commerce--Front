import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Brand } from "../../types";
const serverURL: string =
  "https://e-commerce-back-production-848f.up.railway.app/brand";

interface BrandState {
  brands: Brand[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: BrandState = {
  brands: [],
  status: "idle",
  error: null,
};

export const fetchBrands = createAsyncThunk(
  "brand/fetchBrands",
  async () => {
    const response = await fetch(serverURL);
    return (await response.json()) as Brand[]
  }
);

const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrands.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.brands = action.payload;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectBrand = (state: RootState) => state.brandReducer.brands;
export default brandSlice.reducer;
