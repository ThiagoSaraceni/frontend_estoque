import { configureStore } from "@reduxjs/toolkit";
import estoqueReducer from "./estoqueSlice";

export default configureStore({
  reducer: {
    estoque: estoqueReducer,
  },
});
