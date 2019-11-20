import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="links">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/Registration">Register</Link>
      </div>
      <div>
        <Link to="/Login">Login</Link>
      </div>
      <div>
        <Link to="/AddTruckForm">Temp Link to Operator Add Truck Form</Link>
      </div>
      <div>
        <Link to="/MenuForm">Temp Link to Operator Menu Form</Link>
      </div>
      </div>
    </div>
  );
};

export default Navigation;
