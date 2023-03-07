import {
  configureStore,
  ThunkAction,
  Action,
  Middleware,
} from "@reduxjs/toolkit";
import categoryReducer from "./features/categorySlice";
import productReducer from "./features/productSlice";
import userReducer from "./features/userSlice";
import filterReducer from "./features/filterSlice";
import paymentReducer from "./features/paymentSlice";
import shoppingReducer from "./features/shoppingCartSlice";

const localStorageMiddleware: Middleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    const state = getState();
    localStorage.setItem(
      "shoppingCart",
      JSON.stringify(state.shoppingReducer.items)
    );
    return result;
  };
};

const localStorageFilterMiddleware: Middleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    const state = getState();
    localStorage.setItem(
      "filteredProducts",
      JSON.stringify(state.filterReducer.filteredProducts)
    );
    return result;
  };
};

export const store = configureStore({
  reducer: {
    categoryReducer,
    productReducer,
    userReducer,
    filterReducer,
    paymentReducer,
    shoppingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      localStorageMiddleware,
      localStorageFilterMiddleware
    ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
