import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import categoryReducer from "./features/categorySlice";
import productReducer from "./features/productSlice"
import userReducer from "./features/userSlice"
import filterReducer from "./features/filterSlice"
import paymentReducer from "./features/paymentSlice"

export const store = configureStore({
  reducer: { 
    categoryReducer,
    productReducer,
    userReducer,
    filterReducer,
    paymentReducer,
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
