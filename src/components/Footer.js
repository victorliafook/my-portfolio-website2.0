import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ExternalLink from './ExternalLink';

const Footer = () => (
  <footer>
    <Container>
      <Row>
        <Col lg='12'>
          <span>Copyleft - Victor Lia Fook 2020</span>
          <p className='font-italic'>This website was built using Twitter Bootstrap and all functionalities based on React. Feel free to check the code at my <ExternalLink url='https://github.com/victorliafook'>Github!</ExternalLink></p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;