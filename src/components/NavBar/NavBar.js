import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/shalom_logo.svg";
import { Link } from "react-scroll";

export default function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="90"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Shalom Billing Services
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#About">
              <Link to="About-section" spy={true} smooth={true} duration={800}>
                About Us
              </Link>
            </Nav.Link>
            <Nav.Link href="#Services">
              <Link
                to="Services-section"
                spy={true}
                smooth={true}
                duration={800}
              >
                Services
              </Link>
            </Nav.Link>
            <Nav.Link href="#Hours">
              <Link to="Hours-section" spy={true} smooth={true} duration={800}>
                Hours
              </Link>
            </Nav.Link>
            <Nav.Link href="#Contact">
              <Link
                to="Contact-section"
                spy={true}
                smooth={true}
                duration={800}
              >
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// <nav className="Navbar">
//   <ul>
//     <li>
//   <Link to="About-section" spy={true} smooth={true} duration={800}>
//     About Us
//   </Link>
//     </li>
//     <li>
//   <Link to="Services-section" spy={true} smooth={true} duration={800}>
//     Services
//   </Link>
//     </li>
//     <li>
//   <Link to="Costs-section" spy={true} smooth={true} duration={800}>
//     Costs
//   </Link>
//     </li>
//     <li>
//   <Link to="Hours-section" spy={true} smooth={true} duration={800}>
//     Hours
//   </Link>
//     </li>
//     <li>
//   <Link to="Contact-section" spy={true} smooth={true} duration={800}>
//     Contact
//   </Link>
//     </li>
//   </ul>
//   </nav>
