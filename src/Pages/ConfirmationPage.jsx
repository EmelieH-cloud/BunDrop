import React from 'react'
import Confirmation from '../Components/Payment/Confirmation';
import Footer from '../Components/Footer';
import CustomNavbar from '../Components/Navbar';

function ConfirmationPage() {
    return ( <>
     <CustomNavbar/> 
     <Confirmation/>
     <Footer/>
     </> );
}

export default ConfirmationPage;