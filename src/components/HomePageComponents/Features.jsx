import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Features = () => {
  const features = [
    { icon: 'bi-file-earmark-text-fill', title: 'ISA Model', text: 'Study now, pay later. Pay only when you get a job above 5 LPA.' },
    { icon: 'bi-clock-fill', title: '9-9-6 Schedule', text: 'Imitate the real work environment. 9 hours a day, 6 days a week.' },
    { icon: 'bi-hand-thumbs-up-fill', title: 'Unlimited Mocks', text: 'Daily mock interviews and DSA problems to crack technical rounds.' },
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center fw-bold mb-5">Why Masai?</h2>
        <Row>
          {features.map((f, index) => (
            <Col md={4} key={index} className="mb-4">
              <div className="bg-white p-4 rounded-3 shadow-sm h-100">
                <div className="bg-danger bg-opacity-10 text-danger p-3 rounded-3 d-inline-block mb-3">
                  <i className={`bi ${f.icon} fs-3`}></i>
                </div>
                <h5>{f.title}</h5>
                <p className="text-muted small">{f.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;