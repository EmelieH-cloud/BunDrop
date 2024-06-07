import React from 'react';
import { Link } from 'react-router-dom'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/bun-logo.png';
import CartLogo from './Cart/Cartlogo';
import FavoritesLogo from './Favorites/FavoritesLogo';

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
                        <Nav.Link as={Link} to="/menu" className='fs-2' >OUR MENU</Nav.Link> 
                        <Nav.Link as={Link} to="/signIn" className='fs-2'>SIGN IN</Nav.Link> 
                        <CartLogo/>
                        <FavoritesLogo/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar> 
    );
}

export default CustomNavbar;
