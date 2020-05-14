import React from "react";
import { Link } from "react-router-dom";
const NavbarComponent = () => {
  return (
    <div className="container">
      <ul className="navbarcss">
        <img
          className="logodocgroup"
          src="https://covid-19.tn/wp-content/uploads/2019/09/logosFRofficiel-small.png"
          alt="Minister de santer"
        />
        <div className="menu-items">
          <Link id="Login" to="/Login">
            Login
          </Link>
        </div>
      </ul>
    </div>
  );
};
export default NavbarComponent;
