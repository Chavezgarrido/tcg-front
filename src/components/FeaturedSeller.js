import React, { useEffect, useState } from 'react';
import '../assets/styles/FeaturedSeller.css';
import vendedor1 from '../assets/imgs/productos-nuevos/vendedor1.jpg';

const FeaturedSeller = () => {
  const [seller, setSeller] = useState({
    name: 'La Forja de Stone Oficial',
    sales: '143 ventas en 30 días',
    image: vendedor1,
    profileLink: '/seller-profile',
  });

  useEffect(() => {
    const fetchSeller = async () => {
      try {
        const response = await fetch('/api/featured-seller'); 
        const data = await response.json();
        setSeller(data); 
      } catch (error) {
        console.error('Error al cargar el vendedor destacado:', error);
      }
    };

    fetchSeller();
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4 banner">Vendedor Destacado del Mes</h3>
      <div className="featured-card text-center"> 
        <img src={seller.image} alt={seller.name} className="seller-image" />
        <div className="card-body">
          <h5 className="card-title">{seller.name}</h5>
          <p className="card-text">{seller.sales}</p>
          <a href={seller.profileLink} className="btn btn-primary" aria-label={`Ver perfil de ${seller.name}`}>Ver Perfil</a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSeller;