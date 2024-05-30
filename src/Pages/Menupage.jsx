import React from 'react'
import Menu from '../Components/Menu';
import CustomNavbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import CartLogo from '../Components/Cart/Cartlogo';

function Menupage() {
    return ( 
    <>
    <CustomNavbar/>
    <Menu/>
    <Footer/>
    <CartLogo/>
    </> );
}

export default Menupage;