// Libraries
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Reducers
import { authenticationReducer } from "./authentication/AuthenticationReducer";
import { dinerReducer } from "./diner/DinerReducer";
import { operatorReducer } from "./operator/OperatorReducer";

//
const combinedReducers = combineReducers({
  auth: authenticationReducer,
  diner: dinerReducer,
  operator: operatorReducer
});

const store = createStore(
  combinedReducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
