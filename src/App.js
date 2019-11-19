import React from "react";
import {Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import Registration from "./components/userAuthentication/Registration";
import Login from "./components/userAuthentication/Login";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Route path="/Registration" component={Registration} />
      <Route path="/Login" component={Login} />
    </div>
  );
}

export default App;
