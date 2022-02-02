import React from "react";

import { ReactComponent as CocaCola } from "../../assets/svgs/coca-cola.svg";
import { ReactComponent as Facebook } from "../../assets/svgs/facebook.svg";
import { ReactComponent as Shopify } from "../../assets/svgs/shopify.svg";
import { ReactComponent as Microsoft } from "../../assets/svgs/microsoft.svg";

import "./experience.css";

const Experience = () => {
  return (
    <div className="experience-container">
      <div className="experience-stats">
        <div className="stats-card">
          <p className="stats-number">6</p>
          <p className="stats-desc">years of experience</p>
        </div>
        <div className="stats-card">
          <p className="stats-number">14</p>
          <p className="stats-desc">businesses worked with</p>
        </div>
        <div className="stats-card">
          <p className="stats-number">32</p>
          <p className="stats-desc">freelance projects</p>
        </div>
      </div>
      <div className="experience-brands">
        <CocaCola className="brand coca-cola" />
        <Facebook className="brand facebook" />
        <Shopify className="brand shopify" />
        <Microsoft className="brand microsoft" />
      </div>
    </div>
  );
};

export default Experience;
