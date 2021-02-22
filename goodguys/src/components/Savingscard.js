import React from "react";
import girloncarpet from "../images/girloncarpet.jpg";


function Savingscard() {
  return (
    <div className="savingscard">
        <img src={girloncarpet} alt="" />
        <div className="savingscardcont">
        <h1>15-25% OFF</h1>
        <h4>With our Discound Savings Programs</h4>
        <p>SEE YEAR ROUND SAVINGS</p>
        <p>SIGN UP TO RECEIVE SPECIAL OFFERS</p>
        </div>
    </div>
  );
}

export default Savingscard;