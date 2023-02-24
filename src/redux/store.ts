import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./features/categorySlice";
import productReducer from "./features/productSlice"
import userReducer from "./features/userSlice"

const store = configureStore({
  reducer: { 
    categoryReducer,
    productReducer,
    userReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
