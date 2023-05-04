import React from "react";
import { Link } from "react-router-dom";
import "./Header2.css";

function Header2(props) {
  const { className } = props;

  return (
    <div className={`header-6 ${className || ""}`}>
      <div className="overlap-group">
        <Link to="/home" className="align-self-flex-end">
          <img className="logo" src="/img/logo.svg" alt="Logo" />
        </Link>
        <div className="overlap-group1-1">
          <h1 className="phonenumber inter-bold-biscay-64px">01695 883 112</h1>
          <p className="slogan inter-bold-burnt-sienna-28px">
            Helping Our Animal Friends One Paw At A Time
            <br />
            info@doggiewalks.co.uk
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header2;
