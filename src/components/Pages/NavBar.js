import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../../App.css"

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand style={{color: "white"}} href="#home">Portfolio Website</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="My Stuff" id="basic-nav-dropdown">
            <NavDropdown.Item href="/">Home</NavDropdown.Item>
            <NavDropdown.Item href="/projects">Projects</NavDropdown.Item>
            <NavDropdown.Item href="https://github.com/JHanek3">GitHub</NavDropdown.Item>
            <NavDropdown.Item href="https://www.linkedin.com/in/jonathon-hanek-731230177/">LinkedIn</NavDropdown.Item>
            <NavDropdown.Item href="https://rocky-hamlet-72532.herokuapp.com/">Vue Website</NavDropdown.Item>
            <NavDropdown.Item href="http://hanekpro.com/">Old Portfolio Page</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
