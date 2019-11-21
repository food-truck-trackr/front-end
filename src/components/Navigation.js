import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
//import { Animated } from "react-animate-css";
import { slideInLeft } from "animate.css"

const Navigation = props => {
  return (
    <div className="navigation">
      <div className="links-div">
        <div className="animate">
          <a href="https://zen-kirch-818a22.netlify.com/" className="links">Home</a>
        </div>
        {!props.isAuthenticated && (
          <>
            <div>
              <Link className="links" to="/Login">Login</Link>
            </div>
            <div>
              <Link className="links" to="/Registration">Register</Link>
            </div>
            <div>
              <Link className="links" to="/OperatorDashboard">Operator</Link>
            </div>
            <div>
              <Link className="links" to="/DinerDashBoard">Diner</Link>
            </div>
          </>
        )}
        {props.role === "diner" && <Link to="/saved">Favorite Trucks</Link>}
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
