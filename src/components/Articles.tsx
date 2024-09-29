import "../App.css"; // need to change this
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";

import Drunk from "../assets/Drunk.jpg";
import Gazette from "../assets/Gazette.jpg";
import Tribune from "../assets/Tribune.jpg";

function CarouselPage() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="carousel">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            src={Gazette}
            alt="The Dusty Aggie Gazette"
            className="carouselImage"
          />
          <Carousel.Caption>
            <a className="link" href="/#/ArticleOne">
              <h2>The Dusty Aggie Gazette</h2>
            </a>

            <h5>Checkout this Teams Weekly!</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={Tribune}
            alt="The Aggie Frontier Tribune"
            className="carouselImage"
          />
          <Carousel.Caption>
            <a className="link" href="/#/ArticleTwo">
              <h2>The Aggie Frontier Tribune</h2>
            </a>
            <h5>Checkout this Teams Weekly!</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Drunk} alt="The Daily Drunkard" className="carouselImage" />
          <Carousel.Caption>
            <a className="link" href="/#/ArticleThree">
              <h2>The Daily Drunkard</h2>
            </a>
            <h5>Checkout this Teams Weekly!</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselPage;
