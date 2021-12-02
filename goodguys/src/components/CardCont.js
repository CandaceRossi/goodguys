import React from "react";
import { Link } from "react-router-dom";
import Data from "./Data.js";


const CardCont = () => {
// console.log("this is props", props)
  return (
    <div className="items-list-wrapper">
    <div className="itemdiv"><p>TRUSTED CLEANING SPECIALISTS FOR OVER 35 YEARS, SERVING CHICAGO AND SURROUNDING AREAS</p></div>
      {Data.map(item => {
          console.log("is this item", item)
        return (
          <div className="item-card" key={item.id}>
            <div className="item-card-container">
              <Link to={`/CardCont/${item.id}`}>
                <img
                style={{width: "250px", height: "250px"}}
                  className="item-card-image"
                  src={item.imageUrl}
                  alt={item.name}
                />
              </Link>
            </div>

            <div className="item-card-info">
              <p>{item.name}</p>
              <p>{item.jargon}</p>
              <button
                // onClick={addItem}
                className="md-button shop-button"
              >
                {item.clickit}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardCont;