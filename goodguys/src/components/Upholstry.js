import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";


function Upholstry() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
  return (
    <>
    <div className="savings">
      <div className="savingcont">
      <div className="saving-style">
      <div className="savey" >
                    <h1>Contact Us Today For A Quote!</h1>
                    {/* <h3>GoodGuys Has Served Greater ChicagoLand</h3>
                    <h3>Areas For Over 20 Years!</h3> */}

                </div>
            </div>
        </div>
          <div className="brickdownchitown">
              <div className="brickup">
                        <div className="brickup1">
                            <h1>We welcome the opportunity to be of service.</h1>
                            {/* <div className="line"></div> */}
                        </div>
                        <div className="bruckup">
                        <div className="contaflex">
                                <div className="flexin" data-aos="fade-right">
                                    <p>Phone: (222)222-2222</p>
                                </div>
                                <div className="flexin" data-aos="fade-left">
                                    <p>Email: goodguys@goodguys.com</p>
                                </div>
                            </div>
                          
                            
                        </div>
                        </div>
                        </div>
                    </div>
              
           
   </>
  );
}

export default Upholstry;
