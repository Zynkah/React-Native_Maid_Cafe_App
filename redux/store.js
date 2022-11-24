import { configureStore } from "@reduxjs/toolkit";
import { banquetsReducer } from "../features/banquets/banquetsSlice";
import { cartsReducer } from "../features/banquets/cartsSlice";
import { commentsReducer } from "../features/banquets/commentsSlice";
import { maidsReducer } from "../features/banquets/maidsSlice";
import { menusReducer } from "../features/banquets/menusSlice";

export const store = configureStore({
  reducer: {
    banquets: banquetsReducer,
    cart: cartsReducer,
    comments: commentsReducer,
    maids: maidsReducer,
    menu: menusReducer,
  },
});
