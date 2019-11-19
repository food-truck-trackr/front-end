import React from "react";

import {Switch, Link, Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import Registration from "./components/userAuthentication/Registration";
import Login from "./components/userAuthentication/Login";
import PrivateRoute from "./utils/PrivateRoute";

import AddTruckForm from './components/operator/AddTruckForm';
import MenuForm from './components/operator/MenuForm';


function App() {
  // const logout = () => {
  //   dispatch({ type: LOGOUT });
  // };

  return (
    <div className="App">
      <Navigation />
      <Route path="/Registration" component={Registration} />
      <Route path="/Login" component={Login} />
      <Route path="/AddTruckForm" component={AddTruckForm} />
      <Route path="/MenuForm" component={MenuForm} />
      <Switch>
        <PrivateRoute path="/dinerdash" />
        <PrivateRoute path="/operatordash" />
      </Switch>
    </div>
  );
}

export default App;
