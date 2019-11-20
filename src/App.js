import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Registration from "./components/userAuthentication/Registration";
import Login from "./components/userAuthentication/Login";
import PrivateRoute from "./utils/PrivateRoute";
import DinerDashboard from "./components/diner/DinerDashboard";
import FavoriteTrucks from "./components/diner/FavoriteTrucks";
import Truck from "./components/trucks/Truck";
import TruckFormLocation from "./components/operator/TruckFormLocation";

function App() {
  // const logout = () => {
  //   dispatch({ type: LOGOUT });
  // };

  return (
    <div className="App">
      {/* <DinerDashboard /> */}
      <Navigation />
      <Route exact path="/Registration" component={Registration} />
      <Route exact path="/Login" component={Login} />
      <Switch>
        <PrivateRoute path="/dinerdash" component={DinerDashboard} />
        <PrivateRoute exact path="/saved" component={FavoriteTrucks} />
        <Route path="/truck/:id" render={props => <Truck {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
