import axios from "axios";
import { apiCallBegan, apiCallFailed, apiCallSuccess } from "../api";
//import { API_URL } from '../../config/variable'; //domain adresi
//import { loggedOut } from '../auth'; //authentication logout

const convertFormData = (data) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    formData.append(key, data[key]);
  });
  return formData;
};

// eslint-disable-next-line consistent-return
const api = ({ dispatch, getState }) => (next) => async (action) => {
  if (action.type === apiCallFailed.type) {
    const { status } = action.payload;
    // if (status === 401) { dispatch({ type: loggedOut.type }); }
    return next(action);
  }
  if (action.type !== apiCallBegan.type) {
    return next(action);
  }
  const {
    url,
    method = "POST",
    data,
    params,
    type,
    onError,
    onSuccess,
    onStart,
    ...props
  } = action.payload;
  const store = getState();
  if (onStart) {
    dispatch({
      type: onStart,
      payload: { login: true },
      data,
      params,
    });
  }
  next(action);
  try {
    const response = await axios({
      baseURL: "http://localhost:3100",
      // baseURL: API_URL, //domian adresi yukarıdaki import edildiğinde bu çalıştırılacak
      url,
      method,
      data: type === "form-data" ? convertFormData(data) : data,
      params,
      headers: {
        Authorization: store.auth.token ? `Token ${store.auth.token}` : "",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      ...props,
    });
    dispatch(apiCallSuccess(response.data));
    if (onSuccess) {
      dispatch({
        type: onSuccess,
        payload: response.data,
        data,
        params,
      });
    }
  } catch (error) {
    dispatch(
      apiCallFailed({
        message: error?.message || "",
        status: error?.response?.status || 0,
      })
    );
    if (onError) {
      dispatch({
        type: onError,
        payload: {
          message: error?.message,
          response: error?.response?.data,
          data: error,
        },
        data,
        params,
      });
    }
  }
};
export default api;
