// src/components/Home/Home.jsx
import React from 'react';
import styles from './Home.module.css';
import vinoImage from '../../assets/vino.png';
import exfoImage from '../../assets/exfo.png';
import productImage from '../../assets/productos.jpeg';
import qrImage from '../../assets/qr.jpeg'; // asegúrate que este archivo exista
import NavBar from '../Nav/NavBar'; // ⬅️ AÑADIDO

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      {/* Navbar */}
      <NavBar /> {/* ⬅️ AÑADIDO */}

      {/* Hero Section */}
      <section id="home" className={styles.heroSection}>
        <div>
          <h1>Berry Lux</h1>
          <p>Subheading that sets up context, shares more info about the website, or generally gets people psyched to keep scrolling.</p>
          <button>↓</button>
        </div>
        <img src={productImage} alt="Berry Products" />
      </section>

      {/* Productos */}
      <section id="productos" className={styles.productSection}>
        <h2>Productos</h2>
        <div className={styles.products}>
          <div className={styles.product}>
            <img src={exfoImage} alt="Exfo Berry" />
            <h3>Exfo Berry</h3>
            <p>Subheading that sets up context, shares more info about the website...</p>
          </div>
          <div className={styles.product}>
            <img src={vinoImage} alt="Vino Berry" />
            <h3>Vino Berry</h3>
            <p>Subheading that sets up context, shares more info about the website...</p>
          </div>
        </div>
      </section>

      {/* Redes Sociales */}
      <section id="redes">
        <h2>Redes sociales</h2>
        <div className={styles.socials}>
          <div>
            <img src={qrImage} alt="Instagram QR" />
            <p>@VINOBERRY2025</p>
          </div>
          <div>
            <img src={qrImage} alt="Instagram QR" />
            <p>@VINOBERRY2025</p>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className={styles.contactSection}>
        <h2>Contacto</h2>
        <div className={styles.contactBoxes}>
          <div>
            <h4>PEDIDOS:</h4>
            <button>Button</button>
          </div>
          <div>
            <h4>CONSULTAS:</h4>
            <button>Button</button>
          </div>
          <div>
            <h4>RESERVAS:</h4>
            <button>Button</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
