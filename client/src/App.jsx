import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './Pages/Home'
import OurProducts from './Pages/OurProducts'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

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

            {/* if it is not seller path then show this footer  */}
            {!isSellerPath && <Footer />}
        </div>
    )
}

export default App
