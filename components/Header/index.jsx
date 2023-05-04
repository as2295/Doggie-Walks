import React from "react";
import Header2 from "../Header2";
import "./Header.css";

function Header(props) {
  const { className, header2Props } = props;

  return (
    <div className={`header ${className || ""}`}>
      <Header2 className={header2Props.className} />
    </div>
  );
}

export default Header;
