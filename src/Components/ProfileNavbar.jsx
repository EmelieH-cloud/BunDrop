import React from 'react'
import { Link, useNavigate} from 'react-router-dom'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import MemberLogo from '../assets/bunbuddy.png';
import { UserContext } from '../Context/UserContext';
import { useContext } from 'react';

function ProfileNavbar() 
{
    const {logout} = useContext(UserContext);
     const navigate = useNavigate(); 

 function handleLogOut()
  {
      logout();
      navigate('/SignIn');
  }
    return ( <>
     <Navbar expand="lg" className="bg-body-tertiary navbar">
            <Container>
                <Navbar.Brand>
                        <img src={MemberLogo} alt="logo" className='logo'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} className='fs-2' onClick={handleLogOut}>SIGN OUT</Nav.Link> 
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar> 
    </> );
}

export default ProfileNavbar;