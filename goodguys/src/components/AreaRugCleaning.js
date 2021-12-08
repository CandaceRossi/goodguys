import React, {useEffect} from "react";
import couplecarpetstairs from "../images/couplecarpetstairs.jpg";
import colorfulruglivingroom from "../images/colorfulruglivingroom.jpg";
import arearug3 from "../images/arearug3.jpg";
import Aos from "aos";
import "aos/dist/aos.css";


function AreaRugCleaning() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
  return (
    <>
    <div className="arearug">
      <div className="arearugcont">
        <div className="arearug-style">
          <div className="arearugey" >
            <h1>Area Rug Cleaning</h1>
          </div>
        </div>
      </div>
        <div className="brickdownchitown">
          <div className="brickup">
           
            <div className="bruckup">
                <div className="contaflex">
                  <div className="items-list-wrapper-arearu1">
                    <div className="itemdiv">
                      <p>"We're committed to keeping down the cost of "Keeping Up Appearances."</p></div>
                    <div className="item-card-square" >
             {/* <div className="item-card-container-save">
              
                 <img
                  className="item-card-image-square"
                  src={couplecarpetstairs} alt=""
                /> 
              
             
            </div>  */}

            <div className="item-card-info">
            <h1>Area Rug Cleaning</h1>
              <h4>We offer in-home area rug cleaning service or try our convenient pick up and delivery services for area rug cleanings.  However you want to have it done, when your rugs become dirty or discolored, we have the appropriate non-abrasive cleaning solutions.</h4>
              <button
              
                className="md-button shop-button"
              >
               Get Great Savings!
              </button>
            </div>
          </div>
        <div className="item-card-square">
          <div className="item-card-container-arearug">
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
          <div className="arearugendhome">
    <h1>
    <span className="arearugendhomequote">"</span>
    Good guys know how to do the job! But of course that's what they're known for.</h1>
    <h1>
    <span className="arearugendhomequote">"</span>
    Walked into the house and the cleaned rug was breathtaking! Looked as new as the day we bought it!</h1>
    </div>
            </div>

       <div className="items-list-wrapper-arearug">
      <div className="arearugendcont">
                   
       <img src={arearug3} alt ="" className="arearugleftp2" />
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


  
  <div className="arearugfamilyimg">
  <div className="arearugfamilyimgimg"> 
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

export default AreaRugCleaning;