import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";

const paymentURL: string =
  "https://e-commerce-back-production-848f.up.railway.app/payment";

const paymentHistoryURL: string =
  "https://e-commerce-back-production-848f.up.railway.app/paymentHistory";

const userPaymentHistoryURL: string =
  "https://e-commerce-back-production-848f.up.railway.app/userPaymentHistory?email=";

interface paymentState {
  paymentLink: any;
  userPaymentHistory: any;
  allPaymentHistory: any;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: paymentState = {
  paymentLink: {},
  userPaymentHistory: [],
  allPaymentHistory: [],
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

export const createPaymentHistory = createAsyncThunk(
  "payment/createPaymentHistory",
  async ({
    shoppingCart,
    userEmail,
  }: {
    shoppingCart: any;
    userEmail: string;
  }) => {
    const paymentData = shoppingCart.map((item: any) => ({
      title: item.title,
      price: item.unit_price,
      amount: item.unit_price * item.quantity,
      quantity: item.quantity,
      user: userEmail,
    }));

    await fetch(paymentHistoryURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paymentData),
    });
  }
);

export const fetchUserPaymentHistory = createAsyncThunk(
  "payment/fetchUserPaymentHistory",
  async (userEmail: string) => {
    const newURL: string = `${userPaymentHistoryURL}${userEmail}`;
    const response = await fetch(newURL);
    return (await response.json()) as any;
  }
);

export const fetchAllPaymentHistory = createAsyncThunk(
  "payment/fetchAllPaymentHistory",
  async () => {
    const response = await fetch(paymentHistoryURL);
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
      })
      .addCase(fetchUserPaymentHistory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserPaymentHistory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userPaymentHistory = action.payload;
      })
      .addCase(fetchUserPaymentHistory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchAllPaymentHistory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllPaymentHistory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allPaymentHistory = action.payload;
      })
      .addCase(fetchAllPaymentHistory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectPayment = (state: RootState) =>
  state.paymentReducer.paymentLink;
export const selectUserPaymentHistory = (state: RootState) =>
  state.paymentReducer.userPaymentHistory;
export const selectAllPaymentHistory = (state: RootState) =>
  state.paymentReducer.allPaymentHistory;
export default paymentSlice.reducer;
