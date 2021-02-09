import React from "react";


const SideDrawer = props => {
    let drawerClasses = ["side-drawer"];
    if(props.show) {
        drawerClasses = "side-drawer open";
    }
return (
    <nav className={drawerClasses}>
        <ul>
            <li>
                <a href="/">Home</a>
                 <a href="/Contact">Contact</a>
                  <a href="/Projects">Projects</a>
                   <a href="/Carpet Cleaning Services">Carpet Cleaning Services</a>
                    <a href="/Upholstry Cleaning Services">Upholstry Cleaning Services</a>
                     <a href="/Why GoodGuys">Why GoodGuys</a>
                      <a href="/Savings">Savings</a>
                      <a href="/Reviews">Reviews</a>
            </li>
        </ul>
    </nav>
)}

export default SideDrawer;