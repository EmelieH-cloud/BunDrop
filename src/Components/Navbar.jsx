import React from 'react';
import { Link } from 'react-router-dom'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/bun-logo.png';

function CustomNavbar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary navbar">
            <Container>
                <Navbar.Brand>
                    <Link className="nav-link" to="/">
                        <img src={Logo} alt="logo" className='logo'/>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link as={Link} to="/Menu" className='fs-2' >MENU</Nav.Link> 
                        <Nav.Link as={Link} to="/SignIn" className='fs-2'>SIGN IN</Nav.Link> 
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar> 
    );
}

export default CustomNavbar;
