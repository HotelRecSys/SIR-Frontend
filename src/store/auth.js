import { createSlice } from "@reduxjs/toolkit";

const authentication = createSlice({
  name: "authentication",
  initialState: {
    user: [],
    token: null,
    loading: false,
    error: null,
  },
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginReceive: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.loading = false;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error =
        action.payload?.response?.response || action.payload.message;
    },
    logoutReceive: (state) => {
      state.user = null;
      state.token = null;
      state.loading = false;
    },
  },
});
export default authentication.reducer;
export const {
  loginFailure,
  loginReceive,
  loginRequest,
  logoutReceive
} = authentication.actions;

export const login = (userData) =>
  apiCallBegan({
    //url: api.auth.login.url, (api endpointi buraya gelecek)
    data: userData,
    onStart: loginRequest.type,
    onSuccess: loginReceive.type,
    onError: loginFailure.type,
  });
export const logout = () =>
  apiCallBegan({
    // url: api.auth.logout.url, (api logout linki buraya gelecek)
    onSuccess: logoutReceive.type,
  });
