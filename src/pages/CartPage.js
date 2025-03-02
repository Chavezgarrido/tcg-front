import React from 'react';
import Navbar from '../components/Navbar'; // Asegúrate de que la ruta sea correcta
import Cart from '../components/Cart'; // Asegúrate de que la ruta sea correcta
import Footer from '../components/Footer'; // Asegúrate de que la ruta sea correcta
import { CartProvider } from '../context/CartContext'; // Asegúrate de que la ruta sea correcta

const CartPage = () => {
    return (
        <CartProvider>
            <div className="cart-page">
                <Navbar />
                <Cart />
                <Footer />
            </div>
        </CartProvider>
    );
};

export default CartPage;