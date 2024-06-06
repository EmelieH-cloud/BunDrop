import React from 'react'
import Menu from '../Components/Menu';
import CustomNavbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import CartLogo from '../Components/Cart/Cartlogo';
import FavoritesLogo from '../Components/Favorites/FavoritesLogo';

function Menupage() {
    return ( 
    <>
    <CustomNavbar/>
    <Menu/>
    <Footer/>
    </> );
}
export default Menupage;