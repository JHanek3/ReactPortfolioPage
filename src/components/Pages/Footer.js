import React from "react";
import { Navbar, Nav} from "react-bootstrap";

function Footer() {
  return (
    <Navbar className="justify-content-center footer" fixed="bottom">
      <Nav.Item>
        <Nav.Link className="footerLink" href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="footerLink" href="/projects">Projects</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="footerLink" href="https://github.com/JHanek3">Github</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="footerLink" href="https://www.linkedin.com/in/jonathon-hanek-731230177/">LinkedIn</Nav.Link>
      </Nav.Item>
    </Navbar>
  );
}

export default Footer;