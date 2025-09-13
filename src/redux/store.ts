import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { recipeReducer } from "./recipe/recipeSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    recipe: recipeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
