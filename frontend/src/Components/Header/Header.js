import React from "react";
import { Container, Nav, Navbar, NavItem } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              className="headerLogo"
              src="https://upload.wikimedia.org/wikipedia/commons/1/15/Deloitte_Logo.png"
              alt="Deloitte."
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Audit People Manager</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar>
        <NavItem>Project Details</NavItem>
        <NavItem>Employee Details</NavItem>
      </Navbar>
    </div>
  );
};

export default Header;
