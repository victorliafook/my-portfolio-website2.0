import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
                <p>My name is Victor Lia Fook, I am a Software Engineer from Brazil, making a living in the beautiful Australia! Please feel free to take a look at this website, and learn more about me as well as my work and passion: Computer Programming!</p>

                <p>The main goal of this website is to serve as a simple portfolio of my skills and work as a programmer.</p>

                <p>However, I also want this to be a place to share some of my experience with the community - Some code, techniques and tips. Sure, I know that there are plenty of specialized blogs and websites that certainly do it better than me but I believe that knowledge is to be shared. So, I hope you enjoy it!</p>
            </Col>
        </Row>

    </Container>
    <Footer/>
  </>
);

export default Home;
