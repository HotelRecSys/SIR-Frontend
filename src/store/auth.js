import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan, apiCallFailed, apiCallSuccess } from "./api";
import axios from "axios";

const authentication = createSlice({
  name: "authentication",
  initialState: {
    user: [],
    loading: false,
    error: null,
    message: null,
    isLoggedIn: false
  },
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginReceive: (state, action) => {
      state.user = action.payload.user;
      state.loading = false;
      state.error = null;
      state.isLoggedIn = true;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error =
        action.payload?.response?.response || action.payload.message;
    },
    logoutReceive: (state) => {
      state.user = null;
      state.loading = false;
      state.isLoggedIn = false;
    },
    registerRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    registerReceive: (state, action) => {
      state.message = action.payload;
      state.loading = false;
      state.error = null;
    },
    registerFailure: (state, action) => {
      state.loading = false;
      state.error =
        action.payload?.response || action.payload;
    },
  },
});
export default authentication.reducer;
export const {
  loginFailure,
  loginReceive,
  loginRequest,
  logoutReceive,
  registerFailure,
  registerReceive,
  registerRequest,
} = authentication.actions;

export const login = (userData)  => 
  apiCallBegan({
    url: "http://0.0.0.0:5000/login",
    data: userData,
    onStart: loginRequest.type,
    onSuccess: loginReceive.type,
    onError: loginFailure.type,
  });

export const logout = () =>
  apiCallBegan({
    url: "http://0.0.0.0:5000/logout",
    onSuccess: logoutReceive.type,
  });

export const register = (userData)  => 
  apiCallBegan({
    url: "http://0.0.0.0:5000/register",
    data: userData,
    onStart: registerRequest.type,
    onSuccess: registerReceive.type,
    onError: registerFailure.type,
  });