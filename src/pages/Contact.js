import React from 'react';
import { Container, Row, Col } from  'react-bootstrap';
import NavBreadcrumbs from '../components/NavBreadcrumbs';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => (
  <>
  <Navigation/>
  <Container>
    <Row>
      <Col lg='12'>
        <h1 className='pb-2 mt-4 mb-2 border-bottom'>
          Contact
          <small className='ml-3 text-muted font-weight-light'>My details</small>
        </h1>
        <NavBreadcrumbs hierarchyList={[{name: 'Contact', active: true}]}/>
      </Col>
    </Row>
    <Row>
      <Col lg='8'>
        <iframe width="100%" height="400px" frameBorder="0" scrolling="no" 
          marginHeight="0" marginWidth="0"
          title="find me"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.444247900129!2d151.12677521521255!3d-33.95541938063256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b9f9fe9abb47%3A0xd9c75777a3656825!2sSeaforth+St%2C+Bexley+NSW+2207!5e0!3m2!1sen!2sau!4v1517573037449">
        </iframe>
      </Col>
      <Col lg='4'>
        <h3 className='pb-2 mt-4 mb-2'>Contact Details</h3>
        <p>Seaforth Street<br/>Bexley, NSW 2207<br/>Sydney, Australia</p>
        <p><i className='fa fa-envelope-o mr-2'></i> 
          <a href='mailto:victorliafook@gmail.com'>victorliafook@gmail.com</a>
        </p>
        <ul className='list-unstyled list-inline list-social-icons'>
          <li className='list-inline-item'>
            <a target='_blank' href='http://www.linkedin.com/in/victorliafook/' rel='noopener noreferrer'><i className='fab fa-linkedin fa-2x'></i></a>
          </li>
          <li className='list-inline-item'>
            <a target='_blank' href='http://github.com/victorliafook' rel='noopener noreferrer'><i className='fab fa-github-alt fa-2x'></i></a>
          </li>
			    <li className='list-inline-item'>
            <a target='_blank' href='http://stackoverflow.com/users/4911877/victor-lia-fook' rel='noopener noreferrer'><i className='fab fa-stack-overflow fa-2x'></i></a>
          </li>
          <li className='list-inline-item'>
            <a target='_blank' href='https://www.hackerrank.com/victorliafook' rel='noopener noreferrer'><i className='fab fa-hackerrank fa-2x'></i></a>
          </li>
        </ul>
      </Col>
    </Row>
  </Container>
  <hr/>
  <Footer/>
  </>
)

export default About;