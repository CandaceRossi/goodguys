import React from "react";
import carpet from "../images/carpet.jpg";

function EndHomeCont() {
  return (
      <>
    <div className="endhome">
    <h1>
    <span className="endhomequote">"</span>
    Top level care for carpets and more!</h1>
    
    <p className="smallertext">-Chicago Review, See More <span className="here">Here</span></p> 
    </div>
    <div className="endhomecont">
        <img style={{width: "100%", maxHeight: "650px", zIndex: "300"}} src={carpet} alt=""/>
        <div className="encasingdiv">
        <div className="encasingleft">
        <h2>Why GoodGuys?</h2>
        <p>For over 20 Years, residential and business clients have trusted GoodGuys with the care and cleaning of valued furnishings.</p>
        <p>We carefully handle your carpet, area rugs, and upholstered furniture as if they were our own. We take gread pride in the quality of our service and the experience professionals who perform them.</p>
        </div>
        <div className="encasingright">
        <li>
            <ul>Professionall Trained, Caring & Friendly Staff</ul>
            <ul>Eco-Friendly, Green Cleaning Procedures</ul>
            <ul>Over 80 Years of Industry Experience</ul>
            <ul>Custom Carpet Services</ul>
            <ul>Your Satisfaction Guaranteed</ul>
        </li>
        <button>About Our Company</button>
        </div>
        </div>
    </div>
    </>
  );
}

export default EndHomeCont;
