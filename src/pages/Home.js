import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Carousel from './Carousel'
import Navigation from './Navigation'
import Footer from './Footer';

const Home = () => (
  <>
    <Navigation/>
      <Carousel/>
      <Container>
        <Row>
          <Col lg="12">
            <h1 className="pb-2 mt-4 mb-2 border-bottom">It's nice to meet you!</h1>
          </Col>
          <Col lg="12">
            <p>My name is Victor Lia Fook, I am a Software Engineer from Brazil, making a living in the beautiful Australia! Please feel free to take a look at this website, and learn more about me and my work and passion: Computer Programming!</p>
              <p>The main goal of this website is to serve as a simple portfolio of my skills and work as a programmer.</p>
              <p>However, I also want this to be a place to share some of my experience and personal projects - including code, programming techniques and tips. After all, knowledge is to be shared. So, I hope you enjoy it!</p>
          </Col>
        </Row>
        <div className="card bg-light">
          <div className="card-body row">
            <div className="col-lg-8">
            <p>This site is an example of a simple React application. It was built using some tools and concepts to illustrate how this framework works. If you are interested in how to code using React, it is a good starting point.</p>
            </div>
            <div className="col-lg-4">
            <Button variant="info" size="lg" block>
              Read More
            </Button>
            </div>
          </div>
        </div>
      </Container>
    <Footer/>
  </>
);

export default Home;
