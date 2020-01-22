import React from 'react';
import { Link } from 'react-router-dom';
import ExternalLink from '../components/ExternalLink';
import { Container, Row, Col, Image } from  'react-bootstrap';
import Navigation from './Navigation';
import Footer from './Footer';
import aboutImg from '../img/sydney.jpg';

const About = () => (
  <>
  <Navigation/>
  <Container>
    <Row>
      <Col lg="12">
        <h1 className="pb-2 mt-4 mb-2 border-bottom">
          About
          <small className="ml-3 text-muted font-weight-light">Who am I?</small>
        </h1>
      </Col>
    </Row>
    <Row>
      <Col lg="6">
        <Image src={aboutImg} fluid/>
      </Col>
      <Col lg="6">
        <h2 className="pb-2 mt-4 mb-2">Victor Pessoa de Azevedo Lia Fook</h2>
        <p>I am a brazilian computer programmer and I have been working with web development since 2010, when I got my first job.</p>
        <p>In 2011 I got a Bachelor's Degree in Computer Science, at Universidade Federal do Ceará - UFC, where I learned all the computational fundamentals and principles such as algorithms, data structures, logics and many other amazing subjects which made me fell in love with Computer Science.</p>
        <p>In 2014 I got a MBA in IT Governance, at Universidade de Fortaleza - UNIFOR, in which I learned more about organisational skills, continuous improvement cycle, process management and quality - all very important in the software development lifecycle.</p>
        <p>During all these years I got well versed in many languages and technologies, such as PHP, Java, Javascript, C, SQL, HTML, CSS, among others. It is also crucial to know widely used frameworks/toolkits, so I have a grasp on some such as React, AngularJS, Lumen, Bootstrap among others; </p>
        <p>I have also been working for 3 years using cloud technologies & infrastruture, mostly AWS and Google's GCP.</p>
        <p>I am really into problem solving & algorithms so I enjoy websites like Hackerrank and Leetcode - they help us not to get so rusty over time.</p>
        <p>For more details about my professional experience, please take a look at my LinkedIn profile or this website's <Link to='/jobs'>Work Experience</Link> and <Link to='/achievements'>Courses</Link> sections!</p>
      </Col>
    </Row>
    <Row>
      <Col lg='12'>
        <h2 className="pb-2 mt-4 mb-2 border-bottom">Australia</h2>
        <p>In 2012 I decided that I would live in Australia. Lucky me, I am a programmer. Every year the Australian Government makes a <ExternalLink url='https://immi.homeaffairs.gov.au/visas/working-in-australia/skill-occupation-list' text='list'/> with many occupations they lack in their labour market. Software Developers are usually included in that list.</p>
        <p>Next step, I needed to know how to speak English. After hard work and some unsuccessful attempts, I managed to pass on the IELTS Exam with an overall band of 8.0 with no skill below 7.0. That was one of the requirement to be entitled to an Australian Skilled Visa.</p>
        <p>After a lot of paperwork, waiting and money spent, in October 2016 I finally got the <ExternalLink url='https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-independent-189' text='Permanent Resident visa'/>, which gives me the right to work and live here in Australia!</p>
      </Col>
    </Row>
  </Container>
  <Footer/>
  </>
)

export default About;