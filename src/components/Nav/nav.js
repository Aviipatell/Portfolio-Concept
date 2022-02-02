import React from "react";
import { Link } from "react-router-dom";

import "./nav.css";

const Nav = () => {
  return (
    <div className="nav-container">
      <Link className="nav-logo" to="/">
        A
      </Link>
      <Link className="nav-link" to="/work">
        Work
      </Link>
    </div>
  );
};

export default Nav;
