import React, { useState, useEffect } from 'react';
import BackendFetchApi from '../../services/BackendFetchApi';

const UserProfile = ({ isAuthenticated }) => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        avatar: null
    });

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await BackendFetchApi.userGetProfile();
                setUserData({
                    name: response.user.name,
                    email: response.user.email,
                    avatar: response.user.avatar
                });
            } catch (error) {
                console.error('Error al obtener el perfil del usuario:', error);
            }
        };

        fetchUserProfile();
    }, []); // El segundo argumento [] se asegura que useEfect solo se ejecute una vez al montar el componente

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    return (
        <div>
    {isAuthenticated ? (
        <div>
            <h1 className="text-center text-3xl text-white rounded-lg p-6 ">Editar Mi Perfil</h1>
            <form onSubmit={handleSubmit} className="max-w-5xl mx-auto rounded-lg p-6  shadow-2xl sm:rounded-3xl border-gray-600 my-7 flex flex-col items-center">
                <div className="flex flex-col sm:flex-row w-full">
                    <div className="flex flex-col w-full sm:w-1/2 pr-10 items-center mb-8 sm:mb-0">
                        <h2 className="text-center text-xl text-white ">Tu Avatar</h2>
                        <img className="rounded-full w-60 h-60 mb-5" src={userData.avatar} alt="Avatar" />
                        <label htmlFor="avatar" className="block text-sm font-medium text-white text-center">Cambiar Avatar</label>
                        <input type="file" id="avatar" name="avatar" className="block w-full p-3 mb-3 mt-2 text-sm  border rounded-lg cursor-pointer text-gray-400 focus:outline-none bg-gray-500 bg-opacity-20 border-gray-600 placeholder-gray-400" onChange={handleChange} />
                    </div>
                    <div className="flex flex-col w-full sm:w-1/2 justify-center">
                        <div className="mb-8">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Nombre</label>
                            <input type="text" id="name" name="name" value={userData.name} onChange={handleChange} className="bg-gray-500 bg-opacity-20 border border-opacity-20 border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="mb-8">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Email</label>
                            <input type="email" id="email" name="email" value={userData.email} onChange={handleChange} className="bg-gray-500 bg-opacity-20 border border-opacity-20 border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                    </div>
                </div>
                <button type="submit" className="text-white bg-gradient-to-r from-indigo-600 from-10% via-blue-500 to-90% to-sky-500 via-60% hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3.5 mt-5">Actualizar</button>
            </form>
        </div>
    ) : (
        <div>
            <h1>Debes estar autenticado para ver este contenido.</h1>
            {/* Se podria redirigir a otra vista */}
        </div>
    )}
</div>

    );
};

export default UserProfile;
