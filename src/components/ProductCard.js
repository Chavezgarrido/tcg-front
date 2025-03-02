import React from 'react';
import { Card, Col } from 'react-bootstrap'; 
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} agregado al carrito`);
  };

  return (
    <Col md={4} className="mb-3">
      <Card className="featured-card">
        <Card.Img variant="top" src={product.image} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text className="text-muted">{product.price}</Card.Text>
          <button 
            className="btn btn-primary" 
            onClick={handleAddToCart} 
            aria-label={`Agregar ${product.name} al carrito`}
          >
            Agregar al Carrito
          </button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;