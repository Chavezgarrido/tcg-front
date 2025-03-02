import React from 'react';
import ProductDetailComponent from '../components/ProductDetail'; // Asegúrate de que esta ruta sea correcta
import useProducts from '../hooks/useProducts';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
    const { id } = useParams();
    const { products, isLoading, error } = useProducts(); // Asegúrate de que useProducts devuelva isLoading y error
    const product = products.find(p => p.id === parseInt(id));

    if (isLoading) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            {product ? <ProductDetailComponent product={product} /> : <p>Producto no encontrado.</p>}
        </div>
    );
};

export default ProductDetailPage;