import React, {useState} from 'react';
import './App.scss';
import { Route, Switch } from "react-router-dom";
import NavContainer from "./components/NavContainer";
import CleaningSpecialties from "./components/CleaningSpecialties";
import Contact from "./components/Contact";
import CustomCarpetServices from "./components/CustomCarpetServices";
import Home from "./components/Home";
import Reviews from "./components/Reviews";
import Savings from "./components/Savings";
import WhyGoodGuys from "./components/WhyGoodGuys";
import Data from "./components/Data.js";
import CardCont from "./components/CardCont.js";
import Card from "./components/Card.js";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

function App() {
  // const [dataitems] = useState(Data);
  // console.log("this is items data", dataitems)
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  //toggle for side nav drawer
  const drawerToggleClickHandler = () => {
  setSideDrawerOpen((prevState) => {
    // return {sideDrawerOpen: !prevState.sideDrawerOpen};
     return setSideDrawerOpen(!prevState);
    });
  };
//backdrop handler for shading window when side nav is popped open
  const backdropClickHandler = () => {
    // const myElement = document.getElementByClass("backdrop")
    // myElement.click(myElement.css("display", "none"))
    setSideDrawerOpen(false)
// return {sideDrawerOpen: false};
  };
  //set backdrop to conditionally render with handler
  let backdrop;
  if (sideDrawerOpen) {
    console.log("backdrop dropped")
    backdrop = <Backdrop bdclick={backdropClickHandler} />;
  }
  return (
    <div className="App">
     <SideDrawer show={sideDrawerOpen} />
      {backdrop}
     <div className="fixed-top">
        <NavContainer drawerClickHandler={drawerToggleClickHandler}/>
       
      </div>
     {/* <div className="component-list"> */}
            {/* <div className="nav-style">
              <NavbarComp />
            </div> */}

       <Switch>
              <Route exact path="/" component={Home} />
               {/* <Route
                exact
                path="/CardCont"
                render={props => (
                  <CardCont items={dataitems} {...props}  />
                )}
              />
              <Route
                exact
                path="/CardCont/:id"
                render={props => (
                  <Card items={dataitems} {...props}  />
                )}
              /> */}
               <Route exact path="/Contact" component={Contact} />
              <Route exact path="/CleaningSpecialties" component={CleaningSpecialties} />
              <Route exact path="/CustomCarpetServices" component={CustomCarpetServices} />
               <Route exact path="/WhyGoodGuys" component={WhyGoodGuys} />
                <Route exact path="/Savings" component={Savings} />
                 <Route exact path="/Reviews" component={Reviews} /> 
        </Switch>
        </div>
    // </div>
  );
}

export default App;
