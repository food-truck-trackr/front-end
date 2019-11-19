// Action Types
import * as types from "./AuthenticationTypes";
import axiosWithAuth from "../utils/AxiosWithAuth";

export const register = (values, history) => dispatch => {
  axiosWithAuth()
    .post("", values)
    .then(dispatch({ type: types.REGISTRATION_SUCCESS }))
    .catch(error => {
      console.log("nope");
      console.error(error);
    });
};

// store token and get user data for subsequent actions
export const login = (userData, history) => dispatch => {
  axiosWithAuth()
    .post("", userData)
    .then(res => {
      localStorage.setItem("token", res.data.payload);
      dispatch({ type: types.LOGIN_SUCCESS, payload: res });
      history.push("");
    })
    .catch(err => dispatch({ type: types.LOGIN_FAIL, payload: err }));
};

export const logout = () => dispatch => {
  localStorage.clear();
  dispatch({ type: types.LOGOUT });
};
