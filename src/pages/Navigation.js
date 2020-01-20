import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

const Navigation = () => (
  <Navbar fixed="top" bg="dark" variant="dark">
    <Container>
      <Link to="/" className="navbar-brand">Home Page</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/achievements" className="nav-link">Certifications/Courses</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navigation;
