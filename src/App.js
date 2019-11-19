import React from "react";

import {Switch, LinkRoute} from "react-router-dom";
import Navigation from "./components/Navigation";
import Registration from "./components/userAuthentication/Registration";
import Login from "./components/userAuthentication/Login";
import PrivateRoute from "./utils/PrivateRoute";


function App() {
  // const logout = () => {
  //   dispatch({ type: LOGOUT });
  // };

  return (
    <div className="App">
      <Navigation />
      <Route path="/Registration" component={Registration} />
      <Route path="/Login" component={Login} />
      <Switch>
        <PrivateRoute path="/dinerdash" />
        <PrivateRoute path="/operatordash" />
      </Switch>
    </div>
  );
}

export default App;
