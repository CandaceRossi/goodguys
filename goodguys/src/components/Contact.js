import React, {useEffect} from "react";
import Aos from "aos";
import fbicon from "../images/fbicon.png"
import instagramicon from "../images/instagramicon.png"
import twittericon from "../images/twittericon.png"
import "aos/dist/aos.css";



function Contact() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
  return (
    <>
    <div className="contacts">
      <div className="contactcont">
      <div className="contact-style">
      <div className="contay" >
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
                                 <div className="flexin">
                                    <p>LET'S CONNECT!</p>
                                </div>
                                <div className="flexin">
                                <div className="flexinmedia">
                                   <img src={fbicon} style={{width: "45px", height: "45px"}} alt="fb-social-media"/>
                                   <img src={twittericon} style={{width: "45px", height: "45px"}} alt="twitter-social-media"/>
                                   <img src={instagramicon} style={{width: "45px", height: "45px"}} alt="ig-social-media"/>
                                    </div>
                                </div>
                            </div>
                            <div className="contbottom">
                          
                            <h3>Please complete the information below and we'll promptly follow up with more detaile service information</h3>
                           <div className="formcontainer">
                            <form action="/actionpage">
                                <div className="row">
                                    <div className="col-25">
                                        <label for="fname">First Name</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-25">
                                        <label for="lname">Last Name</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-25">
                                        <label for="email">Email</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="email" name="email" placeholder="Your email.." />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-25">
                                        <label for="country">Country</label>
                                    </div>
                                    <div className="col-75">
                                        <select id="country" name="country">
                                            <option value="usa">USA</option>
                                            <option value="canada">Canada</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-25">
                                        <label for="subject">Subject</label>
                                    </div>
                                    <div className="col-75">
                                        <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: "200px" }}></textarea>
                                    </div>
                                </div>
                                <div className="row">
                                    <input type="submit" value="Submit" />
                                </div>
                            </form>
                        </div>
                            
                        </div>
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

export default Contact;
