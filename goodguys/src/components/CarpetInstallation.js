import React, {useEffect} from "react";
import couplecarpetstairs from "../images/couplecarpetstairs.jpg";
import colorfulruglivingroom from "../images/colorfulruglivingroom.jpg";
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
            <div className="brickup1">
              <h1>Year-Round Savings</h1>
            </div>
            <div className="bruckup">
                <div className="contaflex">
                  <div className="items-list-wrapper-save">
                    <div className="itemdiv">
                      <p>We're committed to keeping down the cost of "Keeping Up Appearances."</p></div>
                    <div className="item-card-square" >
            <div className="item-card-container-save">
              
                <img
                  className="item-card-image-square"
                  src={couplecarpetstairs} alt=""
                />
             
            </div>

            <div className="item-card-info">
              <p>Bring your area rugs and upholstered furniture to us for service and receive a 20% discount.  This offer is available at both our Seattle and Bellevue locations.</p>
              <button
              
                className="md-button shop-button"
              >
               Get Great Savings!
              </button>
            </div>
          </div>
        <div className="item-card-square">
          <div className="item-card-container-save">
            <img
                  className="item-card-image-square"
                 src={colorfulruglivingroom} alt=""
                />
            </div>
            <div className="item-card-info">
              <p>Our experienced cleaning technicians are happy to work around your furnishings and only clean the carpet traffic areas that need attention. As the need for furniture moving is reduced, we pass the savings along to you.</p>
              <p>Enjoy your enhanced carpet appearance and a healthier indoor environment.</p>
              <button
              
                className="md-button shop-button"
              >
               Get Great Savings!
              </button>
            </div>
          </div>
        </div>                    
      </div>
    </div>
      <div className="carpetinstallationendcont">
       <p className="carpetinstallationleftp">SPECIAL OFFER</p>
       <div><h1>Special Offer</h1>
       <p>Special savings for our valued clients</p>
       <li><ul>$40 off <br/> <span>orders over $275</span></ul>
       <ul>$85 off <br/> <span>orders over $500</span></ul>
       <ul>$200 off <br/> <span>orders over $1,000</span></ul></li></div>
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