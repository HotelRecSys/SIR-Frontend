import { createSlice } from '@reduxjs/toolkit';

const general = createSlice({
  name: 'general',
  initialState: {
    language: 'tr',
    tabVisible: true,
  },
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setTabVisible: (state, action) => {
      state.tabVisible = action.payload;
    },
  },
});
export default general.reducer;
export const { setLanguage, setTabVisible } = general.actions;

export const updateLanguage = (language) => (dispatch) => {
  dispatch({ type: setLanguage, payload: language });
};

export const updateTabVisible = (visible) => (dispatch) => {
  dispatch({ type: setTabVisible, payload: visible });
};
