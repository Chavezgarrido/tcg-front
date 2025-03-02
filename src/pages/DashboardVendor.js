import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 
import Swal from 'sweetalert2'; 
import '../assets/styles/DashboardVendor.css'; 

const VendorDashboard = () => {
  const [activeSection, setActiveSection] = useState('account'); 
  const navigate = useNavigate(); 

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
        navigate('/'); 
      }
    });
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'account':
        return (
          <div>
            <h2>Mi Cuenta</h2>
            <p>Aquí puedes ver y editar tu información de cuenta.</p>
          </div>
        );
      case 'orders':
        return (
          <div>
            <h2>Mis Pedidos</h2>
            <p>Aquí puedes ver tus pedidos anteriores.</p>
          </div>
        );
      case 'sales':
        return (
          <div>
            <h2>Menú Ventas</h2>
            <p>Aquí puedes gestionar tus ventas.</p>
            <div className="sales-buttons">
              <button onClick={() => navigate('/add-product')} className="sales-button">Agregar Producto</button>
              <button onClick={() => navigate('/edit-product')} className="sales-button">Editar Producto</button>
              <button onClick={() => navigate('/delete-product')} className="sales-button">Eliminar Producto</button>
            </div>
          </div>
        );
      
      default:
        return (
          <div>
            <h2>Bienvenido a tu cuenta de vendedor</h2>
            <p>Aquí puedes gestionar tus productos y ver tus pedidos anteriores.</p>
          </div>
        );
    }
  };

  return (
    <div className="vendor-dashboard">
      <Navbar /> 
      <div className="dashboard-content" style={{ marginTop: '20px' }}>
        <aside className="sidebar">
          <ul>
            <li>
              <Link to="#" onClick={() => setActiveSection('account')}>Mi Cuenta</Link>
            </li>
            <li>
              <Link to="#" onClick={() => setActiveSection('orders')}>Mis Pedidos</Link>
            </li>
            <li>
              <Link to="#" onClick={() => setActiveSection('sales')}>Menú Ventas</Link>
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

export default VendorDashboard;