import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom'; // Asegúrate de importar Link
import logo from '../assets/imgs/tcg-logo.png';
import '../assets/styles/Login.css'; 
import useAuth from '../hooks/useAuth'; // Importar el hook de autenticación

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // Obtener la función de login del contexto

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Formato de correo electrónico inválido')
      .required('El correo electrónico es obligatorio'),
    password: Yup.string()
      .min(6, 'La contraseña debe tener al menos 6 caracteres')
      .required('La contraseña es obligatoria'),
  });

  const handleSubmit = async (values) => {
    try {
      // Aquí deberías hacer la llamada a tu API para autenticar al usuario
      // Simulando una respuesta exitosa
      if (values.email === "user@example.com" && values.password === "password") {
        await login(values); // Llama a la función de login
        navigate('/'); // Redirige a la página principal o a otra página
      } else {
        alert('Credenciales inválidas');
      }
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
      alert('Error en el inicio de sesión. Intenta nuevamente.'); // Manejo de errores
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <img src={logo} alt="Logo" className="login-logo" />
        
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <div className="login-form-group">
                <label htmlFor="email">Correo Electrónico</label>
                <Field 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="Ingrese su correo electrónico" 
                  className="login-form-control" 
                />
                <ErrorMessage name="email" component="div" className="login-error" />
              </div>
              <div className="login-form-group">
                <label htmlFor="password">Contraseña</label>
                <Field 
                  type="password" 
                  id="password" 
                  name="password" 
                  placeholder="Ingrese su contraseña" 
                  className="login-form-control" 
                />
                <ErrorMessage name="password" component="div" className="login-error" />
              </div>
              <button type="submit" className="login-btn-primary">Iniciar Sesión</button>
            </Form>
          )}
        </Formik>
        <p>
          <Link to="/recover-password">¿Olvidaste tu contraseña?</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;