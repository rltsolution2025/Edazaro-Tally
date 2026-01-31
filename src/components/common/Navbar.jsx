import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="white" expand="lg" fixed="top" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand href="#">
          masai<span className="text-masai-red">.</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-auto">
            <Nav.Link href="#courses">Courses</Nav.Link>
            <Nav.Link href="#fees">Fee Structure</Nav.Link>
            <Nav.Link href="#hiring">Hiring Partners</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
          </Nav>
          <Button variant="danger" className="btn-masai">Apply Now</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;