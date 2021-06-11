import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan, apiCallFailed, apiCallSuccess } from "./api";
import {API_URL} from '../config/api.json';
import axios from "axios";

const otels = createSlice({
  name: "otels",
  initialState: {
    otels: [],
    topHotels: [],
    searchedHotels: [],
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
      state.searchedHotels =[] 
    },
    topHotelsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    topHotelsReceive: (state, action) => {
      state.topHotels = action.payload;
      state.loading = false;
      state.error = null;
    },
    topHotelsFailure: (state, action) => {
      state.loading = false;
      state.error =
        action.payload?.response?.message || action.payload.message;
    },
    searchRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    searchReceive: (state, action) => {
      state.searchedHotels = action.payload;
      state.loading = false;
      state.error = null;
    },
    searchFailure: (state, action) => {
      state.loading = false;
      state.error =
        action.payload?.response?.message || action.payload.message;
    },
    filterRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    filterReceive: (state, action) => {
      state.searchedHotels = action.payload;
      state.loading = false;
      state.error = null;
    },
    filterFailure: (state, action) => {
      state.loading = false;
      state.error =
        action.payload?.response?.message || action.payload.message;
    },
  },
});
export default otels.reducer;
export const {
    countryFilterRequest,
    countryFilterReceive,
    countryFilterFailure,
    otelReceive,
    topHotelsRequest,
    topHotelsReceive,
    topHotelsFailure,
    searchRequest,
    searchReceive,
    searchFailure,
    filterRequest,
    filterReceive,
    filterFailure
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

export const getTopHotels = ()  => 
  apiCallBegan({
    url: `${API_URL}/top-ten`,
    onStart: topHotelsRequest.type,
    onSuccess: topHotelsReceive.type,
    onError: topHotelsFailure.type,
});

export const search = (searchWord)  => 
  apiCallBegan({
    url: `${API_URL}/search`,
    data: searchWord,
    onStart: searchRequest.type,
    onSuccess: searchReceive.type,
    onError: searchFailure.type,
});

export const filter = (filters)  => 
  apiCallBegan({
    url: `${API_URL}/filter`,
    data: filters,
    onStart: filterRequest.type,
    onSuccess: filterReceive.type,
    onError: filterFailure.type,
});

