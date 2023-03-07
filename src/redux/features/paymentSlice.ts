import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";

const paymentURL: string =
  "https://e-commerce-back-production-848f.up.railway.app/payment";

interface paymentState {
  paymentLink: any;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: paymentState = {
  paymentLink: {},
  status: "idle",
  error: null,
};

export const fetchPayment = createAsyncThunk(
  "payment/fetchPayment",
  async (paymentData: any) => {
    const response = await fetch(paymentURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paymentData),
    });
    return (await response.json()) as any;
  }
);

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPayment.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPayment.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.paymentLink = action.payload;
      })
      .addCase(fetchPayment.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectPayment = (state: RootState) => 
  state.paymentReducer.paymentLink;
export default paymentSlice.reducer;
