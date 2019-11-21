import React from "react";
import { Switch, Route } from "react-router-dom";
import Registration from "./components/userAuthentication/Registration";
import Login from "./components/userAuthentication/Login";
import PrivateRoute from "./utils/PrivateRoute";
import DinerDashboard from "./components/diner/DinerDashboard";
import FavoriteTrucks from "./components/diner/FavoriteTrucks";
import Truck from "./components/trucks/Truck";
import AddTruckForm from "./components/operator/AddTruckForm";
import MenuForm from "./components/operator/MenuForm";
import Header from "./components/Header";
import OperatorDashboard from "./components/operator/OperatorDashboard";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/Registration" component={Registration} />
      <Route exact path="/Login" component={Login} />
      <Route path="/AddTruckForm" component={AddTruckForm} />
      <Route path="/MenuForm" component={MenuForm} />
      <Route path="/OperatorDashboard" component={OperatorDashboard} />
      <Switch>
        <Route path="/dinerdash" component={DinerDashboard} />
        <PrivateRoute path="/operatordash" component={OperatorDashboard} />
        <Route exact path="/saved" component={FavoriteTrucks} />
        <Route path="/truck/:id" component={Truck} />
      </Switch>
    </div>
  );
}

export default App;
