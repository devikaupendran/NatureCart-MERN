import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './Pages/Home'
import OurProducts from './Pages/OurProducts'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { useAppContext } from './Contexts/AppContext'
import Login from './Components/Login'
import ProductCategory from './Pages/ProductCategory'
import ProductDetails from './Pages/ProductDetails'

const App = () => {

    const isSellerPath = useLocation().pathname.includes('seller');   // if the path contain 'seller' then this will be true 
    const { showUserLogin } = useAppContext();

    return (
        <div>
            {isSellerPath ? null : <Navbar />} {/* if it is seller then dont show this navbar  */}
            {showUserLogin ? <Login /> : null} {/* when the showUserLogin will be true then only display the login form  */}

            <Toaster position="top-center" reverseOrder={false} />

            <div className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-30"} `}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/products' element={<OurProducts />} />
                    <Route path='/products/:category' element={<ProductCategory />} />
                    <Route path='/products/:category/:id' element={<ProductDetails />} />
                </Routes>
            </div>

            {!isSellerPath && <Footer />}   {/* if it is not seller path then show this footer  */}
        </div>
    )
}

export default App
