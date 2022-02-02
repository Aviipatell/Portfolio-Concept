import React from "react";
import { Link } from "react-router-dom";

import Nav from "../../components/Nav/nav";
import Experience from "../../components/Experience/experience";
import ProjectLink from "../../components/ProjectLink/projectLink";
import Footer from "../../components/Footer/footer";

import AthenaProfile from "../../assets/images/athena-profile.jpg";

import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero">
        <div className="hero-left">
          <Nav />
          <div className="hero-content">
            <h1 className="hero-title">
              Hi, I'm <span className="title-mod">Athena!</span>
            </h1>
            <p className="hero-tagline">
              Professional designer, illustrator and developer.
            </p>
            <p className="hero-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="hero-buttons">
              <Link className="button accent-button hero-connect-button" to="/">
                Get in touch!
              </Link>
              <Link className="button hero-work-button" to="/work">
                See my work!
              </Link>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="right-container">
            <div className="hero-image-container">
              <img className="hero-image" src={AthenaProfile} alt="" />
            </div>
            <button className="hero-view-more">View more</button>
          </div>
        </div>
      </div>
      <Experience />
      <div className="projects">
        <div className="projects-head">
          <h2>Featured Projects</h2>
        </div>
        <div className="projects-list">
          <ProjectLink
            projectName="facebook logo and brand redesign"
            projectLink=""
            projectImage=""
          />
          <ProjectLink
            projectName="microsoft promotional campaign lead"
            projectLink=""
            projectImage=""
          />
          <ProjectLink
            projectName="shopify website redesign"
            projectLink=""
            projectImage=""
          />
          <ProjectLink
            projectName="nexus lead illustrator and web designer"
            projectLink=""
            projectImage=""
          />
          <ProjectLink
            projectName="bridges to university creative director"
            projectLink=""
            projectImage=""
          />
        </div>
      </div>
      <div className="contact">
        <div className="contact-head">
          <h2>Contact</h2>
        </div>
        <div className="contact-details">
          <p>Phone: xxx-xxx-xxxx</p>
          <p>Based in: Ontario, Canada</p>
          <p>Email: hello@athenaowens.com</p>
          <Link className="button accent-button contact-connect-button" to="/">
            Get in touch!
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
