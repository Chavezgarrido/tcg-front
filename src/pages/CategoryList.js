import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../assets/styles/CategoryList.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const CategoryView = () => {
    const { category } = useParams(); 
    const [products, setProducts] = useState([]);
    const [banner, setBanner] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await fetch(`https://dummyjson.com/products/category/${category}`);
          if (!response.ok) {
            throw new Error('Error fetching products');
          }
          const data = await response.json();
          setProducts(data.products);
          setBanner(`${category}`);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchProducts();
    }, [category]);
  
    return (
      <div className="category-view">
        <Navbar />
        <div className="hero-section">
          <h2>{banner}</h2>
        </div>
        <div className="product-list">
          {loading && <p>Cargando productos...</p>}
          {error && <p>Error: {error}</p>}
          {!loading && !error && products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Footer />
      </div>
    );
};
  
export default CategoryView;