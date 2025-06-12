// src/components/Home/Home.jsx
import React from 'react';
import styles from './Home.module.css';
import vinoImage from '../../assets/vino.png';
import exfoImage from '../../assets/exfo.png';
import exfoberry from '../../assets/exfoberry.jpeg';
import productImage from '../../assets/productos.jpeg';
import qrImage from '../../assets/qr.jpeg';
import vinoberry from '../../assets/vinoberry.jpeg';
import NavBar from '../Nav/NavBar';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: 'easeOut',
    },
  },
};

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <NavBar />

      <motion.section
        id="home"
        className={styles.heroSection}
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <div>
          <h1>Berry Lux</h1>
          <p>Subheading that sets up context, shares more info about the website, or generally gets people psyched to keep scrolling.</p>
          <button>↓</button>
        </div>
        <motion.img src={productImage} alt="Berry Products" variants={fadeInUp} />
      </motion.section>

      <motion.section
        id="productos"
        className={styles.productSection}
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <h1 className={styles.productTitle}>Productos</h1>
        <div className={styles.products}>
          <motion.div className={styles.product} variants={fadeInUp}>
            <div className={styles.productImageContainer}>
              <motion.img src={exfoImage} alt="Exfo Berry" variants={fadeInUp} />
            </div>
            <h3>Exfo Berry</h3>
            <p>Subheading that sets up context, shares more info about the website, or generally gets people psyched to keep scrolling.</p>
          </motion.div>
          <motion.div className={styles.product} variants={fadeInUp}>
            <div className={styles.productImage2Container}>
              <motion.img src={vinoImage} alt="Vino Berry" variants={fadeInUp} />
            </div>
            <h3>Vino Berry</h3>
            <p>Subheading that sets up context, shares more info about the website, or generally gets people psyched to keep scrolling.</p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="vinoberry"
        className={styles.exfoberrySection}
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
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
        <motion.img src={exfoberry} alt="VinoBerry Product" variants={fadeInUp} />
      </motion.section>

      <motion.section
        id="vinoberry"
        className={styles.vinoberrySection}
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <motion.img src={vinoberry} alt="VinoBerry Product" variants={fadeInUp} />
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
      </motion.section>

      <motion.section
        id="redes"
        className={styles.heroSection}
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <div>
          <h2>Facebook</h2>
          <p>Subheading that sets up context, shares more info about the website, or generally gets people psyched to keep scrolling.</p>
        </div>
        <motion.img src={qrImage} alt="Berry Products" variants={fadeInUp} />
        <div>
          <h2>Instagram</h2>
          <p>Subheading that sets up context, shares more info about the website, or generally gets people psyched to keep scrolling.</p>
        </div>
        <motion.img src={qrImage} alt="Berry Products" variants={fadeInUp} />
      </motion.section>

      <motion.section
        id="contacto"
        className={styles.contactSection}
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <h2>Contacto</h2>
        <div className={styles.contactBoxes}>
          <motion.div variants={fadeInUp}>
            <h4>PEDIDOS:</h4>
            <button>IR</button>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <h4>CONSULTAS:</h4>
            <button>IR</button>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <h4>RESERVAS:</h4>
            <button>IR</button>
          </motion.div>
        </div>
      </motion.section>

      <motion.footer
        className={styles.footer}
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <div className={styles.footerLeft}>
          <p>@sites.BerryLux</p>
          <div className={styles.socialIcons}>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>

        <div className={styles.footerRight}>
          <div>
            <h4>Colaborador</h4>
            <p>Gonzales S. Jose</p>
            <p>Page</p>
            <p>Page</p>
          </div>
          <div>
            <h4>Libro de reclamaciones:</h4>
            <a href="#">Link</a>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Home;
