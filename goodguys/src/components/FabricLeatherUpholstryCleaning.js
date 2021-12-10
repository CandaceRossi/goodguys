import React, {useEffect} from "react";
import arearug3 from "../images/arearug3.jpg";
import colorfulruglivingroom from "../images/colorfulruglivingroom.jpg";
import familyroom from "../images/familyroom.jpg";
import Aos from "aos";
import "aos/dist/aos.css";


function FabricLeatherUpholstryCleaning() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
  return (
    <>
    <div className="fabricleather">
      <div className="fabricleathercont">
        <div className="fabricleather-style">
          <div className="fabricleatherey" >
            <h1>Fabric & Leather Upholstry Cleaning</h1>
          </div>
        </div>
      </div>
        <div className="brickdownchitown">
          <div className="brickup">
             
            <div className="bruckup">
                <div className="contaflex">
                  <div className="items-list-wrapper-fabricleather1">
                    <div className="itemdiv">
                      <p>"We're committed to keeping down the cost of "Keeping Up Appearances."</p>
                      </div>
                    <div className="item-card-square" >
             {/* <div className="item-card-container-save">
              
                 <img
                  className="item-card-image-square"
                  src={arearug3} alt=""
                /> 
              
             
            </div>  */}

            <div className="item-card-info">
            <h1>Fabric & Leather Upholstry Cleaning</h1>
              <h4>We offer in-home service for your care-sensitive and heavily soiled fabric upholstery.  

Our experts also thoroughly clean your leather upholstery to remove soil, apply a matching color to make scratches less noticeable, and perform a thorough conditioning to prevent cracking and restore its appearance.
</h4>
              <button
              
                className="md-button shop-button"
              >
               Get Great Savings!
              </button>
            </div>
          </div>
        <div className="item-card-square">
          <div className="item-card-container-fabricleather">
            <img
                  className="item-card-image-square"
                 src={colorfulruglivingroom} alt=""
                />
            </div>
            {/* <div className="item-card-info">
            </div> */}
          </div>
        </div>                    
      </div>
    </div>

 <div className="brickup1">
          <div className="fabricleatherendhome">
    <h1>
    <span className="fabricleatherendhomequote">"</span>
    Good guys know how to do the job! But of course that's what they're known for.</h1>
    <h1>
    <span className="fabricleatherendhomequote">"</span>
    Walked into the house and the cleaned rug was breathtaking! Looked as new as the day we bought it!</h1>
    </div>
            </div>

       <div className="items-list-wrapper-fabricleather">
      <div className="fabricleatherendcont">
                   
       <img src={arearug3} style={{width: "275px", height: "275px", borderRadius: "50%"}} alt="" className="fabricleatherleftp2" />
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


  
  <div className="fabricleatherfamilyimg">
  <div className="fabricleatherfamilyimgimg"> 
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

export default FabricLeatherUpholstryCleaning;