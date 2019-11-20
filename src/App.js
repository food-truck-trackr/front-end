import React from "react";
import { Switch, Link, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Registration from "./components/userAuthentication/Registration";
import Login from "./components/userAuthentication/Login";
import PrivateRoute from "./utils/PrivateRoute";
import DinerDashboard from "./components/diner/DinerDashboard";
import AddTruckForm from './components/operator/AddTruckForm';
import MenuForm from './components/operator/MenuForm';

function App() {
  // const logout = () => {
  //   dispatch({ type: LOGOUT });
  // };

  return (
    <div className="App">
      <DinerDashboard />
      <Navigation />
      <Route path="/Registration" component={Registration} />
      <Route path="/Login" component={Login} />
      <Route path="/AddTruckForm" component={AddTruckForm} />
      <Route path="/MenuForm" component={MenuForm} />
      <Switch>
        <PrivateRoute path="/dinerdash" component={DinerDashboard} />
      </Switch>
    </div>
  );
}

export default App;
