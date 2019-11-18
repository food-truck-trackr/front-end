import * as types from "./DinerTypes";

const dinerInitialState = {
  role: "diner",
  currentLocation: {
    lat: 0,
    lng: 0
  },
  favoriteTrucks: []
};

export const DinerReducer = (state = dinerInitialState, action) => {
  switch (action.type) {
    case types.CHANGE_LOCATION:
      return {
        ...state,
        currentLocation: {
          lat: action.payload.lat,
          lng: action.payload.lng
        }
      };

    case types.ADD_FAVORITE:
      return {
        // action.payload is truck object
        ...state,
        favoriteTrucks: [...state.favoriteTrucks, action.payload]
      };

    default:
      return state;
  }
};
