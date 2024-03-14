import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from '../components/pages/Register'
import Login from '../components/pages/Login'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router