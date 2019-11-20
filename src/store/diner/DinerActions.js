// Action Types
import { SET_LOCATION, GET_CURRENT_LOCATION, ADD_FAVORITE } from "./DinerTypes";
import axiosWithAuth from "./../../utils/AxiosWithAuth";

export const getCurrentLocation = position => {
  return { type: GET_CURRENT_LOCATION, payload: position };
};
