import React, { useEffect, useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import '../assets/styles/NewProducts.css';

const NewProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/new-products'); 
        const data = await response.json();
        setProducts(data); 
      } catch (error) {
        console.error('Error al cargar los productos:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4 banner">Productos Nuevos</h3>
      <Row>
        {products.map(product => (
          <Col md={3} key={product.id} className="mb-4">
            <Card className="product-card">
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text className="text-muted">{product.price}</Card.Text>
                <button className="btn btn-primary">Agregar al Carrito</button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default NewProducts;