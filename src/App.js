import React from "react";
import { Switch, Link, Route } from "react-router-dom";
import Registration from "./components/userAuthentication/Registration";
import Login from "./components/userAuthentication/Login";
import PrivateRoute from "./utils/PrivateRoute";
import DinerDashboard from "./components/diner/DinerDashboard";
import FavoriteTrucks from "./components/diner/FavoriteTrucks";
import Truck from "./components/trucks/Truck";
import AddTruckForm from "./components/operator/AddTruckForm";
import MenuForm from "./components/operator/MenuForm";
import Header from "./components/Header";

function App() {
  // const logout = () => {
  //   dispatch({ type: LOGOUT });
  // };

  return (
    <div className="App">
      <Header />
      <Route exact path="/Registration" component={Registration} />
      <Route exact path="/Login" component={Login} />
      <Route path="/AddTruckForm" component={AddTruckForm} />
      <Route path="/MenuForm" component={MenuForm} />
      <Switch>
        <PrivateRoute path="/dinerdash" component={DinerDashboard} />
        <PrivateRoute exact path="/saved" component={FavoriteTrucks} />
        <Route path="/truck/:id" render={props => <Truck {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
