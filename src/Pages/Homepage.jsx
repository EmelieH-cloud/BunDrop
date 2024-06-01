import React from 'react'
import CustomNavbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Showcase from '../Components/Showcase';
import Footer from '../Components/Footer';
import FavoritesLogo from '../Components/Favorites/FavoritesLogo';
import CartLogo from '../Components/Cart/Cartlogo';

function Homepage() {
    return ( 
    <>
    <CustomNavbar/>
    <Hero/>
    <Showcase/>
    <Footer/>
    <CartLogo/>
   <FavoritesLogo/>
    </> );
}

export default Homepage;