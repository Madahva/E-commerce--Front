import { createSlice, createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Product } from "../../types";

const productByIdURL: string =
  "https://e-commerce-back-production-848f.up.railway.app/products/";

const productsURL: string =
  "https://e-commerce-back-production-848f.up.railway.app/products/";  

interface filterState {
  productDetaild: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: filterState = {
  productDetaild: [],
  status: "idle",
  error: null,
};

export const fetchProductByID: AsyncThunk<
  Product[],
  string,
  {}
> = createAsyncThunk("product/fetchProductByID", async (ID) => {
  const newURL: string = `${productByIdURL}${ID}`;
  const response = await fetch(newURL);
  const data = await response.json();
  return [data];
});

export const fetchProducts = createAsyncThunk<Product[], void>(
  "product/fetchProducts",
  async () => {
    const response = await fetch(productsURL);
    const data = await response.json();
    return data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductByID.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductByID.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.productDetaild =   action.payload;
      })
      .addCase(fetchProductByID.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      //All products
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.productDetaild = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectProductDetailds = (state: RootState) => state.productReducer.productDetaild;
export default productSlice.reducer;
