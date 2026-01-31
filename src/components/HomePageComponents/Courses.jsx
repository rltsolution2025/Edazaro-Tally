import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';

const CourseCard = ({ course }) => (
  <Col md={4} key={course.id} className="mb-4">
    <Card className="h-100 border-0 shadow-sm">
      <div className="position-relative">
        <Card.Img variant="top" src={course.image} />
        <Badge bg="danger" className="position-absolute top-0 start-0 m-3">{course.tag}</Badge>
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-bold">{course.title}</Card.Title>
        <div className="text-muted small mb-3">
          <i className="bi bi-calendar-event text-danger me-1"></i> {course.duration}
        </div>
        <Card.Text className="text-secondary small flex-grow-1">
          {course.desc}
        </Card.Text>
        <Button className="btn-masai w-100 mt-2">Apply Now</Button>
      </Card.Body>
    </Card>
  </Col>
);

const Courses = ({ courses }) => {
  if (!courses) return null;

  return (
    <section id="courses" className="py-5">
      <Container>
        <h2 className="text-center fw-bold mb-2">Choose Your Path</h2>
        <p className="text-center text-muted mb-5">Industry-designed curriculum taught by expert engineers.</p>
        
        <Row>
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;