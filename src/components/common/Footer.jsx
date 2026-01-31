import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-5">
      <Container>
        <Row>
          <Col md={3} className="mb-4">
            <h5>masai<span className="text-danger">.</span></h5>
            <p className="text-muted small">Masai is a military-style career institute that trains people to become software developers.</p>
          </Col>
          <Col md={3} className="mb-4">
            <h6>Courses</h6>
            <ul className="list-unstyled text-muted small">
              <li>Full Stack</li>
              <li>Data Analytics</li>
              <li>Backend Development</li>
            </ul>
          </Col>
          <Col md={3} className="mb-4">
            <h6>Company</h6>
            <ul className="list-unstyled text-muted small">
              <li>About Us</li>
              <li>Hire From Us</li>
              <li>Contact</li>
            </ul>
          </Col>
          <Col md={3} className="mb-4">
            <h6>Support</h6>
            <ul className="list-unstyled text-muted small">
              <li>FAQ</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>
        </Row>
        <hr className="border-secondary" />
        <div className="text-center text-muted small">
          &copy; 2023 Masai Clone. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;