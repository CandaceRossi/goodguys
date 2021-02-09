import React from "react";
import CarouselComp from "./CarouselComp";
import CardCont from "../components/CardCont";
import Aos from "aos";
import "aos/dist/aos.css";



function Home() {
  return (
    <div className="comp-list-home">
    <CarouselComp />
    <div className="cardzindexarea"></div>
    <CardCont />
    </div>
  );
}

export default Home;
