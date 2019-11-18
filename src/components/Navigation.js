import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <div className="navigation">
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/Registration">Register</Link>
            </div>
            <div>
                <Link to="/Login">Login</Link>
            </div>
            </div>
        </div>
    );
};

export default Navigation;