import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import OurProducts from './Pages/OurProducts'
import Navbar from './Components/Navbar'

const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<OurProducts />} />
            </Routes>
        </div>
    )
}

export default App
