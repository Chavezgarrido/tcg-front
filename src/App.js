import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // GET /
import Login from './pages/Login'; // POST /inicio-sesion
import Register from './pages/Register'; // POST /registro
import AddProduct from './pages/AddProduct'; // POST /agregar
import EditProduct from './pages/EditProduct'; // PUT /editar/:id
import DeleteProduct from './pages/DeleteProduct'; // DELETE /eliminar/:id
import DashboardUser  from './pages/DashboardUser'; // GET /usuarios/{id}
import DashboardVendor from './pages/DashboardVendor'; // GET /usuarios/{id}/pedidos
import NotFound from './pages/NotFound'; // GET /notfound
import ProductDetailPage from './pages/ProductDetail'; // GET /producto/:id
import CartPage from './pages/CartPage'; // GET /carrito
import CategoryView from './pages/CategoryList'; // GET /categoría/:nombre
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/edit-product/" element={<EditProduct />} /> {/* Asegúrate de que el ID esté en la ruta */}
          <Route path="/delete-product/" element={<DeleteProduct />} /> {/* Asegúrate de que el ID esté en la ruta */}
          <Route path="/dashboard-user/:id" element={<DashboardUser  />} /> {/* Asegúrate de que el ID esté en la ruta */}
          <Route path="/dashboard-vendor/:id" element={<DashboardVendor />} /> {/* Asegúrate de que el ID esté en la ruta */}
          <Route path="/product/:id" element={<ProductDetailPage />} /> {/* Cambiado a ProductDetailPage */}
          <Route path="/cart" element={<CartPage />} />
          <Route path="/categories/:category" element={<CategoryView />} /> {/* Nueva ruta para categorías */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;