import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './Pages/Home'
import OurProducts from './Pages/OurProducts'
import Navbar from './Components/Navbar'


const App = () => {

    // if the path contain 'seller' then this will be true 
    const isSellerPath = useLocation().pathname.includes('seller');
    console.log(isSellerPath)

    return (
        <div>
            {/* if it is seller then dont show this navbar  */}
            {isSellerPath ? null : <Navbar />}

            <Toaster position="top-center" reverseOrder={false} />

            <div className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-30"} `}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/products' element={<OurProducts />} />
                </Routes>
            </div>

        </div>
    )
}

export default App
