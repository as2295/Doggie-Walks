import React from "react";
import Header from "../Header";
import Nav from "../Nav";
import Footer from "../Footer";
import "./Gallery.css";

function Gallery(props) {
  const {
    gallery,
    blacklab,
    walker,
    browndog,
    whitedog,
    puppy,
    germanshepheard,
    corgi,
    dogwood,
    headerProps,
    navProps,
    footerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="gallery-1 screen" style={{ backgroundImage: `url(${gallery})` }}>
        <Header className={headerProps.className} header2Props={headerProps.header2Props} />
        <Nav className={navProps.className} />
        <div className="flex-row-1">
          <div className="flex-col">
            <img className="blacklab animate-enter2" src={blacklab} alt="blacklab" />
            <img className="walker-1 animate-enter6" src={walker} alt="walker" />
          </div>
          <div className="flex-col-1">
            <img className="browndog animate-enter3" src={browndog} alt="browndog" />
            <img className="whitedog animate-enter7" src={whitedog} alt="whitedog" />
          </div>
          <div className="flex-col-2">
            <img className="puppy animate-enter4" src={puppy} alt="puppy" />
            <img className="germanshepheard animate-enter8" src={germanshepheard} alt="germanshepheard" />
          </div>
          <div className="flex-col-3">
            <img className="corgi animate-enter5" src={corgi} alt="corgi" />
            <img className="dogwood animate-enter9" src={dogwood} alt="dogwood" />
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

export default Gallery;
