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
      console.log("LOADİNG")
      state.loading = true;
      state.error = null;
    },
    countryFilterReceive: (state, action) => {
      console.log("PAYLOAD ",action.payload.length)
      state.otels = state.otels.concat(action.payload);
      console.log(state.otels.length)
      state.loading = false;
      state.error = null;
    },
    countryFilterFailure: (state, action) => {
      console.log("action", action.payload)
      state.loading = false;
      state.error =
        action.payload?.response?.response || action.payload.message;
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