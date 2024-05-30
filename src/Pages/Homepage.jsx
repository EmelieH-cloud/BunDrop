import React from 'react'
import CustomNavbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Showcase from '../Components/Showcase';
import Footer from '../Components/Footer';
import CartLogo from '../Components/Cart/Cartlogo';

function Homepage() {
    return ( 
    <>
    <CustomNavbar/>
    <Hero/>
    <Showcase/>
    <Footer/>
    <CartLogo/>
    </> );
}

export default Homepage;