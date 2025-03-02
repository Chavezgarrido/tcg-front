import React, { useEffect, useState } from 'react';
import '../assets/styles/RegisteredUsers.css';

const RegisteredUsers = () => {
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users'); 
        const data = await response.json();
        setTotalUsers(data.length); 
      } catch (error) {
        console.error('Error al cargar los usuarios:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4 banner">Usuarios Registrados</h3>
      <p className="text-center">Total de usuarios registrados: <strong>{totalUsers}</strong></p>
    </div>
  );
};

export default RegisteredUsers;