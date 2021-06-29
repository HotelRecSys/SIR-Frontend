import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan, apiCallFailed, apiCallSuccess } from "./api";
import {API_URL} from '../config/api.json';

import axios from "axios";

const authentication = createSlice({
  name: "authentication",
  initialState: {
    user: null,
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
      state.user = action.payload;
      state.loading = false;
      state.error = null;
      state.isLoggedIn = true;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error =
        action.payload?.response?.message || action.payload.message;
    },
    logoutReceive: (state) => {
      state.user = null;
      state.loading = false;
      state.isLoggedIn = false;
    },
    logoutError: (state, action) => {
      console.log(action)
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
        action.payload?.response.message || action.payload.message;
    },
    updateRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateReceive: (state, action) => {
      state.message = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateFailure: (state, action) => {
      state.loading = false;
      state.error =
        action.payload?.response.message || action.payload.message;
    },
  },
});
export default authentication.reducer;
export const {
  loginFailure,
  loginReceive,
  loginRequest,
  logoutReceive,
  logoutError,
  registerFailure,
  registerReceive,
  registerRequest,
  updateRequest,
  updateReceive,
  updateFailure
} = authentication.actions;

export const login = (userData)  => 
  apiCallBegan({
    url: `${API_URL}/login`,
    data: userData,
    onStart: loginRequest.type,
    onSuccess: loginReceive.type,
    onError: loginFailure.type,
  });

export const logout = () =>
  apiCallBegan({
    url: `${API_URL}/logout`,
    method: 'GET',
    onSuccess: logoutReceive.type,
    onError: logoutError.type
  });

export const register = (userData)  => 
  apiCallBegan({
    url: `${API_URL}/register`,
    data: userData,
    onStart: registerRequest.type,
    onSuccess: registerReceive.type,
    onError: registerFailure.type,
  });

  export const update = (userData)  => 
  apiCallBegan({
    url: `${API_URL}/update`,
    data: userData,
    onStart: updateRequest.type,
    onSuccess: updateReceive.type,
    onError: updateFailure.type,
  });