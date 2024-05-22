import React from 'react'
import Logo from '../assets/bun-logo.png';

function Navbar() {
    return ( <><nav class="navbar navbar-expand-lg sticky-top">
  <div class="container">
    <a class="navbar-brand" href="#">
   <img src={Logo} alt="logo"/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">MENU</a>
          <a class="nav-link" href="#">LOGIN</a>
        </li>
      </ul>
    </div>
  </div>
</nav></> );
}

export default Navbar;