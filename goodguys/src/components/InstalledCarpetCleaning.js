import React, {useEffect} from "react";
import arearug3 from "../images/arearug3.jpg";
import colorfulruglivingroom from "../images/colorfulruglivingroom.jpg";
import familyroom from "../images/familyroom.jpg";
import Aos from "aos";
import "aos/dist/aos.css";


function InstalledCarpetCleaning() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
  return (
    <>
    <div className="installedcarpet">
      <div className="installedcarpetcont">
        <div className="installedcarpet-style">
          <div className="installedcarpetey" >
            <h1>Installed Carpet Cleaning</h1>
          </div>
        </div>
      </div>
        <div className="brickdownchitown">
          <div className="brickup">
           
            <div className="bruckup">
                <div className="contaflex">
                  <div className="items-list-wrapper-installedcarpet1">
                    <div className="itemdiv">
                      <p>"We're committed to keeping down the cost of "Keeping Up Appearances."</p></div>
                    <div className="item-card-square" >
             {/* <div className="item-card-container-save">
              
                 <img
                  className="item-card-image-square"
                  src={arearug3} alt=""
                /> 
              
             
            </div>  */}

            <div className="item-card-info">
            <h1>Installed Carpet Cleaning</h1>
              <h4>Wool or synthetic, woven or tufted, our experienced cleaning technicians know how to restore your carpet’s appearance – and provide you a healthier indoor environment.  You’ll like our attention to detail and find our service easy and convenient.

</h4>
              <button
              
                className="md-button shop-button"
              >
               Get Great Savings!
              </button>
            </div>
          </div>
        <div className="item-card-square">
          <div className="item-card-container-installedcarpet">
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
          <div className="installedcarpetendhome">
    <h1>
    <span className="installedcarpetendhomequote">"</span>
    Good guys know how to do the job! But of course that's what they're known for.</h1>
    <h1>
    <span className="installedcarpetendhomequote">"</span>
    Walked into the house and the cleaned rug was breathtaking! Looked as new as the day we bought it!</h1>
    </div>
            </div>

       <div className="items-list-wrapper-installedcarpet">
      <div className="installedcarpetendcont">
                   
       <img src={arearug3} style={{width: "275px", height: "275px", borderRadius: "50%"}} alt="" className="installedcarpetleftp2" />
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


  
  <div className="installedcarpetfamilyimg">
  <div className="installedcarpetfamilyimgimg"> 
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

export default InstalledCarpetCleaning;