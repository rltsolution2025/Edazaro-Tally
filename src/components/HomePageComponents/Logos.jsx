import React from 'react';
import { Container } from 'react-bootstrap';

const Logos = () => {
  return (
    <section className="py-4 bg-white border-bottom">
      <Container className="text-center">
        <p className="text-uppercase text-muted small fw-bold letter-spacing-1">Our Graduates Work At</p>
        <div className="d-flex flex-wrap justify-content-center gap-5 fw-bold text-secondary opacity-50" style={{fontSize: '1.5rem'}}>
          <span>Flipkart</span>
          <span>Ola</span>
          <span>Urban Company</span>
          <span>Swiggy</span>
          <span>Paytm</span>
          <span>OYO</span>
        </div>
      </Container>
    </section>
  );
};

export default Logos;