import React from "react";
import CarouselComp from "./CarouselComp";
import CardCont from "../components/CardCont";


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
