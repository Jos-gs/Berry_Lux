// src/components/Nav/NavBar.jsx
import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      
      <ul className="nav-links">
        <li><a href="#home">Inicio</a></li>
        <li><a href="#productos">Productos</a></li>
        <div className="logo">
        <img src="../../assets/logo.png" alt="Berry Lux Logo" /> {/* asegúrate de tener este logo */}
      </div>
        <li><a href="#redes">Redes</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
