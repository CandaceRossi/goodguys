import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";



function Contact() {
  return (
    <>
    <div className="contacts">
      <div className="contactcont"></div>
      <div className="contact-style"></div>
      <div className="contay" >
                    <h1>Contact Us Today For A Quote!</h1>
                    <h3>GoodGuys Has Served Greater ChicagoLand</h3>
                    <h3>Areas For Over 20 Years!</h3>

                </div>
    </div>
          <div className="brickdownchitown">
 <div className="brickup">
                        <div className="brickup1">
                            <h1>We welcome the opportunity to be of service.</h1>
                            <div className="line"></div>
                        </div>
                        <div className="bruckup">
                        <div className="contaflex">
                                <div className="flexin" >
                                    <p>Phone: (222)222-2222</p>
                                </div>
                                <div className="flexin" >
                                    <p>Email: goodguys@goodguys.com</p>
                                </div>
                            </div>
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
            {/* <Parallax featuredImage1={commercialshed} featuredImage2={commercialclean} commpar={true} isNeeded = {false} />
             <div className="imgcontainer">
                        <img src={commercialslick} alt="" />
                    </div> */}
   </>
  );
}

export default Contact;
