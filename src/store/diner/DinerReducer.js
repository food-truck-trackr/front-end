import { SET_LOCATION, GET_CURRENT_LOCATION, ADD_FAVORITE } from "./DinerTypes";

const dinerInitialState = {
  role: "diner",
  currentLocation: {
    lat: 0,
    lng: 0
  },
  favoriteTrucks: []
};

export const dinerReducer = (state = dinerInitialState, action) => {
  switch (action.type) {
    case GET_CURRENT_LOCATION:
      return {
        ...state,
        currentLocation: action.payload
      };

    case SET_LOCATION:
      return {
        ...state,
        currentLocation: {
          lat: action.payload.lat,
          lng: action.payload.lng
        }
      };

    case ADD_FAVORITE:
      return {
        // action.payload is truck object
        ...state,
        favoriteTrucks: [...state.favoriteTrucks, action.payload]
      };

    default:
      return state;
  }
};
