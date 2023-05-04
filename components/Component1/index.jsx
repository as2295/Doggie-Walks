import React from "react";
import "./Component1.css";

function Component1(props) {
  const { children, className } = props;

  return (
    <div className={`component4 ${className || ""}`}>
      <p className="ormskirk-doggie-walk inter-normal-white-16px">{children}</p>
    </div>
  );
}

export default Component1;
