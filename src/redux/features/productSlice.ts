import { createSlice, createAsyncThunk, AsyncThunk, PayloadAction, } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Product } from "../../types";
import { ProductCreate } from "../../types";

const productByIdURL: string =
  "https://e-commerce-back-production-848f.up.railway.app/products/";

const productsURL: string =
  "https://e-commerce-back-production-848f.up.railway.app/products/";  

const editURL: string =
  "https://e-commerce-back-production-848f.up.railway.app/products/edit/";  

interface filterState {
  productDetaild: Product[];
  productCreate: ProductCreate[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: filterState = {
  productDetaild: [],
  productCreate: [],
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

export const createNewProduct = createAsyncThunk<ProductCreate, ProductCreate>(
  "product/createNewProduct",
  async (newProduct) => {
    const response = await fetch(productsURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    const data = await response.json();
    return data;
  }
);

export const updateProduct: AsyncThunk<
Product,
any,
{}
> = createAsyncThunk("product/updateProductProduct", async (updatedProduct) => {
    const { id } = updatedProduct;
    const response = await fetch(`${editURL}${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });
    const data = await response.json();
    return data;
  }
);

// export const deleteProduct: AsyncThunk<Product, string, {}> = 
// createAsyncThunk("product/deleteProduct", async (ID) => {
//   const newURL: string = `${productByIdURL}${ID}`;
//   const response = await fetch(newURL, {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   const data = await response.json();
//   return data;
// });
export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (productId: string) => {
    const response = await fetch(`${productByIdURL}${productId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productId),
    });
    const data = await response.json();
    return data;
  }
);


const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductByID.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductByID.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.productDetaild = action.payload;
      })
      .addCase(fetchProductByID.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
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
      })
      .addCase(createNewProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createNewProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.productCreate.push(action.payload);
      })
      .addCase(createNewProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Find the index of the updated product in the array of productDetaild
        const index = state.productDetaild.findIndex(
          (product) => product.id === action.payload.id
        );
        // If the product exists in the array, update it
        if (index !== -1) {
          state.productDetaild[index] = action.payload;
        }
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        // Find the index of the deleted product in the array of productDetaild
        const index = state.productDetaild.findIndex(
          (product) => product.id === action.payload.id
        );
        // If the product exists in the array, mark it as deleted
        if (index !== -1) {
          state.productDetaild[index].deleted = true;
        }
      })

  },
});

export const selectProductDetailds = (state: RootState) => state.productReducer.productDetaild;
export default productSlice.reducer;
