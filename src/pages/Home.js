import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navigation from './Navigation'

const Home = () => (
  <>
    <Navigation/>
    <Container>
        <Row>
            <Col lg="12"l>
                <h1>It's nice to meet you!</h1>
            </Col>
            <Col lg="12">
                <p>My name is Victor Lia Fook, I am a Software & Web Developer from Brazil, making a living in the beautiful Australia! Please feel free to take a look at this website, and learn more about me as well as my work and passion: Computer Programming!</p>

                <p>The main goal of this website is to serve as a fast portfolio of my skills and work as a programmer. By the way, I can help you make your web project on a freelance or contract basis.</p>

                <p>However, I also want this to be a place to share some of my experience with the community - Some code, techniques and tips. Sure, I know that there are plenty of specialized blogs and websites that certainly do it better than me but I believe that knowledge is to be shared. So, I hope you enjoy it!</p>
            </Col>
        </Row>

    </Container>
  </>
);

export default Home;
