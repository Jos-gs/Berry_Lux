// src/components/Home/Home.jsx
import React from 'react';
import styles from './Home.module.css';
import vinoImage from '../../assets/vino.png';
import exfoImage from '../../assets/exfo.png';
import exfoberry from '../../assets/exfoberry.jpeg';
import productImage from '../../assets/productos.jpeg';
import qrImage from '../../assets/qr.jpeg'; // asegúrate que este archivo exista
import NavBar from '../Nav/NavBar'; // ⬅️ AÑADIDO
import vinoberry from '../../assets/vinoberry.jpeg'; // Asegúrate de que este archivo exista

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
  <h1 className={styles.productTitle}>Productos</h1>
  <div className={styles.products}>
    <div className={styles.product}>
      <div className={styles.productImageContainer}>
        <img src={exfoImage} alt="Exfo Berry" />
      </div>
      <h3>Exfo Berry</h3>
      <p>Subheading that sets up context, shares more info about the website, or generally gets people psyched to keep scrolling.</p>
    </div>
    <div className={styles.product}>
      <div className={styles.productImage2Container}>
        <img src={vinoImage} alt="Exfo Berry" />
      </div>
      <h3>Vino Berry</h3>
      <p>Subheading that sets up context, shares more info about the website, or generally gets people psyched to keep scrolling.</p>
    </div>

  </div>
</section>


            {/* VINOBERRY */}
      <section id="vinoberry" className={styles.exfoberrySection}>
        <div className={styles.exfoberryContent}>
          <h1>ExfoBerry</h1>
          
          <div className={styles.exfoberryText}>
            <h3>Subheading</h3>  
            <p>Body text for whatever you'd like to expand on the main point.</p>

            <h3>Subheading</h3>  
            <p>Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes.</p>

            <h3>Subheading</h3>  
            <p>Body text for whatever you'd like to add more to the main point. It provides details, explanations, and context.</p>
          </div>
        </div>
        <img src={exfoberry} alt="VinoBerry Product" />
      </section>


      {/* VINOBERRY */}
      <section id="vinoberry" className={styles.vinoberrySection}>
        <img src={vinoberry} alt="VinoBerry Product" />
        <div className={styles.vinoberryContent}>
          <h1>VinoBerry</h1>
          <div className={styles.vinoberryText}>
            <h3>Subheading</h3>  
            <p>Body text for whatever you'd like to expand on the main point.</p>

            <h3>Subheading</h3>  
            <p>Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes.</p>

            <h3>Subheading</h3>  
            <p>Body text for whatever you'd like to add more to the main point. It provides details, explanations, and context.</p>
          </div>
        </div>
        
      </section>

      {/* Hero Section */}
      <section id="redes" className={styles.heroSection}>
        <div>
          <h1>Berry Lux</h1>
          <p>Subheading that sets up context, shares more info about the website, or generally gets people psyched to keep scrolling.</p>
          <button>↓</button>
        </div>
        <img src={productImage} alt="Berry Products" />
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
