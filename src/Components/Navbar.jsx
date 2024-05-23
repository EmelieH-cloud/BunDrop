import React from 'react'
import Logo from '../assets/bun-logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
    return ( <><nav class="navbar navbar-expand-lg sticky-top">
  <div class="container">
    <a class="navbar-brand" href="#">
          <Link class="nav-link" to="/">
           <img src={Logo} alt="logo"/>
          </Link>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <Link class="nav-link" to="/Menu">MENU</Link>
          <Link class="nav-link" to="/">SIGN IN</Link>
        </li>
      </ul>
    </div>
  </div>
</nav></> );
}

export default Navbar;