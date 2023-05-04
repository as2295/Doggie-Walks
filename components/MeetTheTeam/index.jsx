import React from "react";
import Header from "../Header";
import Nav2 from "../Nav2";
import Footer from "../Footer";
import "./MeetTheTeam.css";

function MeetTheTeam(props) {
  const {
    meetTheTeam,
    rebeccaHarrison,
    h3,
    joannaDavies,
    h2,
    loriHanson,
    h5,
    garySimpson,
    h4,
    headerProps,
    nav2Props,
    footerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="meet-the-team screen" style={{ backgroundImage: `url(${meetTheTeam})` }}>
        <Header className={headerProps.className} header2Props={headerProps.header2Props} />
        <Nav2 className={nav2Props.className} />
        <div className="flex-row-2">
          <div className="rebecca">
            <img className="rebecca-harrison" src={rebeccaHarrison} alt="rebecca-harrison" />
            <div className="overlap-group2-2">
              <p className="h3">{h3}</p>
            </div>
          </div>
          <div className="joanna">
            <img className="joanna-davies" src={joannaDavies} alt="joanna-davies" />
            <div className="overlap-group3-1">
              <p className="h2 inter-normal-white-36px">{h2}</p>
            </div>
          </div>
          <div className="lori">
            <img className="lori-hanson" src={loriHanson} alt="lori-hanson" />
            <div className="overlap-group-5">
              <p className="h5 inter-normal-white-36px">{h5}</p>
            </div>
          </div>
          <div className="gary">
            <img className="gary-simpson" src={garySimpson} alt="gary-simpson" />
            <div className="overlap-group1-3">
              <div className="h4 inter-normal-white-36px">{h4}</div>
            </div>
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

export default MeetTheTeam;
