import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ProductCard from './ProductCard';
import '../assets/styles/FeaturedCategory.css';
import item1 from '../assets/imgs/productos-nuevos/cat1.jpg';
import item2 from '../assets/imgs/productos-nuevos/cat2.png';
import item3 from '../assets/imgs/productos-nuevos/item3.jpg';

const FeaturedCategory = () => {
  const [featuredProducts, setFeaturedProducts] = useState([
    { id: 1, name: 'Palafin Ex Box Esp', price: '$24.990', image: item1, description: 'Descripción del producto 1' },
    { id: 2, name: 'Vibrant Paldea Mini Tin', price: '$12.990', image: item2, description: 'Descripción del producto 2' },
    { id: 3, name: 'Paldea Evolved Booster', price: '$21.990', image: item3, description: 'Descripción del producto 3' },
  ]);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await fetch('/api/featured-category');
        const data = await response.json();
        setFeaturedProducts(data);
      } catch (error) {
        console.error('Error al cargar los productos destacados:', error);
      }
    };

    fetchFeaturedProducts();
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4 banner">Categoría Destacada del Mes</h3>
      <Row>
        {featuredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Row>
    </div>
  );
};

export default FeaturedCategory;