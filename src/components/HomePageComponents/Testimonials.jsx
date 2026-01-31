import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Testimonials = ({ testimonials }) => {
  if (!testimonials) return null;

  return (
    <section className="py-5 text-white" style={{backgroundColor: '#111827'}}>
      <Container>
        <h2 className="text-center fw-bold mb-5">Success Stories</h2>
        <Row>
          {testimonials.map(test => (
            <Col md={4} key={test.id} className="mb-4">
              <div className="p-4 rounded-3" style={{backgroundColor: '#1f2937'}}>
                <i className="bi bi-quote text-danger display-6 mb-3 d-block"></i>
                <p className="text-secondary fst-italic mb-4">"{test.text}"</p>
                <div className="d-flex align-items-center gap-3">
                  <img src={test.image} alt={test.name} className="rounded-circle border border-danger" width="50" height="50" />
                  <div>
                    <h6 className="mb-0 fw-bold">{test.name}</h6>
                    <small className="text-muted">{test.role}</small>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;