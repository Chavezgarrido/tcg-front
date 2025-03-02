import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom'; // Asegúrate de importar Link
import logo from '../assets/imgs/tcg-logo.png';
import '../assets/styles/Register.css'; 
import useAuth from '../hooks/useAuth'; // Importar el hook de autenticación

const Register = () => {
  const navigate = useNavigate(); 
  const { register } = useAuth(); // Obtener la función de registro del contexto

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Requerido'),
    lastName: Yup.string().required('Requerido'),
    email: Yup.string().email('Email inválido').required('Requerido'),
    password: Yup.string().min(6, 'Mínimo 6 caracteres').required('Requerido'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
      .required('Requerido'),
  });

  const handleSubmit = async (values) => {
    try {
      await register(values); // Llama a la función de registro
      alert('Registro exitoso');
      navigate('/'); // Redirigir a la página principal o a otra página
    } catch (error) {
      console.error('Error en el registro:', error);
      alert('Error en el registro. Intenta nuevamente.'); // Manejo de errores
    }
  };

  return (
    <div className="login-container"> {/* Usar la misma clase que en el login */}
      <div className="login-card"> {/* Usar la misma clase que en el login */}
        <img src={logo} alt="Logo" className="login-logo" onClick={() => navigate('/')} />
        
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <div className="login-form-group"> {/* Usar la misma clase que en el login */}
                <label htmlFor="firstName">Nombre</label>
                <Field 
                  type="text" 
                  id="firstName" 
                  name="firstName" 
                  placeholder="Ingrese su nombre" 
                  className="login-form-control" // Usar la misma clase que en el login
                />
                <ErrorMessage name="firstName" component="div" className="login-error" />
              </div>
              <div className="login-form-group"> {/* Usar la misma clase que en el login */}
                <label htmlFor="lastName">Apellido</label>
                <Field 
                  type="text" 
                  id="lastName" 
                  name="lastName" 
                  placeholder="Ingrese su apellido" 
                  className="login-form-control" // Usar la misma clase que en el login
                />
                <ErrorMessage name="lastName" component="div" className="login-error" />
              </div>
              <div className="login-form-group"> {/* Usar la misma clase que en el login */}
                <label htmlFor="email">Email</label>
                <Field 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="Ingrese su correo electrónico" 
                  className="login-form-control" // Usar la misma clase que en el login
                />
                <ErrorMessage name="email" component="div" className="login-error" />
              </div>
              <div className="login-form-group"> {/* Usar la misma clase que en el login */}
                <label htmlFor="password">Contraseña</label>
                <Field 
                  type="password" 
                  id="password" 
                  name="password" 
                  placeholder="Ingrese su contraseña" 
                  className="login-form-control" // Usar la misma clase que en el login
                />
                <ErrorMessage name="password" component="div" className="login-error" />
              </div>
              <div className="login-form-group"> {/* Usar la misma clase que en el login */}
                <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                <Field 
                  type="password" 
                  id="confirmPassword" 
                  name="confirmPassword" 
                  placeholder="Confirme su contraseña" 
                  className="login-form-control" // Usar la misma clase que en el login
                />
                <ErrorMessage name="confirmPassword" component="div" className="login-error" />
              </div>
              <button type="submit" className="login-btn-primary">Confirmar Registro</button>
            </Form>
          )}
        </Formik>
        <p>
          ¿Ya tienes una cuenta? <Link to="/login">Iniciar Sesión</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;