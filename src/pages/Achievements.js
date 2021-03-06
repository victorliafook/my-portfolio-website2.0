import React from 'react';
import { Container, Row, Col } from  'react-bootstrap';
import NavBreadcrumbs from '../components/NavBreadcrumbs';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ExperienceTable from '../components/ExperienceTable';
import experienceData from '../data/experience';

const Achievements = () => {
  const academicData = experienceData.academic;
  const coursesData = experienceData.courses;
  const certificationsData = experienceData.certifications;  
  
  return (
    <>
    <Navigation/>
    <Container>
      <Row>
        <Col lg="12">
          <h1 className="pb-2 mt-4 mb-2 border-bottom">
            Achievements&nbsp;
            <small className="d-inline-block text-muted font-weight-light">Courses</small>
          </h1>
          <NavBreadcrumbs hierarchyList={[{name: 'Achievements', active: true}]}/>
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <h2 className="pb-2 mt-4 mb-2">
            <i className="fas fa-university mr-2"></i>
            Academic Accomplishments
          </h2>
        </Col>
        <Col lg="12">
          <ExperienceTable experienceList={academicData} />
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <h2 className="pb-2 mt-4 mb-2">
            <i className="fas fa-certificate mr-2"></i>
            Certifications
          </h2>
        </Col>
        <Col lg="12">
          <ExperienceTable experienceList={certificationsData} />
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <h2 className="pb-2 mt-4 mb-2">
            <i className="fas fa-book mr-2"></i>
            Courses
          </h2>
        </Col>
        <Col lg="12">
          <ExperienceTable experienceList={coursesData} />
        </Col>
      </Row>
    </Container>
    <Footer/>
    </>
  );
}

export default Achievements;