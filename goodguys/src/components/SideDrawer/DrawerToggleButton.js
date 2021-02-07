import React from "react";

const DrawerToggleButton = props => {
    return (
    <button className="togglebutton" onClick={props.click}>
        <div className="togglebutton__line" />
        <div  className="togglebutton__line"/>
        <div className="togglebutton__line"/>
    </button>
)};

export default DrawerToggleButton;