import React from "react";

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <nav className="anavforfooter">
                
                {/* <a className="iconsdisappear" style={{display: "flex", height: "auto", margin: "0px", width: "90px"}}><img style={{margin: "0px", marginRight: "10px", width: "84px", height:"auto"}} src={houzzicon} alt="houzz" /></a>
                <a className="iconsdisappear" style={{display: "flex", height: "auto", margin: "0px", width: "44px"}}><img style={{margin: "0px", marginRight: "0px", width: "24px", height:"auto"}} src={instagramicon} alt="instagram" /></a>
                <a className="iconsdisappear" style={{display: "flex", height: "auto", margin: "0px", width: "47px"}}><img style={{margin: "0px", marginRight: "10px", width: "26px", height:"26px"}} src={twittericon} alt="twitter" /></a> */}
                    <a id="atagforfooter" href="/">HOME</a>
                    <a id="atagforfooter" href="/Mission">CONTACT</a>
                    <a id="atagforfooter" href="/Projects">SAVINGS</a>
                    <a id="atagforfooter" href="/Contact">REVIEWS</a>
                </nav>
            </footer>
        </div>
    );
    //need to add other font awesome library for brands/social media icons
};

export default Footer;