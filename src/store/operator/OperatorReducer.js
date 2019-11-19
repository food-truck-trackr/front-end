import * as types from "./OperatorTypes";

const operatorInitialState = {
  role: "operator",
  trucksOwned: [],
  newTruck: {
    truckName: "",
    truckImage: "",
    cuisineType: "",
    customerRatings: [],
    customerRatingAvg: 0,
    menuItems: [
      {
        menuItem: "",
        itemDescription: "",
        itemPhotos: [],
        itemPrice: 0,
        customerRatings: [],
        customerRatingAvg: 0
      }
    ],
    currentLocation: {
      location: {
        lat: null,
        lng: null
      },
      departureTime: 0
    },
    nextLocation: {
      location: {
        lat: null,
        lng: null
      },
      arrivalTime: 0,
      departureTime: 0
    }
  },
  isEditing: false
};

export const operatorReducer = (state = operatorInitialState, action) => {
  switch (action.type) {
    case types.ADD_TRUCK:
      return {
        ...state,
        newTruck: action.payload,
        trucksOwned: [...state.trucksOwned, state.newTruck]
      };

    case types.ADD_EDITED_TRUCK:
      return {
        isEditing: false
        //action.payload is truck object that is being edited
        // map over array of trucks to find truck that matches
        //change that truck's values to the edited values & set
      };

    case types.DELETE_TRUCK:
      return {
        //filter through array of trucks and return only those that do not match action.payload.id
      };

    case types.ADD_TRUCK_RATING:
      return {
        //map over and find truck with correct id
        //add rating to array of ratings
        //array.reduce to find the average
        //update customerRatingsAvg
      };

    case types.ADD_MENU_ITEM_RATING:
      return {
        //map over and find truck with correct id
        //map over that truck's menu array and find the menu item with the same name
        //add rating to array of ratings
        //array.reduce to find the average
        //update customerRatingsAvg
      };

    default:
      return state;
  }
};
