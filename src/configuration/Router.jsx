import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from '../components/pages/Register';
import Login from '../components/pages/Login';
import Home from '../components/pages/Home';
import UserProfile from '../components/pages/UserProfile';
import Transactions from '../components/pages/Transactions';
import NavbarComponent from '../components/navbar-component/NavbarComponent';
import BackendFetchApi from '../services/BackendFetchApi';
import HistoricalPage from '../components/pages/HistoricalPage';

const Router = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const handleLogout = async () => {
        try {
            const response = await BackendFetchApi.logout();
            if (response) {
                setIsAuthenticated(false);
                localStorage.removeItem('token');
                 console.log(response.message);
            }
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    };

    return (
        <BrowserRouter>
            <NavbarComponent isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
            <Routes>
                <Route path="/" element={<Home isAuthenticated={isAuthenticated} />} />
                <Route path="/register" element={isAuthenticated ? <Home /> : <Register handleLogin={handleLogin} />} />
                <Route path="/login" element={isAuthenticated ? <Home /> : <Login handleLogin={handleLogin} />} />
                <Route path="/profile" element={<UserProfile isAuthenticated={isAuthenticated} />} />
                <Route path="/transactions" element={<Transactions isAuthenticated={isAuthenticated} />} />
                <Route path="/historical" element={<HistoricalPage isAuthenticated={isAuthenticated} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
