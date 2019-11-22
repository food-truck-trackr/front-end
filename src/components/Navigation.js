import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/authentication/AuthenticationActions";
//import { Animated } from "react-animate-css";
// import { slideInLeft } from "animate.css";

const Navigation = props => {
  return (
    <div className="navigation">
      <div className="links-div">
        <div className="animate">
          <a
            href="https://foodtruck-trackr-marketing.netlify.com/"
            className="links"
          >
            Home
          </a>
        </div>
        {!props.isAuthenticated && (
          <>
            <div>
              <Link className="links" to="/">
                Login
              </Link>
            </div>
            <div>
              <Link className="links" to="/Registration">
                Register
              </Link>
            </div>
          </>
        )}

        {props.role === "diner" && (
          <Link to="/saved" className="links">
            Favorite Trucks
          </Link>
        )}
        {/* <div>
          <Link to="/AddTruckForm">Temp Link to Operator Add Truck Form</Link>
        </div>
        <div>
          <Link to="/MenuForm">Temp Link to Operator Menu Form</Link>
        </div> */}
        {props.isAuthenticated && (
          <a
            className="links"
            href="https://foodtruck-trackr-marketing.netlify.com/"
            onClick={props.logout}
          >
            Logout
          </a>
        )}
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

export default connect(mapStateToProps, { logout })(Navigation);
