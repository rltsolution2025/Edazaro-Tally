import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Hero = ({ stats }) => {
  return (
    <section className="hero-bg py-5 mt-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="text-center text-lg-start">
            <h1 className="display-3 fw-bold mb-3">
              Launch your career in <br />
              <span className="text-masai-red">Product Development</span>
            </h1>
            <p className="lead text-secondary mb-4">
              Pay nothing until you get a job. India's only career institute with a Pay-after-placement model.
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-lg-start mb-5">
              <Button className="btn-masai">Apply Now</Button>
              <Button className="btn-outline-masai">Download Curriculum</Button>
            </div>
            
            <div className="d-flex gap-4 border-top pt-3 justify-content-center justify-content-lg-start">
              {stats && stats.map(stat => (
                <div key={stat.id}>
                  <h4 className="fw-bold">{stat.number}</h4>
                  <small className="text-muted">{stat.label}</small>
                </div>
              ))}
            </div>
          </Col>
          <Col lg={6} className="position-relative">
            <img 
              src="https://picsum.photos/seed/masaicoding/600/500" 
              alt="Hero" 
              className="img-fluid rounded-4 shadow" 
            />
            <div className="position-absolute bottom-0 start-0 translate-middle-x bg-white p-3 rounded-3 shadow d-none d-md-flex align-items-center gap-3" style={{bottom: "-20px"}}>
              <div className="bg-danger bg-opacity-10 p-2 rounded-circle text-danger">
                <i className="bi bi-briefcase-fill fs-4"></i>
              </div>
              <div>
                <h6 className="fw-bold mb-0">Pay After Placement</h6>
                <small className="text-muted">Zero upfront cost</small>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;