import React from "react";
import { Link } from "react-router-dom";
import "./Nav2.css";

function Nav2(props) {
  const { className } = props;

  return (
    <div className={`nav-3 ${className || ""}`}>
      <div className="navbar-link-container-3">
        <Link to="/about-us">
          <div className="navbar-link-about-us-3 inter-bold-white-18px">About Us</div>
        </Link>
        <Link to="/home">
          <div className="navbar-link-place-3 inter-bold-white-18px">Home</div>
        </Link>
        <Link to="/meet-the-team">
          <div className="navbar-link-meet-the-team-3 inter-bold-white-18px">Meet The Team</div>
        </Link>
        <Link to="/pricing-cost">
          <div className="navbar-link-pricing-cost-3 inter-bold-white-18px">Pricing &amp; Cost</div>
        </Link>
        <Link to="/gallery">
          <div className="navbar-link-gallery-3 inter-bold-white-18px">Gallery</div>
        </Link>
        <Link to="/contact-us">
          <div className="navbar-link-contact-us-3 inter-bold-white-18px">Contact Us</div>
        </Link>
      </div>
    </div>
  );
}

export default Nav2;
