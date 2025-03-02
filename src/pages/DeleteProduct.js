import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/DeleteProduct.css'; // Asegúrate de importar el CSS
import logo from '../assets/imgs/tcg-logo.png';


const DeleteProduct = () => {
  const [productId, setProductId] = useState('');
  const navigate = useNavigate(); // Para redirigir después de la eliminación

  const handleDelete = async (event) => {
    event.preventDefault();
    const confirmDelete = window.confirm(`¿Estás seguro de que deseas eliminar el producto con ID ${productId}?`);

    if (confirmDelete) {
      try {
        const response = await fetch(`/api/products/${productId}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          alert('Producto eliminado exitosamente');
          navigate('/products'); // Redirigir a la lista de productos
        } else {
          alert('Error al eliminar el producto. Intenta nuevamente.');
        }
      } catch (error) {
        alert('Error en la eliminación. Intenta nuevamente.');
      }
    }
  };

  return (
    <div className="delete-product-container">
      <img src={logo} alt="Logo" className="logo"/> 
      <h2>Eliminar Producto</h2>
      <form onSubmit={handleDelete}>
        <div>
          <label>ID del Producto:</label>
          <input
            type="text"
            name="productId"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            required
          />
        </div>
        <button type="submit">Eliminar</button>
      </form>
    </div>
  );
};

export default DeleteProduct;