import React from 'react';
import { Container, Row, Col } from  'react-bootstrap';
import NavBreadcrumbs from '../components/NavBreadcrumbs';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ExperienceTable from '../components/ExperienceTable';
import experienceData from '../data/experience';

const WorkExperience = () => {
  const jobsData = experienceData.jobs;  
  
  return (
    <>
    <Navigation/>
    <Container>
      <Row>
        <Col lg="12">
          <h1 className="pb-2 mt-4 mb-2 border-bottom">Work Experience</h1>
          <NavBreadcrumbs hierarchyList={[{name: 'Work Experience', active: true}]}/>
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <h2 className="pb-2 mt-4 mb-2">
            <i className="fas fa-briefcase mr-2"></i>Job History
          </h2>
        </Col>
        <Col lg="12">
          <ExperienceTable experienceList={jobsData} />
        </Col>
      </Row>
    </Container>
    <Footer/>
    </>
  );
}

export default WorkExperience;