import React from 'react'
import { Link } from "react-router-dom";
import logoNavbar from '../../assets/images/logo-cryptolog.png'

const NavbarComponent = ({ isAuthenticated, handleLogout }) => {
    console.log("isAuthenticated:", isAuthenticated);
    return (
        <nav>
            <ul>
                {isAuthenticated ? (
                    <>
                        <li><Link to="/historial">Historial</Link></li>
                        <li><Link to="/perfil">Mi Perfil</Link></li>
                        <li><Link to="/activos">Mis Activos</Link></li>
                        <li><button onClick={handleLogout}>Logout</button></li>
                    </>
                ) : (
                    <>
                        <li><Link to="/register">Registrarse</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default NavbarComponent