import React from 'react';
import { Container, Row, Col } from  'react-bootstrap';

const Footer = () => (
  <footer>
    <Container>
      <Row>
        <Col lg="12">
            <span>Copyleft - Victor Lia Fook 2020</span>
            <p className="font-italic">This website is built using Twitter Bootstrap and all functionalities based in AngularJS and Jquery. Feel free to check the code at my <a href="https://github.com/victorliafook">Github!</a></p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;