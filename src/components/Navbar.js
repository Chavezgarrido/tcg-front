import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import '../assets/styles/Navbar.css';
import logo from '../assets/imgs/tcg-logo.png';
import useAuth from '../hooks/useAuth'; 

const Navbar = () => {
  const { user, logout } = useAuth(); 

  const handleLogout = () => {
    logout(); 
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid px-4">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-text-top" />
          Rincón TCG 
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
          <div className="d-flex align-items-center">
            <Dropdown className="mx-2 ">
              <Dropdown.Toggle id="dropdown-basic" size="lg" className="btn btn-outline-light">
                Categorías
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/categories/accesorios">Accesorios</Dropdown.Item>
                <Dropdown.Item as={Link} to="/categories/cartas-y-sets">Cartas y sets</Dropdown.Item>
                <Dropdown.Item as={Link} to="/categories/juegos-de-mesa">Juegos de mesa</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <form className="d-flex mx-3">
              <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" style={{ width: '450px', height: '38px' }} />
              <button className="btn btn-outline-light" type="submit">Buscar</button>
            </form>
          </div>
          <div className="d-flex">
            {user ? ( 
              <>
                <Link className="btn btn-outline-light mx-2" to="/dashboard-user">
                  Acceso usuario
                </Link>
                <button className="btn btn-outline-light" onClick={handleLogout}>
                  Cerrar Sesión
                </button>
              </>
            ) : (
              <>
                <Link className="btn btn-outline-light mx-2" to="/register">
                  Registrarse
                </Link>
                <Link className="btn btn-outline-light" to="/login">
                  Iniciar Sesión
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;