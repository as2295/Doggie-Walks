import React from "react";
import Header from "../Header";
import Nav2 from "../Nav2";
import Footer from "../Footer";
import "./PricingCost.css";

function PricingCost(props) {
  const { pricingCost, p5, runningdog, p6, alsation, headerProps, nav2Props, footerProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="pricing-cost screen" style={{ backgroundImage: `url(${pricingCost})` }}>
        <Header className={headerProps.className} header2Props={headerProps.header2Props} />
        <Nav2 className={nav2Props.className} />
        <div className="overlap-group-container-4 inter-normal-white-16px">
          <div className="overlap-group-4">
            <p className="p5">{p5}</p>
            <img className="runningdog" src={runningdog} alt="runningdog" />
          </div>
          <div className="overlap-group-4">
            <p className="p6">{p6}</p>
            <img className="alsation" src={alsation} alt="alsation" />
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

export default PricingCost;
