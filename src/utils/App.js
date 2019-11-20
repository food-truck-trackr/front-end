import React from "react";
import { Switch, Link } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import DinerDashboard from "../components/diner/DinerDashboard";

function App() {
  // const logout = () => {
  //   dispatch({ type: LOGOUT });
  // };

  return (
    <div className="App">
      <header className="header">
        <h1>Food Truck Trackr</h1>
        {/* <nav>
          <ul>
            {loggedIn && <Link to="/" onClick={logout}>
              <li>Logout</li>
            </Link>}           
          </ul>
        </nav> */}
      </header>
      {/* <div>Login Form</div> */}
      <DinerDashboard />
      <Switch>
        <PrivateRoute path="/dinerdash" component={DinerDashboard} />
      </Switch>
    </div>
  );
}

export default App;
