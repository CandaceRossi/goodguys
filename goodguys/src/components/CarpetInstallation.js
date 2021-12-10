import React, {useEffect} from "react";
import arearug3 from "../images/arearug3.jpg";
import carpetinstallation from "../images/carpetinstallation.jpg";
import familyroom from "../images/familyroom.jpg";
import Aos from "aos";
import "aos/dist/aos.css";


function CarpetInstallation() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
  return (
    <>
    <div className="carpetinstallation">
      <div className="carpetinstallationcont">
        <div className="carpetinstallation-style">
          <div className="carpetinstallationey" >
            <h1>Carpet Installation</h1>
          </div>
        </div>
      </div>
        <div className="brickdownchitown">
          <div className="brickup">
           
            <div className="bruckup">
                <div className="contaflex">
                  <div className="items-list-wrapper-carpetinstallation1">
                    <div className="itemdiv">
                      <p>We're committed to keeping down the cost of "Keeping Up Appearances."</p>
                      </div>
                     
                    <div className="item-card-square" >
            {/* <div className="item-card-container-carpetinstallation">
              
                <img
                  className="item-card-image-square"
                  src={arearug3} alt=""
                />
             
            </div> */}

            <div className="item-card-info">
               <h1>Carpet Installation</h1>
              <h4>Carpet installation is one of the most important aspects of your flooring investment. If great carpet is installed poorly, it can greatly diminish its performance and durability. That’s why GoodGuy’s only uses Chicago’s finest master carpet installers for your carpet and carpet padding installation. We do it right the first time..

</h4>
              <button
              
                className="md-button shop-button"
              >
               Get Great Savings!
              </button>
            </div>
          </div>
        <div className="item-card-square">
          <div className="item-card-container-carpetinstallation">
            <img
                  className="item-card-image-square"
                 src={carpetinstallation} alt=""
                />
            </div>
            {/* <div className="item-card-info">
              <p>Our experienced cleaning technicians are happy to work around your furnishings and only clean the carpet traffic areas that need attention. As the need for furniture moving is reduced, we pass the savings along to you.</p>
              <p>Enjoy your enhanced carpet appearance and a healthier indoor environment.</p>
              <button
              
                className="md-button shop-button"
              >
               Get Great Savings!
              </button>
            </div> */}
          </div>
        </div>                    
      </div>
    </div>
     <div className="brickup1">
          <div className="carpetinstallationendhome">
    <h1>
    <span className="carpetinstallationendhomequote">"</span>
    Good guys know how to do the job! But of course that's what they're known for.</h1>
    <h1>
    <span className="carpetinstallationendhomequote">"</span>
    Walked into the house and the cleaned rug was breathtaking! Looked as new as the day we bought it!</h1>
    </div>
            </div>

       <div className="items-list-wrapper-carpetinstallation1">
      <div className="carpetinstallationendcont">
       <img src={arearug3} style={{width: "275px", height: "275px", borderRadius: "50%"}} alt="" className="carpetinstallationleftp2" />
       <div>
       <h2>Receive a 20% discount when you purchase a monthly pickup and delivery cleaning service for your area rugs.</h2>
       <p>For questions or to schedule an appointment, call (206) 782-2268 or use our online scheduling form to request an appointment.</p>
       <li><ul>Schedule Now</ul>
       <ul>Why GoodGuys?</ul>
       </li></div>
      </div>   
      </div>        
  </div>
  </div>
  <div className="carpetinstallationfamilyimg">
  <div className="carpetinstallationfamilyimgimg"> 
  <div className="encasingright">
        <li>
            <ul>Professionall Trained, Caring & Friendly Staff</ul>
            <ul>Eco-Friendly, Green Cleaning Procedures</ul>
            <ul>Over 80 Years of Industry Experience</ul>
            <ul>Custom Carpet Services</ul>
            <ul>Your Satisfaction Guaranteed</ul>
        </li>
        </div>
        </div>
  </div>
  </div>
   </>
  );
}

export default CarpetInstallation;