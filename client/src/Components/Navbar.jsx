import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

            {/* logo */}
            <NavLink to={'/'} onClick={() => setOpen(false)}>
                <img className="h-15 w-17" src={assets.logo} alt="nature cart logo" />
            </NavLink>

            {/* ------------------- Desktop Menu -------------------*/}
            <div className="hidden sm:flex items-center gap-8">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/products'}>Our products</NavLink>
                <NavLink to={'/'}>Contact us</NavLink>

                {/* search */}
                <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                    <input className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
                    <img src={assets.search_icon} alt="search icon" className='h-4 w-4' />
                </div>

                {/* cart */}
                <div onClick={() => navigate('/cart')} className="relative cursor-pointer">
                    <img src={assets.nav_cart_icon} alt="cart icon" />
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-green-700 w-[18px] h-[18px] rounded-full">0</button>
                </div>

                <button className="cursor-pointer px-8 py-2 bg-green-700 hover:bg-green-600 transition text-white rounded-full">
                    Login
                </button>

            </div>

            {/* Mobile Menu Icon*/}
            <button onClick={() => setOpen(!open)} aria-label="Menu" className="sm:hidden">
                <img src={assets.menu_icon} alt="mobile menu icon" />
            </button>

            {/* ------------------- Mobile Menu ------------------- */}
            {
                open && (
                    <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] z-2 left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                        <NavLink to={'/'} onClick={() => setOpen(false)} className="block py-3">Home</NavLink>
                        <NavLink to={'/products'} onClick={() => setOpen(false)} className="block py-3">Our products</NavLink>
                        <NavLink to={'/'} onClick={() => setOpen(false)} className="block py-3">My orders</NavLink>
                        <NavLink to={'/'} onClick={() => setOpen(false)} className="block py-3">Contact us</NavLink>

                        <button onClick={() => { setOpen(false); }}
                            className="cursor-pointer px-6 py-2 mt-2 bg-green-700 hover:bg-green-600 transition text-white rounded-full text-sm">
                            Login
                        </button>

                    </div>)
            }
        </nav>
    )
}

export default Navbar

