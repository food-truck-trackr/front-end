// Action Types
import { SUCCESS, LOGOUT } from "./AuthenticationTypes";
import axiosWithAuth from "./../../utils/AxiosWithAuth";

export const register = (values, history) => dispatch => {
  axiosWithAuth()
    .post("", values)
    .then(dispatch({ type: SUCCESS }))
    .catch(error => {
      console.log("nope");
      console.error(error);
    });
};

// store token and get user data for subsequent actions
export const login = role => {
  return { type: SUCCESS, payload: role };
};

export const logout = () => dispatch => {
  localStorage.clear();
  dispatch({ type: LOGOUT });
};
