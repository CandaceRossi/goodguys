import React from "react";
import { Carousel } from "react-bootstrap";
import dogandbaby from "../images/dogandbaby.jpg";
import familycouch from "../images/familycouch.jpg";
import familytime from "../images/familytime.jpg";

const CarouselComp = () => {
  return (
  <>
            <Carousel className="carousel-fade" data-ride="carousel">
                <Carousel.Item className="carousel-item active">
                    <img className="slidescss" src={dogandbaby} alt="first slide" />
                    <Carousel.Caption className="carousel-caption">
                        <p>First text</p>
                        <h3 className="h3-responsive">Light mask</h3>
                         <button>SCHEDULE NOW</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img className="slidescss" src={familycouch} alt="second slide" />
                    <Carousel.Caption className="carousel-caption">
                        <p>Secondary text</p>
                        <h3 className="h3-responsive">Strong mask</h3>
                        <button>SCHEDULE NOW</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img className="slidescss" src={familytime} alt="third slide" />
                    <Carousel.Caption className="carousel-caption">
                        <p>Third text</p>
                        <h3 className="h3-responsive">Slight mask</h3>
                         <button>SCHEDULE NOW</button>
                    </Carousel.Caption>
                </Carousel.Item>
            
            </Carousel>

</>
  );
};

export default CarouselComp;