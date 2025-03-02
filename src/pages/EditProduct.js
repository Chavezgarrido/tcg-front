import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../assets/styles/EditProduct.css'; 
import logo from '../assets/imgs/tcg-logo.png';


const EditProduct = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const [product, setProduct] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
    stock: '',
    image: null,
  });

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

    try {
      const response = await fetch(`/api/products/${id}`, {
        method: 'PUT',
        body: formData,
      });

      if (response.ok) {
        alert('Producto editado exitosamente');
        navigate('/products'); 
      } else {
        alert('Error al editar el producto. Intenta nuevamente.');
      }
    } catch (error) {
      alert('Error en la edición. Intenta nuevamente.');
    }
  };

  return (
    <div className="edit-product-container">
    <img src={logo} alt="Logo" className="logo"/>      
    <h2>Editar Producto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID del Producto:</label>
          <input type="text" value={id} readOnly />
        </div>
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
          />
        </div>
        <div>
          <label>Imagen del Producto:</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit">Editar Producto</button>
      </form>
    </div>
  );
};

export default EditProduct;