import React from 'react'; 
import { useCart } from '../context/CartContext';
import '../assets/styles/Cart.css';

const Cart = () => {
    const { cartItems, total, removeFromCart } = useCart();

    const handleConfirmPurchase = () => {
        if (cartItems.length === 0) {
            alert("No hay productos en el carrito para confirmar la compra.");
            return;
        }
        alert("Compra confirmada. Estaremos en contacto para la entrega.");
    };

    return (
        <div className="cart-container">
            <h2>Carrito de Compras</h2>
            {cartItems.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                cartItems.map(item => (
                    <div className="cart-item" key={item.id}>
                        <img src={item.image} alt={item.name} className="cart-item-image" />
                        <div className="cart-item-details">
                            <p className="cart-item-name">{item.name}</p>
                            <p className="cart-item-price">${item.price}</p>
                            <button className="remove-button" onClick={() => removeFromCart(item.id)}>Eliminar</button>
                        </div>
                    </div>
                ))
            )}
            <h3>Total: ${total}</h3>
            <button className="confirm-button" onClick={handleConfirmPurchase}>Confirmar Compra</button>
        </div>
    );
};

export default Cart;