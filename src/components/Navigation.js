import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/authentication/AuthenticationActions";

const Navigation = props => {
  return (
    <div className="navigation">
      <div className="links-div">
        <div className="animate">
          <a
            href="https://foodtruck-trackr-marketing.netlify.com/"
            className="links"
            id="home"
          >
            <img id="logo-home" src="logo-home.png"></img>
          </a>
        </div>
        {!props.isAuthenticated && (
          <>
            <div>
              <Link className="links" id="login" to="/" > 
                <img id="logo-login" src="logo-login.png"></img>
              </Link>
            </div>
            <div>
              <Link className="links" id="registration" to="/Registration">
                <img id="logo-register" src="logo-register.png"></img>
              </Link>
            </div>
          </>
        )}

        {props.role === "diner" && (
          <Link to="/saved" className="links">
            Favorite Trucks
          </Link>
        )}
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
