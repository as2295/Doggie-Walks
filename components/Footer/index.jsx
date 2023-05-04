import React from "react";
import Component1 from "../Component1";
import "./Footer.css";

function Footer(props) {
  const { className, component11Props, component12Props, component13Props, component14Props } = props;

  return (
    <footer className={`footer ${className || ""}`}>
      <Component1>{component11Props.children}</Component1>
      <Component1 className={component12Props.className}>{component12Props.children}</Component1>
      <Component1 className={component13Props.className}>{component13Props.children}</Component1>
      <Component1 className={component14Props.className}>{component14Props.children}</Component1>
    </footer>
  );
}

export default Footer;
