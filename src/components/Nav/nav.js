import React from "react";
import { Link } from "react-router-dom";

import "./nav.css";

const Nav = () => {
  return (
    <div className="nav-container">
      <Link className="nav-logo" to="/Portfolio-Concept">
        A
      </Link>
      <Link className="nav-link" to="/Portfolio-Concept/work">
        Work
      </Link>
    </div>
  );
};

export default Nav;
