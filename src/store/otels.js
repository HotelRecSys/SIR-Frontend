import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan, apiCallFailed, apiCallSuccess } from "./api";
import {API_URL} from '../config/api.json';
import axios from "axios";

const otels = createSlice({
  name: "otels",
  initialState: {
    otels: [],
    loading: false,
    error: null,
    message: null,
  },
  reducers: {
    countryFilterRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    countryFilterReceive: (state, action) => {
      state.otels = state.otels.concat(action.payload);
      state.loading = false;
      state.error = null;
    },
    countryFilterFailure: (state, action) => {
      state.loading = false;
      state.error =
        action.payload?.response?.message || action.payload.message;
    },
    otelReceive: (state) => {
      state.otels = []
    }
  },
});
export default otels.reducer;
export const {
    countryFilterRequest,
    countryFilterReceive,
    countryFilterFailure,
    otelReceive
  
} = otels.actions;

export const countryFilter = (countryData)  => 
  apiCallBegan({
    url: `${API_URL}/country-filter`,
    data: countryData,
    onStart: countryFilterRequest.type,
    onSuccess: countryFilterReceive.type,
    onError: countryFilterFailure.type,
  });

  export const clearHotel = () => (dispatch) => {
    dispatch({ type: otelReceive });
  };