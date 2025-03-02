import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Asegúrate de que la ruta sea correcta
import Footer from '../components/Footer'; 
import '../assets/styles/NotFound.css'; 

const NotFound = () => {
  return (
    <div className="not-found">
      <Navbar /> {/* Agregamos la barra de navegación aquí */}
      <div className="not-found-content">
        <h1>404 - Página No Encontrada</h1>
        <p>Lo sentimos, la página que estás buscando no existe.</p>
        <Link to="/" className="back-button">Volver a la Página Principal</Link>
        {/* Puedes agregar más enlaces aquí si lo deseas */}
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;