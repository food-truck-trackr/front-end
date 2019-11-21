import * as types from "./OperatorTypes";

const operatorInitialState = {
  role: "operator",
  trucksOwned: [
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
  ],
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

    // case types.ADD_EDITED_TRUCK:
    //   return {
    //     isEditing: false
    //     //action.payload is truck object that is being edited
    //     // map over array of trucks to find truck that matches
    //     //change that truck's values to the edited values & set
    //   };

    case types.DELETE_TRUCK:
      return {
        ...state,
        trucksOwned: state.trucksOwned.filter(truck => {
          return truck.id !== action.payload;
        })
      };

    // case types.ADD_TRUCK_RATING:
    //   return {
    //     //map over and find truck with correct id
    //     //add rating to array of ratings
    //     //array.reduce to find the average
    //     //update customerRatingsAvg
    //   };

    // case types.ADD_MENU_ITEM_RATING:
    //   return {
    //     //map over and find truck with correct id
    //     //map over that truck's menu array and find the menu item with the same name
    //     //add rating to array of ratings
    //     //array.reduce to find the average
    //     //update customerRatingsAvg
    //   };

    default:
      return state;
  }
};
