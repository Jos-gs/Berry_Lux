import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="top-bar">
        <div className="logo">
          {/* Botón del logo que redirige al home */}
         
        </div>
        <div className="title">
          <img src="./public/img/Recurso1.png" alt="" />
        </div>
      </div>

      <div className="menu-bar">
        <span>INTRODUCCION</span>
        <span>SUBESTACION ELECTRICA</span>
        <span>BD-ST</span>
        <span>CCO</span>
        <span>CONCLUCION</span>
      </div>
    </div>
  );
};

export default NavBar;
