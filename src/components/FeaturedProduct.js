import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../assets/styles/FeaturedProduct.css';
import item2 from '../assets/imgs/productos-nuevos/item2.jpg';

const FeaturedProduct = () => {
  const [product, setProduct] = useState({
    id: 1, 
    name: 'Juego de mesa Dixit',
    price: '$21.990',
    image: item2,
    detailLink: '/product/1', 
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch('/api/featured-product'); 
        const data = await response.json();
        setProduct(data); 
      } catch (error) {
        console.error('Error al cargar el producto destacado:', error);
      }
    };

    fetchProduct();
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4 banner">Producto Destacado del Mes</h3>
      <Link to={`/product/${product.id}`} className="featured-card text-center">
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.price}</p>
        </div>
      </Link>
      <Link to={`/product/${product.id}`} className="btn btn-primary" aria-label={`Ver detalle de ${product.name}`}>
        Ver Detalle
      </Link>
    </div>
  );
};

export default FeaturedProduct;