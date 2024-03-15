import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackendFetchApi from '../../services/BackendFetchApi';

const FormLoginComponent = ({ handleLogin }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await BackendFetchApi.login(formData);
            console.log('Usuario logueado correctamente:', response);

            handleLogin();

            navigate('/');
        } catch (error) {
            console.error('Error al loguear usuario:', error);
            setErrorMessage('Error al iniciar sesión. Por favor, verifica tus credenciales.');
        }
    };
    
    return (
        <div>
            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto rounded-lg p-6 bg-customDark shadow-2xl sm:rounded-3xl dark:border-gray-600 my-7">
                <h1 className='mb-5 text-white text-lg'>¡Inicia Sesión!</h1>
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white ">Email</label>
                    <input type="text" id="email" name='email' value={formData.email} onChange={handleChange} className="bg-gray-500 bg-opacity-20 border border-opacity-20 border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Coder@hotmail.com" required />
                </div>

                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Contraseña</label>
                    <input type="password" id="password" name='password' value={formData.password} onChange={handleChange} className="bg-gray-500 bg-opacity-20 border border-opacity-20 border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='*******' required />
                </div>
                <button type="submit" className="text-white bg-gradient-to-r from-indigo-600 from-10% via-blue-500 to-90% to-sky-500 via-60%  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Inicia Sesión</button>
            </form>
        </div>
    )
}

export default FormLoginComponent