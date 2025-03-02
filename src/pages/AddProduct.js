import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/AddProduct.css';
import logo from '../assets/imgs/tcg-logo.png';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
    stock: '',
    image: null,
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      image: event.target.files[0], 
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('category', product.category);
    formData.append('price', product.price);
    formData.append('description', product.description);
    formData.append('stock', product.stock);
    formData.append('image', product.image);

    setLoading(true); // Iniciar carga

    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Producto agregado');
        alert('Producto agregado exitosamente');
        setProduct({ name: '', category: '', price: '', description: '', stock: '', image: null }); // Resetear formulario
        navigate('/products'); 
      } else {
        console.error('Error al agregar el producto');
        alert('Error al agregar el producto. Intenta nuevamente.');
      }
    } catch (error) {
      console.error('Error en la adición:', error);
      alert('Error en la adición. Intenta nuevamente.');
    } finally {
      setLoading(false); // Finalizar carga
    }
  };

  const isFormValid = () => {
    return (
      product.name &&
      product.category &&
      product.price > 0 && // Validar que el precio sea mayor que 0
      product.description &&
      product.stock > 0 && // Validar que el stock sea mayor que 0
      product.image
    );
  };

  return (
    <div className="add-product-container">
      <img src={logo} alt="Logo" className="logo"/>
      <h2>Agregar Producto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Categoría:</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Precio:</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
            min="0" // Asegura que el precio no sea negativo
          />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label>Stock Disponible:</label>
          <input
            type="number"
            name="stock"
            value={product.stock}
            onChange={handleChange}
            required
            min="0" // Asegura que el stock no sea negativo
          />
        </div>
        <div>
          <label>Imagen del Producto:</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        <button type="submit" disabled={!isFormValid() || loading}>
          {loading ? 'Agregando...' : 'Agregar Producto'}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;