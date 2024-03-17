import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from '../components/pages/Register';
import Login from '../components/pages/Login';
import Home from '../components/pages/Home';
import UserProfile from '../components/pages/UserProfile';
import NavbarComponent from '../components/navbar-component/NavbarComponent';

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
    
    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
    };

    return (
        <BrowserRouter>
            <NavbarComponent isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
            <Routes>
                <Route path="/" element={<Home isAuthenticated={isAuthenticated}/>} />
                <Route path="/register" element={isAuthenticated ? <Home /> : <Register handleLogin={handleLogin}/>} />
                <Route path="/login" element={isAuthenticated ? <Home /> : <Login handleLogin={handleLogin} />} />
                <Route path="/profile" element={<UserProfile isAuthenticated={isAuthenticated} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
