import React, {useState} from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
  Navigate,
  useNavigate,
  Link
} from "react-router-dom";
import LoginButton from "../components/Login/LoginButton";
import LogoutButton from "../components/Login/LogoutButton";

function Navbar() {
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
      
      <div class="container">
        
        <a class="navbar-brand me-2" href="https://mdbgo.com/">
          <img
            src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
            height="16"
            alt="MDB Logo"
            loading="lazy"
            
          />
        </a>
    
        
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarButtonsExample"
          aria-controls="navbarButtonsExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
    
       
        <div class="collapse navbar-collapse" id="navbarButtonsExample">
          
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="http://localhost:3000">Dashboard</a>
            </li>
          </ul>
          
    
          <div class="d-flex align-items-center">
          <LoginButton />
            <LogoutButton />
            
          </div>
        </div>
        
      </div>
      
    </nav>
        </>
    )
}

export default Navbar;