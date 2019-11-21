// Action Types
import { GET_CURRENT_LOCATION, ADD_FAVORITE } from "./DinerTypes";

export const getCurrentLocation = position => {
  return { type: GET_CURRENT_LOCATION, payload: position };
};

export const addFavorite = () => {
  return { type: ADD_FAVORITE };
};
