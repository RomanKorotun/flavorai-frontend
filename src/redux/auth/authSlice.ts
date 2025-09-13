import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { signin, signout, signup, current } from "../api";
import {
  IAuthResponse,
  IAuthState,
  IResponseCurrent,
} from "../../types/authType";

const initialState: IAuthState = {
  username: null,
  email: null,
  isLoggedIn: false,
  isRefreshing: false,
  loading: false,
  error: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(signup.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(
        signup.fulfilled,
        (state, action: PayloadAction<IAuthResponse>) => {
          state.loading = false;
          state.isLoggedIn = true;
          state.username = action.payload.user.userName;
          state.email = action.payload.user.email;
        }
      )
      .addCase(signup.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(signin.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(
        signin.fulfilled,
        (state, action: PayloadAction<IAuthResponse>) => {
          state.loading = false;
          state.isLoggedIn = true;
          state.username = action.payload.user.userName;
          state.email = action.payload.user.email;
        }
      )
      .addCase(signin.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(signout.pending, (state) => {
        state.loading = true;
      })
      .addCase(signout.fulfilled, (state) => {
        state.loading = false;
        state.isLoggedIn = false;
        state.username = null;
        state.email = null;
      })
      .addCase(current.pending, (state) => {
        state.error = false;
        state.isRefreshing = true;
      })
      .addCase(
        current.fulfilled,
        (state, action: PayloadAction<IResponseCurrent>) => {
          state.isRefreshing = false;
          state.isLoggedIn = true;
          state.username = action.payload.userName;
          state.email = action.payload.email;
        }
      )
      .addCase(current.rejected, (state) => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.username = null;
        state.email = null;
      }),
});

export const authReducer = authSlice.reducer;
