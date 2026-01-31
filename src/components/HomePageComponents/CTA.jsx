import React from 'react';
import { Container, Button } from 'react-bootstrap';

const CTA = () => {
  return (
    <section className="py-5 text-center">
      <Container>
        <h2 className="fw-bold mb-3">Ready to start your journey?</h2>
        <p className="text-muted mb-4">Applications are now open for the upcoming batch.</p>
        <Button className="btn-masai btn-lg px-5">Apply Now</Button>
      </Container>
    </section>
  );
};

export default CTA;