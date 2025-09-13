import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addRating, getAllRecipes, getMyRecipes } from "../api";
import { IRecipe, RecipeState } from "../../types/recipeType";

const initialState: RecipeState = {
  recipes: [],
  loading: false,
  error: false,
};

const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        getMyRecipes.fulfilled,
        (state, action: PayloadAction<IRecipe[]>) => {
          state.recipes = action.payload;
        }
      )
      .addCase(
        getAllRecipes.fulfilled,
        (state, action: PayloadAction<IRecipe[]>) => {
          state.recipes = action.payload;
        }
      )
      .addCase(
        addRating.fulfilled,
        (state, action: PayloadAction<{ recepId: number; rating: number }>) => {
          const { recepId, rating } = action.payload;
          const recipeToUpdate = state.recipes.find((r) => r.id === recepId);
          if (recipeToUpdate) {
            recipeToUpdate.rating = rating;
          }
        }
      );
  },
});

export const recipeReducer = recipeSlice.reducer;
