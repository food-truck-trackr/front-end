import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/authentication/AuthenticationActions";
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
<<<<<<< HEAD
        {/* <div>
          <Link to="/AddTruckForm">Temp Link to Operator Add Truck Form</Link>
        </div>
        <div>
          <Link to="/MenuForm">Temp Link to Operator Menu Form</Link>
        </div> */}
        {props.isAuthenticated && (
          <a
            href="https://zen-kirch-818a22.netlify.com/"
            onClick={props.logout}
          >
            Logout
          </a>
        )}
=======
>>>>>>> f20b39d63ddb3cd2ab719a84be69167bf29c205a
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
