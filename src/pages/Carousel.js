import React from 'react';
import { Carousel } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

import phpImg from '../img/php-code.jpg';
import javaImg from '../img/java-code.jpg';
import javascriptImg from '../img/javascript-code.jpg';

const HomeCarousel = () => (
  <Carousel className="h-25 w-100">
    <Carousel.Item className="item">
      <img
          src={javaImg}
          alt="Java"
        />
      <Carousel.Caption>
        <h3>Java</h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className="item">
      <img
          src={javascriptImg}
          alt="Javascript"
        />
      <Carousel.Caption>
        <h3>Javascript</h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className="item">
      <img
          src={phpImg}
          alt="PHP"
        />
      <Carousel.Caption>
        <h3>PHP</h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default HomeCarousel;
