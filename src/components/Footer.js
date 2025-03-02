import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../assets/styles/Footer.css';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start footer">
      <div className="container p-4">
        <h5 className="footer-title">Información de Contacto</h5>
        <p>
          Dirección: Santiago de Uriona #1888, Quinta Normal, Santiago.<br />
          Teléfonos: +56988939712<br />
          Email: felipejchavezgarrido@gmail.com - fe.chavezg@duocuc.cl<br />
          Horarios: Lunes a Viernes, 9:00 AM - 5:00 PM
        </p>
        <h5 className="footer-title">Redes Sociales</h5>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} size="2x" className="mx-2" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FontAwesomeIcon icon={faTwitter} size="2x" className="mx-2" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} size="2x" className="mx-2" />
          </a>
        </div>
      </div>
      <div className="text-center p-3 footer-bottom">
        © 2025 Rincón TCG
      </div>
    </footer>
  );
};

export default Footer;