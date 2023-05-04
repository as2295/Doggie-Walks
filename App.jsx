{/* Creates react interface  */}
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
{/* Calls the components for each section  */}
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import AboutUs from "./components/AboutUs";
import PricingCost from "./components/PricingCost";
import MeetTheTeam from "./components/MeetTheTeam";
{/* Creates the routes for the pages  */}
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/contact-us">
          <ContactUs {...contactUsData} />
        </Route>
        <Route path="/:path(|home)">
          <Home {...homeData} />
        </Route>
        <Route path="/gallery">
          <Gallery {...galleryData} />
        </Route>
        <Route path="/about-us">
          <AboutUs {...aboutUsData} />
        </Route>
        <Route path="/pricing-cost">
          <PricingCost {...pricingCostData} />
        </Route>
        <Route path="/meet-the-team">
          <MeetTheTeam {...meetTheTeamData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
{/* Footer data being called */}
const component11Data = {
    children: "Ormskirk Doggie Walks 3-5 St Helens Road, Ormskirk L35 4po",
};

const component12Data = {
    children: "Southport Doggie Walks 150 Lord Street, Southport, Pr9 0np",
    className: "component",
};

const component13Data = {
    children: "Warrington Doggie Walks 47 Old Liverpool Road, Warrington, Wa5 1af",
    className: "component1",
};

const component14Data = {
    children: "Open From: Monday – Friday (8am – 7pm) Saturday (8am – 5pm) Sunday (12pm - 5pm)",
    className: "component",
};

const footer1Data = {
    component11Props: component11Data,
    component12Props: component12Data,
    component13Props: component13Data,
    component14Props: component14Data,
};
{/* Header data called */}
const header21Data = {
    className: "",
};

const header1Data = {
    header2Props: header21Data,
};
{/* Calls data input components   */}
const contactUsData = {
    gallery: "/img/gallery.png",
    h6: "Contact Us And We Will Respond Via Email Asap",
    p7: "Name",
    inputType1: "text",
    inputPlaceholder1: "Enter here",
    p8: "Email",
    inputType2: "email",
    inputPlaceholder2: "Enter here",
    p9: "Message",
    inputType3: "text",
    inputPlaceholder3: "Enter here",
    p10: "Contact Us",
    footerProps: footer1Data,
    headerProps: header1Data,
};
{/* Header data called */}
const header22Data = {
    className: "header-7",
};

const header3Data = {
    className: "header-1",
    header2Props: header22Data,
};
{/* Footer data being called */}
const component15Data = {
    children: "Ormskirk Doggie Walks 3-5 St Helens Road, Ormskirk L35 4po",
};

const component16Data = {
    children: "Southport Doggie Walks 150 Lord Street, Southport, Pr9 0np",
    className: "component-1",
};

const component17Data = {
    children: "Warrington Doggie Walks 47 Old Liverpool Road, Warrington, Wa5 1af",
    className: "component1-1",
};

const component18Data = {
    children: "Open From: Monday – Friday (8am – 7pm) Saturday (8am – 5pm) Sunday (12pm - 5pm)",
    className: "component-1",
};

const footer2Data = {
    className: "footer-1",
    component11Props: component15Data,
    component12Props: component16Data,
    component13Props: component17Data,
    component14Props: component18Data,
};
{/* Home page components called and text added  */}
const homeData = {
    home: "/img/gallery.png",
    h1: "Welcome To Doggie Walks!",
    p1: "We Are Committed To Providing Professional And Personal Care To Your Beloved Four-legged Friends. We Are Based In Ormskirk We Offer Exciting And Stimulating Walks All Over The Beautiful Lancashire And Merseyside Countryside. We Guarantee Your Dog Will Come Home Tired And Content.",
    walker: "/img/walker-1.png",
    p2: <React.Fragment>We Recognise Every Dog&#x27;s Needs Are Different And How Busy Daily Life Can Be. With Services Starting From Only £10 We Ensure You The Best Possible Service To Suit The Needs Of Both You And Your Pooch. We Are Also Fully Insured For Everybody&#x27;s Peace Of Mind, For More Information On This Please Contact Us Or Email At Info@doggiewalks.co.uk We Also Offer Different Services Such As: <br /><br />• Pet Sitting (Puppy And Elderly) <br />• Small Pet Visits <br />• Overnight Pet Sitting <br /><br />There&#x27;s Something To Suit Everyone But If You Can&#x27;t Find What You&#x27;re Looking For Don&#x27;t Hesitate To Contact Us And We&#x27;ll Find The Perfect Solution For You And Your Companion!</React.Fragment>,
    forestdog: "/img/forestdog.png",
    headerProps: header3Data,
    footerProps: footer2Data,
};
{/* Header data called */}
const header23Data = {
    className: "header-8",
};

const header4Data = {
    className: "header-2",
    header2Props: header23Data,
};
{/* Nav component */}
const nav3Data = {
    className: "nav-1",
};
{/* Footer data being called */}
const component19Data = {
    children: "Ormskirk Doggie Walks 3-5 St Helens Road, Ormskirk L35 4po",
};

const component110Data = {
    children: "Southport Doggie Walks 150 Lord Street, Southport, Pr9 0np",
    className: "component-2",
};

const component111Data = {
    children: "Warrington Doggie Walks 47 Old Liverpool Road, Warrington, Wa5 1af",
    className: "component1-2",
};

const component112Data = {
    children: "Open From: Monday – Friday (8am – 7pm) Saturday (8am – 5pm) Sunday (12pm - 5pm)",
    className: "component-2",
};

const footer3Data = {
    className: "footer-2",
    component11Props: component19Data,
    component12Props: component110Data,
    component13Props: component111Data,
    component14Props: component112Data,
};
{/* Gallery page created by calling in images from img folder  */}
const galleryData = {
    gallery: "/img/gallery.png",
    blacklab: "/img/blacklab.png",
    walker: "/img/walker-2.png",
    browndog: "/img/browndog.png",
    whitedog: "/img/whitedog.png",
    puppy: "/img/puppy.png",
    germanshepheard: "/img/germanshepheard.png",
    corgi: "/img/corgi.png",
    dogwood: "/img/dogwood.png",
    headerProps: header4Data,
    navProps: nav3Data,
    footerProps: footer3Data,
};
{/* Header data called */}
const header24Data = {
    className: "header-9",
};

const header5Data = {
    className: "header-3",
    header2Props: header24Data,
};
{/* Nav component */}
const nav4Data = {
    className: "nav-2",
};
{/* Footer data being called */}
const component113Data = {
    children: "Ormskirk Doggie Walks 3-5 St Helens Road, Ormskirk L35 4po",
};

const component114Data = {
    children: "Southport Doggie Walks 150 Lord Street, Southport, Pr9 0np",
    className: "component-3",
};

const component115Data = {
    children: "Warrington Doggie Walks 47 Old Liverpool Road, Warrington, Wa5 1af",
    className: "component1-3",
};

const component116Data = {
    children: "Open From: Monday – Friday (8am – 7pm) Saturday (8am – 5pm) Sunday (12pm - 5pm)",
    className: "component-3",
};

const footer4Data = {
    className: "footer-3",
    component11Props: component113Data,
    component12Props: component114Data,
    component13Props: component115Data,
    component14Props: component116Data,
};

const aboutUsData = {
    aboutUs: "/img/gallery.png",
    p3: "Doggie Walks Are Committed To Ensuring That Your Pet Is Safe, Healthy And Active. Our Canine Friends Should Feel Different Terrain Under Their Paws, Hear Different Sounds And See Different Sights And Have A Decent Sniff About!",
    bulldog: "/img/bulldog.png",
    p4: "While Dogs Need Daily Exercise In Order To Stay Healthy, For Many People It's Not Always Possible To Walk Their Pets Regularly. That's Why We Established Doggie Walks, To Help People Across Lancashire And Merseyside Ensure Their Dogs Live Happy Lives.",
    kingcharles: "/img/kingcharles.png",
    headerProps: header5Data,
    navProps: nav4Data,
    footerProps: footer4Data,
};
{/* Header data called */}
const header25Data = {
    className: "header-10",
};

const header6Data = {
    className: "header-4",
    header2Props: header25Data,
};
{/* Nav component */}
const nav22Data = {
    className: "nav-4",
};
{/* Footer data being called */}
const component117Data = {
    children: "Ormskirk Doggie Walks 3-5 St Helens Road, Ormskirk L35 4po",
};

const component118Data = {
    children: "Southport Doggie Walks 150 Lord Street, Southport, Pr9 0np",
    className: "component-4",
};

const component119Data = {
    children: "Warrington Doggie Walks 47 Old Liverpool Road, Warrington, Wa5 1af",
    className: "component1-4",
};

const component120Data = {
    children: "Open From: Monday – Friday (8am – 7pm) Saturday (8am – 5pm) Sunday (12pm - 5pm)",
    className: "component-4",
};

const footer5Data = {
    className: "footer-4",
    component11Props: component117Data,
    component12Props: component118Data,
    component13Props: component119Data,
    component14Props: component120Data,
};

const pricingCostData = {
    pricingCost: "/img/gallery.png",
    p5: <React.Fragment>Your Dog Shall Receive The Full-length Time It Deserves. Check For Your Local Branch And Pop In If You’re Unsure Which Service Is Right For You. Every Dog Is Unique, Meaning That Every Dog Deserves Our Full Attention 7 Days A Week. <br /><br />• Dog Walking £12/h <br />• Duration: 1 Hour (enquire For More)  <br />• Not All Dogs Enjoy Group Walks, Therefore We Provide Two Different Services. Solo Or Group, Discover Which Option Is Best For Your Dog.</React.Fragment>,
    runningdog: "/img/runningdog.png",
    p6: <React.Fragment>House Calls <br />• £15/h<br />•Duration: 1 Hour (enquire For More) <br /><br />Need Your Dog Looking After While You’re Not Home? This Service Allows You To Have Peace Of Mind While We Ensure That Your Dog Has The Attention And Care It Deserves. <br /><br />• Day Care £60/day <br />• Duration: 8 Hours Per Day <br /><br />50% Off Home Visits For New Customers!<br /><br />Our Professional Day Care Centres Provide The Most Up To Date And Clean Facilities Which Ensures That Your Dog Is Safe, Protected And Healthy. This Will Cover All Services From Feeding, Bathing Walking And Sleeping.</React.Fragment>,
    alsation: "/img/alsation1.png",
    headerProps: header6Data,
    nav2Props: nav22Data,
    footerProps: footer5Data,
};
{/* Header data called */}
const header26Data = {
    className: "header-11",
};

const header7Data = {
    className: "header-5",
    header2Props: header26Data,
};
{/* Nav component */}
const nav23Data = {
    className: "nav-5",
};
{/* Footer data being called */}
const component121Data = {
    children: "Ormskirk Doggie Walks 3-5 St Helens Road, Ormskirk L35 4po",
};

const component122Data = {
    children: "Southport Doggie Walks 150 Lord Street, Southport, Pr9 0np",
    className: "component-5",
};

const component123Data = {
    children: "Warrington Doggie Walks 47 Old Liverpool Road, Warrington, Wa5 1af",
    className: "component1-5",
};

const component124Data = {
    children: "Open From: Monday – Friday (8am – 7pm) Saturday (8am – 5pm) Sunday (12pm - 5pm)",
    className: "component-5",
};

const footer6Data = {
    className: "footer-5",
    component11Props: component121Data,
    component12Props: component122Data,
    component13Props: component123Data,
    component14Props: component124Data,
};
{/* Images are called from img folder and text content added  */}
const meetTheTeamData = {
    meetTheTeam: "/img/gallery.png",
    rebeccaHarrison: "/img/rebecca-harrison.png",
    h3: <React.Fragment>Rebecca Harrison <br /> Professional Dog Walker</React.Fragment>,
    joannaDavies: "/img/joanna-davies.png",
    h2: <React.Fragment>Joanna Davies <br /><br />Professional Dog Walker</React.Fragment>,
    loriHanson: "/img/lori-hanson.png",
    h5: <React.Fragment>Lori Hanson <br /><br />Founder Of Doggie Walks</React.Fragment>,
    garySimpson: "/img/gary-simpson.png",
    h4: <React.Fragment>Gary Simpson <br /><br />Team Manager</React.Fragment>,
    headerProps: header7Data,
    nav2Props: nav23Data,
    footerProps: footer6Data,
};

