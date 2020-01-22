import React from 'react';
import { Container, Row, Col } from  'react-bootstrap';
import Navigation from './Navigation';

const PageNotFound = () => (
  <>
  <Navigation/>
  <Container>
    <Row className='mt-5'>
      <Col lg='12'>
        <div className='mx-auto' style={ {'font-size': '3rem', width: '336px'} }>
          <span>
            <i className="text-secondary fas fa-skull-crossbones fa-8x" aria-hidden="true"></i>
          </span>
        <h1 className='text-center text-secondary display-3'>404</h1>
        </div>
      </Col>
    </Row>
  </Container>
  </>
);

export default PageNotFound;