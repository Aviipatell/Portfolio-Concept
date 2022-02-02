import React from "react";
import { Link } from "react-router-dom";

import "./projectLink.css";

const ProjectLink = (props) => {
  return (
    <Link to={props.projectLink} className="project-link">
      <h3 className="project-name">{props.projectName}</h3>
      <i className="fas fa-chevron-right project-arrow"></i>
    </Link>
  );
};

export default ProjectLink;
