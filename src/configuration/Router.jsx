import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from '../components/pages/Register'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/register' element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router