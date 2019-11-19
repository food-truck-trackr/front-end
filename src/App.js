import React from "react";
import { Switch, Link } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  // const logout = () => {
  //   dispatch({ type: LOGOUT });
  // };

  return (
    <div className="App">
      <header>
        <h1>Food Truck Trackr</h1>
        <nav>
          <ul>
            {/* {loggedIn && <Link to="/" onClick={logout}>
              <li>Logout</li>
            </Link>}            */}
          </ul>
        </nav>
      </header>
      <div>Login Form</div>
      <Switch>
        <PrivateRoute path="/dinerdash" />
        <PrivateRoute path="/operatordash" />
      </Switch>
    </div>
  );
}

export default App;
