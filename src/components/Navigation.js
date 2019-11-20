import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Navigation = props => {
  return (
    <div className="navigation">
      <div className="links">
        <div>
          <a href="https://zen-kirch-818a22.netlify.com/">Home</a>
        </div>
        {!props.isAuthenticated && (
          <>
            <div>
              <Link to="/Login">Login</Link>
            </div>
            <div>
              <Link to="/Registration">Register</Link>
            </div>
          </>
        )}
        {props.role === "diner" && <Link to="/saved">Favorite Trucks</Link>}
        {/* <div>
          <Link to="/AddTruckForm">Temp Link to Operator Add Truck Form</Link>
        </div>
        <div>
          <Link to="/MenuForm">Temp Link to Operator Menu Form</Link>
        </div> */}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    role: state.auth.role,
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(mapStateToProps, {})(Navigation);
