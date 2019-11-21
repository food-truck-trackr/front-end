import React from "react";
import Navigation from "./Navigation";
import Logo from "./../assets/logo-name.png";

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="logo" className="logo" />
      <Navigation />
      {/* <nav>
        <Link to="/saved">My Favorites</Link>
      </nav> */}
    </header>
  );
};

export default Header;
