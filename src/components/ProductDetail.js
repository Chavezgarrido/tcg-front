import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Navbar from './Navbar';
import Footer from './Footer';
import '../assets/styles/ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); 

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error al cargar el producto:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    const productWithQuantity = { ...product, quantity }; 
    addToCart(productWithQuantity);
    alert(`${product.name} agregado al carrito`);
  };

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  if (!product) {
    return <p>Cargando producto...</p>;
  }

  return (
    <div className="product-detail">
      <Navbar />
      <div className="hero-section">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-info">
          <h1>{product.name}</h1>
          <p><strong>Marca:</strong> {product.brand}</p>
          <p><strong>Precio:</strong> {product.price}</p>
          <p><strong>Stock:</strong> {product.stock}</p>
          <p>{product.description}</p>
          <div className="quantity-controls">
            <button onClick={decreaseQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={increaseQuantity}>+</button>
          </div>
          <button 
            className="btncustom btn-primary" 
            onClick={handleAddToCart} 
            aria-label={`Agregar ${product.name} al carrito`}
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;