import React from "react";
import Header from "../Header";
import Nav from "../Nav";
import Footer from "../Footer";
import "./AboutUs.css";

function AboutUs(props) {
  const { aboutUs, p3, bulldog, p4, kingcharles, headerProps, navProps, footerProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="about-us screen" style={{ backgroundImage: `url(${aboutUs})` }}>
        <Header className={headerProps.className} header2Props={headerProps.header2Props} />
        <Nav className={navProps.className} />
        <div className="overlap-group-container-3 inter-normal-white-16px">
          <div className="overlap-group-3">
            <p className="p3">{p3}</p>
            <img className="bulldog" src={bulldog} alt="bulldog" />
          </div>
          <div className="overlap-group-3">
            <p className="p4">{p4}</p>
            <img className="kingcharles" src={kingcharles} alt="kingcharles" />
          </div>
        </div>
        <Footer
          className={footerProps.className}
          component11Props={footerProps.component11Props}
          component12Props={footerProps.component12Props}
          component13Props={footerProps.component13Props}
          component14Props={footerProps.component14Props}
        />
      </div>
    </div>
  );
}

export default AboutUs;
