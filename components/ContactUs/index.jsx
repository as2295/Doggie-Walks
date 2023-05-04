import React from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import Header from "../Header";
import "./ContactUs.css";

function ContactUs(props) {
  const {
    gallery,
    h6,
    p7,
    inputType1,
    inputPlaceholder1,
    p8,
    inputType2,
    inputPlaceholder2,
    p9,
    inputType3,
    inputPlaceholder3,
    p10,
    footerProps,
    headerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <form className="contact-us screen" name="form2" action="form2" method="post">
        <div className="overlap-group9">
          <div className="gallery" style={{ backgroundImage: `url(${gallery})` }}>
            <Nav />
            <div className="overlap-group2">
              <p className="h6">{h6}</p>
            </div>
            <div className="overlap-group-container">
              <div className="overlap-group4">
                <div className="p7 inter-bold-white-18px">{p7}</div>
              </div>
              <div className="overlap-group3">
                <div className="container10"></div>
                <input
                  className="text-input-1 inter-bold-white-18px"
                  name="textinput1"
                  placeholder={inputPlaceholder1}
                  type={inputType1}
                  required
                />
              </div>
            </div>
            <div className="overlap-group-container-1">
              <div className="overlap-group1">
                <div className="p8 inter-bold-white-18px">{p8}</div>
              </div>
              <div className="overlap-group5">
                <div className="container11"></div>
                <input
                  className="text-input-2 inter-bold-white-18px"
                  name="textinput2"
                  placeholder={inputPlaceholder2}
                  type={inputType2}
                  required
                />
              </div>
            </div>
            <div className="overlap-group6">
              <div className="p9 inter-bold-white-18px">{p9}</div>
            </div>
            <div className="overlap-group7">
              <div className="container14"></div>
              <textarea
                className="text-input-3 inter-bold-white-18px"
                name="textinput3"
                placeholder={inputPlaceholder3}
                type={inputType3}
                required
              ></textarea>
            </div>
            <div className="overlap-group8">
              <a href="javascript:SubmitForm('form2')">
                <div className="container15"></div>
              </a>
              <a href="javascript:SubmitForm('form2')">
                <div className="p10">{p10}</div>
              </a>
            </div>
            <Footer
              component11Props={footerProps.component11Props}
              component12Props={footerProps.component12Props}
              component13Props={footerProps.component13Props}
              component14Props={footerProps.component14Props}
            />
          </div>
          <Header header2Props={headerProps.header2Props} />
        </div>
        <div className="contact-us-1"></div>
      </form>
    </div>
  );
}

export default ContactUs;
