import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/CartSlice";
import cartUiSlice from "../features/CartUiSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        cartUi: cartUiSlice.reducer,
    },
});

export default store;