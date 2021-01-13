import React from "react";
import { Route, NavLink } from "react-router-dom";
import Description from "./Description";
import Shipping from "./Shipping";
import Data from "./Data.js";

const Card = () => {
//   const item = Data.find(thing => thing.id === Number(props.match.params.id));
 const item = Data;
  return (
    <div className="item-wrapper">
      <div className="item-header">
        <div className="image-wrapper">
          <img src={item.imageUrl} alt={item.name} />
        </div>
        <div className="item-title-wrapper">
          <h2>{item.name}</h2>
          <h4>{item.jargon}</h4>
        </div>
      </div>
      <button className="md-button shop-button">
        {item.clickit}
      </button>

      <nav className="item-sub-nav">
        <NavLink exact to={`/CardCont/${item.id}`}>
          Description
        </NavLink>
        <NavLink to={`/CardCont/${item.id}/shipping`}>Shipping</NavLink>
      </nav>
      <Route
        exact
        path="/CardCont/:id"
        render={() => <Description item={item.description} />}
      />
      <Route
        path="/CardCont/:id/shipping"
        render={() => <Shipping item={item.shipping} />}
      />
    </div>
  );
};
export default Card;