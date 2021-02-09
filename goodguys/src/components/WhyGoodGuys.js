import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";



function WhyGoodGuys() {
  return (
    <>
    <div className="whygoodguys">
      <div className="whygoodguyscont"></div>
      <div className="whygoodguy-style"></div>
      <div className="whygoodey" data-aos="zoom-in">
                    <h1>Why GoodGuys, You Ask?</h1>
                    <h3>Because It's Time For A Fresh Room!</h3>
                    <h3>And We're Just The Right People For The Job!</h3>

                </div>
    </div>
          <div className="brickdownchitown">
 <div className="brickup" data-aos="fade-up">
                        <div className="brickup1">
                            <h1>Why choose GoodGuys?</h1>
                            <div className="line"></div>
                        </div>
                        <div className="bruckup" data-aos="fade-up">
                            <h3>Our cleaning and service capabilities are unmatched.</h3>
                          
                            <div className="contaflex">
                              <p className="flexin" data-aos="fade-up"> GoodGuys is recognized as a leader in our industry and is highly 
                              recommended by design professionals who rely on our expertise for the cleaning
                               of installed carpet, Oriental and area rugs, upholstered furniture, stone 
                               and tile as well as the fabrication of custom carpet designs, edge treatments 
                               and rug repair and reweaving. We are pleased that most of our work comes through 
                               repeat business and referrals from decades of satisfied clients.  They value our
                                experienced service team, convenient scheduling, friendly service and kept 
                                promises.  We keep our promises, with no surprises!</p>
                            </div>
                        </div>
                    </div>
                </div>
            {/* <Parallax featuredImage1={commercialshed} featuredImage2={commercialclean} commpar={true} isNeeded = {false} />


             <div className="imgcontainer">
                        <img src={commercialslick} alt="" />
                    </div> */}
   </>
  );
}

export default WhyGoodGuys;
