import { useState } from 'react';

const useCart = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const removeFromCart = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const total = cartItems.reduce((acc, item) => acc + item.price, 0);

    return { cartItems, addToCart, removeFromCart, total };
};

export default useCart;