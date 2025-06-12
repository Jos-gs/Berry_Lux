import React from 'react';
import './NavBar.css';
import logo from '../../assets/logo.png'; // Asegúrate de que sea el nuevo logo

const NavBar = () => {
  return (
    <nav className="navbar">
  <div className="nav-links left">
    <a href="#productos" className="nav-link">Site name</a>
    <a href="#servicios" className="nav-link">Site name</a>
  </div>
<div className="logo-container">
    <button className="logo-button" onClick={() => window.location.href='#home'}>
      <img src={logo} alt="Inicio" />
    </button>
  </div>
  <div className="nav-links right">
    <a href="#redes" className="nav-link">Site name</a>
    <a href="#contacto" className="nav-link">Site name</a>
  </div>

  
</nav>

  );
};

export default NavBar;
