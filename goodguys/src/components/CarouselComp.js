import React from "react";
import { Carousel } from "react-bootstrap";
import childwithcat from "../images/childwithcat.jpg";
import familycouch from "../images/familycouch.jpg";
import familyroom from "../images/familyroom.jpg";
import familytime from "../images/familytime.jpg";

const CarouselComp = () => {
  return (
  <>
            <Carousel className="carousel-fade" data-ride="carousel">
                <Carousel.Item className="carousel-item active">
                    <img className="slidescss"  src={childwithcat} alt="first slide" />
                    <Carousel.Caption className="carousel-caption">
                        <p>When Cat Meets Baby Meets Carpet.</p>
                        <h3 className="h3-responsive">Time For A Rug Cleaning?</h3>
                         <button>SCHEDULE NOW</button>
                    </Carousel.Caption>
                </Carousel.Item>
                  <Carousel.Item className="carousel-item">
                    <img className="slidescss" src={familytime} alt="third slide" />
                    <Carousel.Caption className="carousel-caption">
                        <p>Make Your Family Room Carpet.</p>
                        <h3 className="h3-responsive">The New Hangout.</h3>
                         <button>SCHEDULE NOW</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img className="slidescss" src={familycouch} alt="second slide" />
                    <Carousel.Caption className="carousel-caption">
                        <p>For the Ones Who Really Matter.</p>
                        <h3 className="h3-responsive">Clean Upholstry</h3>
                        <button>SCHEDULE NOW</button>
                    </Carousel.Caption>
                </Carousel.Item>
              
            
            </Carousel>

</>
  );
};

export default CarouselComp;