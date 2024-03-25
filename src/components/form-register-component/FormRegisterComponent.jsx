import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackendFetchApi from '../../services/BackendFetchApi';
import Alerts from "../alerts-component/Alerts";


const FormRegisterComponent = ({ handleLogin }) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const sweetAlert = Alerts();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await BackendFetchApi.register(formData);
            console.log("Usuario registrado correctamente:", response);
            
            sweetAlert.showSuccessAlert("¡Registro exitoso!", "El usuario ha sido registrado correctamente.");
            
            setTimeout(() => {
              handleLogin();
              navigate("/");
            }, 1000);

          } catch (error) {
            console.error("Error al registrar usuario:", error);
            
            if (error.response && error.response.data && error.response.data.error) {
              setErrorMessage(error.response.data.error);
            } else {
              setErrorMessage("Error al registrarte. Por favor, verifica que los campos estén correctos.");
            }
          }
    };
    
    return (
        <div>
            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto rounded-lg p-6 bg-customDark shadow-2xl sm:rounded-3xl dark:border-gray-600 my-7">
                <h1 className='mb-5 text-white text-lg'>¿No tienes cuenta? Regístrate!</h1>
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                <div className="mb-5">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-white ">Nombre</label>
                    <input type="text" id="name" name='name' value={formData.name} onChange={handleChange} className="bg-gray-500 bg-opacity-20 border border-opacity-20 border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Coder" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white ">Email</label>
                    <input type="text" id="email" name='email' value={formData.email} onChange={handleChange} className="bg-gray-500 bg-opacity-20 border border-opacity-20 border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="femcoder@hotmail.com" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Contraseña</label>
                    <input type="password" id="password" name='password' value={formData.password} onChange={handleChange} className="bg-gray-500 bg-opacity-20 border border-opacity-20 border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='*******' required />
                </div>
                <div className="mb-5">
                    <label htmlFor="password_confirmation" className="block mb-2 text-sm font-medium text-white">Confirmar Contraseña</label>
                    <input type="password" id="password_confirmation" name='password_confirmation' value={formData.password_confirmation} onChange={handleChange} className="bg-gray-500 bg-opacity-20 border border-opacity-20 border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='*******' required />
                </div>
                <button type="submit" className="text-white bg-gradient-to-r from-indigo-600 from-10% via-blue-500 to-90% to-sky-500 via-60%  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Registrar</button>
            </form>
        </div>
    )
}

export default FormRegisterComponent