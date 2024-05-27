import React from 'react';
import Footer from '../Components/Footer';
import UserProfile from '../Components/UserProfile';
import {Link} from 'react-router-dom';
import Logo from '../assets/logo.png'

function UserProfilePage() {
    return (
        <>
        <div className='user-profile-navbar'>
         <Link className="nav-link" to="/">
          <img src={Logo} alt="logo" className='logo'/>
          </Link>
        </div>
            <UserProfile/>
            <Footer />
        </>
    );
}

export default UserProfilePage;
