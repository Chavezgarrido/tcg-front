import React, { createContext, useContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        // Recuperar el carrito del localStorage si existe
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            // Verificar si el producto ya está en el carrito
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                // Si ya existe, puedes optar por actualizar la cantidad o no hacer nada
                return prevItems; // No agregar duplicados
            }
            return [...prevItems, product];
        });
    };

    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
    };

    const total = cartItems.reduce((acc, item) => {
        // Asegúrate de convertir el precio a número para el cálculo
        const price = parseFloat(item.price.replace(/[^0-9.-]+/g, "")); // Eliminar el símbolo de dólar y convertir a número
        return acc + (price || 0); // Sumar el precio o 0 si no se puede convertir
    }, 0);

    useEffect(() => {
        // Guardar el carrito en localStorage cada vez que cambie
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <CartContext.Provider value={{ cartItems, total, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};