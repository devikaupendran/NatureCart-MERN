import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import OurProducts from './Pages/OurProducts'
import Navbar from './Components/Navbar'

const App = () => {
    return (
        <div>
            <Navbar />
            <div className={`px-6 md:px-16 lg:px-24 xl:px-30`} >

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/products' element={<OurProducts />} />
                </Routes>
            </div>
        </div>
    )
}

export default App
