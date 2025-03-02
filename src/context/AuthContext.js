import React, { createContext, useState, useEffect } from 'react';

// Crear el contexto
export const AuthContext = createContext();

// Proveedor del contexto
export const AuthProvider = ({ children }) => {
  const [user, setUser ] = useState(() => {
    // Recuperar el usuario del localStorage si existe
    const savedUser  = localStorage.getItem('user');
    return savedUser  ? JSON.parse(savedUser ) : null;
  });

  const login = (userData) => {
    if (userData && userData.username) { // Validación básica
      setUser (userData);
      localStorage.setItem('user', JSON.stringify(userData)); // Guardar en localStorage
    } else {
      console.error('Datos de usuario inválidos');
    }
  };

  const logout = () => {
    setUser (null);
    localStorage.removeItem('user'); // Eliminar del localStorage
  };

  useEffect(() => {
    // Efecto para manejar la persistencia del usuario
    const savedUser  = localStorage.getItem('user');
    if (savedUser ) {
      setUser (JSON.parse(savedUser ));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};