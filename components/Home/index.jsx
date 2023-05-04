import React from "react";
import Header from "../Header";
import Nav2 from "../Nav2";
import Footer from "../Footer";
import "./Home.css";

function Home(props) {
  const { home, h1, p1, walker, p2, forestdog, headerProps, footerProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="home screen" style={{ backgroundImage: `url(${home})` }}>
        <Header className={headerProps.className} header2Props={headerProps.header2Props} />
        <Nav2 />
        <div className="overlap-group-container-2">
          <div className="overlap-group2-1">
            <div className="h1">{h1}</div>
            <div className="flex-row">
              <p className="p1">{p1}</p>
              <img className="walker animate-enter" src={walker} alt="walker" />
            </div>
          </div>
          <div className="overlap-group-2">
            <div className="container2"></div>
            <p className="p2 inter-normal-white-16px">{p2}</p>
            <img className="forestdog animate-enter1" src={forestdog} alt="forestdog" />
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

export default Home;
