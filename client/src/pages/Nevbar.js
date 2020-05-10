import React from "react";
import { Link } from "react-router-dom";

const Nevbar = () => {
  return (
    <div>
      <Link id="menu-item" to="/login">
        Login
      </Link>
    </div>
  );
};

export default Nevbar;
