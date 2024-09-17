import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../state/cartSlice';
import postsReducer from "../posts/postsSlice";
import authReducer from '../auth/authSlice';
import productsSlice from "../products/productsSlice";
import { productApi } from "../../services/productApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { reviewApi } from "../../services/reviewApi";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    posts: postsReducer,
    auth: authReducer,
    products: productsSlice,
    [productApi.reducerPath]: productApi.reducer, 
    [reviewApi.reducerPath]: reviewApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware, reviewApi.middleware),
});

setupListeners(store.dispatch); // 
