import {
  SET_LOCATION,
  GET_CURRENT_LOCATION,
  ADD_FAVORITE,
  REMOVE_FAVORITE
} from "./DinerTypes";

const dinerInitialState = {
  role: "diner",
  currentLocation: {
    lat: 0,
    lng: 0
  },
  favoriteTrucks: [
    {
      truckName: "Rasha's Truck",
      id: 1,
      cuisine: "Kanafe",
      currentLocation: {
        lat: 39.948407,
        lng: -75.248537,
        departureTime: 0
      },
      nextLocation: {
        lat: 39.949392,
        lng: -75.166187,
        arrivalTime: 0
      },
      img: "",
      truckRating: 4,
      truckMenu: [
        {
          item: "Knafe small",
          description: "baby k",
          price: "$5",
          rating: 4.5
        },
        {
          item: "Kanefe big",
          description: "daddy k",
          price: "$7",
          rating: 3
        }
      ]
    },

    {
      truckName: "Mara's Comfort Food Truck",
      id: 2,
      cuisine: "Good shit",
      currentLocation: {
        lat: 39.942221,
        lng: -75.286781,
        departureTime: 0
      },
      nextLocation: {
        lat: 39.954716,
        lng: -75.168503,
        arrivalTime: 0
      },
      img: "",
      truckRating: 3,
      truckMenu: [
        {
          item: "Mac n Cheese",
          description: "yummy mac n cheese",
          price: "$4",
          rating: 4
        },
        {
          item: "Burger",
          description: "yummy berjer",
          price: "$5",
          rating: 5
        }
      ]
    },
    {
      truckName: "Rasha's Shawarma",
      id: 3,
      cuisine: "Shawarma for dayz",
      currentLocation: {
        lat: 39.957495,
        lng: -75.177545,
        departureTime: 0
      },
      nextLocation: {
        lat: 39.953251,
        lng: -75.178541,
        arrivalTime: 0
      },
      img: "",
      truckRating: 4,
      truckMenu: [
        {
          item: "Knafe small",
          description: "baby k",
          price: "$5",
          rating: 4.5
        },
        {
          item: "Kanefe big",
          description: "daddy k",
          price: "$7",
          rating: 3
        }
      ]
    },
    {
      truckName: "Mara's Comfort Food Truck",
      id: 4,
      cuisine: "Comfort food",
      currentLocation: {
        lat: 39.957279,
        lng: -75.182457,
        departureTime: 0
      },
      nextLocation: {
        lat: 39.948407,
        lng: -75.248537,
        arrivalTime: 0
      },
      img: "",
      truckRating: 3,
      truckMenu: [
        {
          item: "Mac n Cheese",
          description: "yummy mac n cheese",
          price: "$4",
          rating: 4
        },
        {
          item: "Burger",
          description: "yummy berjer",
          price: "$5",
          rating: 5
        }
      ]
    },
    {
      truckName: "Rasha's Knafe Truck",
      id: 5,
      cuisine: "Kanafe",
      currentLocation: {
        lat: 39.957424,
        lng: -75.19188,
        departureTime: 0
      },
      nextLocation: {
        lat: 39.956725,
        lng: -75.20612,
        arrivalTime: 0
      },
      img: "",
      truckRating: 4,
      truckMenu: [
        {
          item: "Knafe small",
          description: "baby k",
          price: "$5",
          rating: 4.5
        },
        {
          item: "Kanefe big",
          description: "daddy k",
          price: "$7",
          rating: 3
        }
      ]
    }
  ]
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

    case REMOVE_FAVORITE:
      return {
        ...state,
        favoriteTrucks: state.favoriteTrucks.filter(truck => {
          return truck.id !== action.payload;
        })
      };

    default:
      return state;
  }
};
