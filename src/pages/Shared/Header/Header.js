import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/logo192.png";

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Navbar expand="lg" className="fixed-top p-0">
      <Container className="myNav g-md-5">
        <Navbar.Brand as={Link} className="logo" to="/">
          <img className="px-2" height="auto" width="100px" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-md-auto m-md-0 m-auto mobileNav">
            <Nav.Link
              onClick={scrollToTop}
              as={Link}
              className="myMenu my-lg-0 my-3"
              to="/"
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={scrollToTop}
              as={Link}
              className="myMenu my-lg-0 my-3"
              to="/projects"
            >
              Projects
            </Nav.Link>
            <Nav.Link
              onClick={scrollToTop}
              as={Link}
              className="myMenu my-lg-0 my-3"
              to="/blogs"
            >
              Blogs
            </Nav.Link>
            <Nav.Link
              onClick={scrollToTop}
              as={Link}
              className="myMenu my-lg-0 my-3"
              to="/about"
            >
              About Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
