import React from 'react'
import Footer from '../Components/Footer';
import CustomNavbar from '../Components/Navbar';

import UserRegistration from '../Components/Registration/UserRegistration';


function RegisterPage() {
    return ( <> 
     <CustomNavbar/>
    <UserRegistration/>
    <Footer/>
    </> );
}

export default RegisterPage;