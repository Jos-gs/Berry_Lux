import React from 'react';
import './NavBar.css';
import logo from '../../assets/logo.png'; // Asegúrate de que sea el nuevo logo

const NavBar = () => {
  return (
    <nav className="navbar">
  <div className="nav-links left">
    <a href="#home" className="nav-link">QUIENES SOMOS</a>
    <a href="#productos" className="nav-link">PRODUCTOS</a>
  </div>
<div className="logo-container">
    <button className="logo-button" onClick={() => window.location.href='#home'}>
      <img src={logo} alt="Inicio" />
    </button>
  </div>
  <div className="nav-links right">
    <a href="#redes" className="nav-link">REDES SOCIALES</a>
    <a href="#contacto" className="nav-link">CONTACTANOS</a>
  </div>

  
</nav>

  );
};

export default NavBar;
