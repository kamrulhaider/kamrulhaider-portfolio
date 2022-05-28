import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo192.png';

const Footer = () => {


    return (
        <div>
            <div className="container d-flex flex-column align-items-center">
                <Navbar.Brand as={Link} className="logo fs-1 text-light" to="/">
                    <img height="auto" width="150px" src={logo} alt="" />
                </Navbar.Brand>
                <h6 className="text-muted mt-2">Made by Kamrul Haider Chowdhury 	&copy; {new Date().getFullYear()}</h6>
                <hr />
            </div>
        </div>
    );
};

export default Footer;