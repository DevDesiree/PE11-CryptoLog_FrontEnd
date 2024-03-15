import React from 'react'
import { Link } from "react-router-dom";
import logoNavbar from '../../assets/images/logo-cryptolog.png'

const NavbarComponent = ({ isAuthenticated, handleLogout }) => {
    console.log("isAuthenticated:", isAuthenticated);
    return (
        <nav className="bg-black border-black-200 ">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logoNavbar} class="h-12" alt="CryptLog Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CryptoLog</span>
                </a>

                <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>

                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
                        {isAuthenticated ? (
                            <>
                                <li class="block py-2 px-3 text-white  rounded md:bg-transparent  md:p-0 hover:text-blue-500" aria-current="page"><Link to="/historial">Historial</Link></li>
                                <li class="block py-2 px-3 text-white  rounded md:bg-transparent  md:p-0 hover:text-blue-500" aria-current="page"><Link to="/perfil">Mi Perfil</Link></li>
                                <li class="block py-2 px-3 text-white  rounded md:bg-transparent  md:p-0 hover:text-blue-500" aria-current="page"><Link to="/activos">Mis Activos</Link></li>
                                <li class="block py-2 px-3 text-white  rounded md:bg-transparent  md:p-0 hover:text-blue-500" aria-current="page">
                                    <button onClick={handleLogout}>Logout</button></li>
                            </>
                        ) : (
                            <>
                                <li class="block py-2 px-3 text-white  rounded md:bg-transparent  md:p-0 hover:text-blue-500" aria-current="page"><Link to="/register">Registro</Link></li>
                                <li class="block py-2 px-3 text-white  rounded md:bg-transparent  md:p-0 hover:text-blue-500" aria-current="page"><Link to="/login">Login</Link></li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavbarComponent