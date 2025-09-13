import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUserSignin, IUserSignup } from "../types/authType";
import { ICreateRecipe, IRecipe } from "../types/recipeType";

const BASE_URL_BACKEND = import.meta.env.VITE_BASE_URL_BACKEND;

export const axiosInstance = axios.create({
  baseURL: BASE_URL_BACKEND,
  withCredentials: true,
});

export const signup = createAsyncThunk(
  "auth/signup",
  async (user: IUserSignup, thunkApi) => {
    try {
      const response = await axiosInstance.post("/auth/signup", user);
      return response.data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  }
);

export const signin = createAsyncThunk(
  "auth/signin",
  async (user: IUserSignin, thunkApi) => {
    try {
      const response = await axiosInstance.post("/auth/signin", user);
      return response.data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  }
);

export const signout = createAsyncThunk("auth/signout", async (_, thunkApi) => {
  try {
    const response = await axiosInstance.post("/auth/signout");
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
});

export const current = createAsyncThunk("auth/current", async (_, thunkApi) => {
  try {
    const response = await axiosInstance.get("/auth/current");
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
});

export const createRecipe = createAsyncThunk(
  "recipe/createRecipe",
  async (recipe: ICreateRecipe, thunkApi) => {
    try {
      const response = await axiosInstance.post("/recipes/create", recipe);
      return response.data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  }
);

export const getMyRecipes = createAsyncThunk<
  IRecipe[],
  { title?: string } | undefined,
  { rejectValue: string }
>("recipe/getMyRecipes", async (params = {}, thunkApi) => {
  try {
    const response = await axiosInstance.get("/recipes/my", {
      params,
    });
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
});

export const getAllRecipes = createAsyncThunk<
  IRecipe[],
  { title?: string } | undefined,
  { rejectValue: string }
>("recipe/getAllRecipes", async (params = {}, thunkApi) => {
  try {
    const response = await axiosInstance.get("/recipes", {
      params,
    });
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
});

export const addRating = createAsyncThunk(
  "rating/addRating",
  async (values: { value: number; recepId: number }, thunkApi) => {
    try {
      const response = await axiosInstance.post(`/ratings/${values.recepId}`, {
        value: values.value,
      });
      response.data.recepId = values.recepId;
      return response.data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  }
);
