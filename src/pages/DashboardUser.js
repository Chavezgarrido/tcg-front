import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 
import Swal from 'sweetalert2'; 
import '../assets/styles/DashboardUser.css'; 

const UserDashboard = () => {
  const [activeSection, setActiveSection] = useState('account');
  const [userData, setUserData] = useState(null);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = 1; // Reemplaza con el ID del usuario actual
      const userResponse = await fetch(`/usuarios/${userId}`);
      const user = await userResponse.json();
      setUserData(user);

      const ordersResponse = await fetch(`/usuarios/${userId}/pedidos`);
      const userOrders = await ordersResponse.json();
      setOrders(userOrders);
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    Swal.fire({
      title: '¿Estás seguro de querer cerrar sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, cerrar sesión',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('Cerrando sesión...');
        navigate('/'); // Redirige al usuario a la página de inicio
      }
    });
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'account':
        return (
          <div>
            <h2>Mi Cuenta</h2>
            {userData ? (
              <div>
                <p>Email: {userData.email}</p>
                <p>Nombre: {userData.nombre}</p>
                <p>Apellido: {userData.apellido}</p>
                <p>Tipo de Usuario: {userData.tipo_usuario}</p>
                <p>Fecha de Registro: {userData.fecha_registro}</p>
              </div>
            ) : (
              <p>Cargando información de la cuenta...</p>
            )}
          </div>
        );
      case 'orders':
        return (
          <div>
            <h2>Mis Pedidos</h2>
            {orders.length > 0 ? (
              <ul>
                {orders.map(order => (
                  <li key={order.id}>
                    <p>Pedido ID: {order.id}</p>
                    <p>Fecha: {order.fecha_pedido}</p>
                    <p>Estado: {order.estado}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No tienes pedidos anteriores.</p>
            )}
          </div>
        );
      default:
        return (
          <div>
            <h2>Bienvenido a tu cuenta</h2>
            <p>Aquí puedes ver tus pedidos anteriores y la información de tu cuenta.</p>
          </div>
        );
    }
  };

  return (
    <div className="user-dashboard">
      <Navbar />
      <div className="dashboard-content" style={{ marginTop: '20px' }}> {/* Agregado margen superior */}
        <aside className="sidebar">
          <ul>
            <li>
              <Link to="#" onClick={() => setActiveSection('account')}>Mi Cuenta</Link>
            </li>
            <li>
              <Link to="#" onClick={() => setActiveSection('orders')}>Mis Pedidos</Link>
            </li>
          </ul>
        </aside>

        <main className="main-content">
          {renderContent()}
        </main>
      </div>

      <div className="logout-button">
        <button onClick={handleLogout}>Cerrar Sesión</button>
      </div>

      <Footer />
    </div>
  );
};

export default UserDashboard;