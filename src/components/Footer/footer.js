import React from "react";
import { Link } from "react-router-dom";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        Designed and developed by{" "}
        <a className="profileLink" target="_blank" rel="noreferrer" href="http://avipatel.me">
          Avi Patel
        </a>
      </p>
      <div className="footer-links-container">
        <Link to="/" className="footer-link">
          Home
        </Link>
        <Link to="/work" className="footer-link">
          Work
        </Link>
      </div>
    </div>
  );
};

export default Footer;
