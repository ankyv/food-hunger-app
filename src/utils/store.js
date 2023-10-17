import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import menuSlice from "./menuSlice";
import themeSlice from "./themeSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    menu: menuSlice,
    theme: themeSlice,
  },
});

export default store;
