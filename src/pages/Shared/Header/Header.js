import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo192.png'

const Header = () => {
    return (
        <Navbar expand="lg" className="sticky-top p-0">
            <Container className="myNav g-md-5">
                <Navbar.Brand as={Link} className="logo" to="/">
                    <img className='px-2' height="auto" width="100px" src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-md-auto m-md-0 m-auto mobileNav">
                        <Nav.Link as={Link} className="myMenu" to="/">Home</Nav.Link>
                        <Nav.Link as={Link} className="myMenu" to="/projects">Projects</Nav.Link>
                        <Nav.Link as={Link} className="myMenu" to="/blogs">Blogs</Nav.Link>
                        <Nav.Link as={Link} className="myMenu" to="/about">About Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;