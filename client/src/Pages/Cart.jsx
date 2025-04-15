import React, { useState } from 'react'
import { assets } from '../assets/assets';

const Cart = () => {
    const [showAddress, setShowAddress] = useState(false)

    const products = [
        // existing products...

        {
            name: "Fresh Strawberries",
            description: [
                "Sweet and juicy flavor",
                "Rich in antioxidants and vitamin C",
                "Perfect for smoothies, desserts, or snacking"
            ],
            offerPrice: 180,
            price: 150,
            quantity: 1,
            size: "500g",
            image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSJxlHWv_YX7tjnOLEZk0WYKTTBuJEeVGDzWs0dPL0a-aX1jlltXhckBU_Hjjyiz5wdLwUKgGEYF6N9wiYjXStWuA",
            category: "Fruits",
        },
        {
            name: "Alphonso Mangoes",
            description: [
                "Rich, tropical taste",
                "Premium quality from Ratnagiri",
                "Ideal for juices, desserts, or eating fresh"
            ],
            offerPrice: 300,
            price: 250,
            quantity: 1,
            size: "1kg",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIZsfkc2zDCA423IfWyeg_FaRvFs_LyLeMUw&s",
            category: "Fruits",
        },
        {
            name: "Red Apples",
            description: [
                "Crisp and sweet",
                "High in fiber and vitamin C",
                "Perfect for a healthy snack"
            ],
            offerPrice: 220,
            price: 180,
            quantity: 1,
            size: "1kg",
            image: "https://5.imimg.com/data5/AK/RA/MY-68428614/apple.jpg",
            category: "Fruits",
        },
    ];

    return (
        // ------------------------- PRODUCTS ------------------------- 
        < div className="flex flex-col md:flex-row py-16 max-w-6xl w-full px-6 mx-auto" >
            <div className='flex-1 max-w-4xl'>
                <h1 className="text-3xl font-medium mb-6">
                    Shopping Cart <span className="text-sm text-green-700">3 Items</span>
                </h1>

                {/* ------- HEADINGS ------- */}
                <div className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-base font-medium pb-3">
                    <p className="text-left">Product Details</p>
                    <p className="text-center">Subtotal</p>
                    <p className="text-center">Action</p>
                </div>

                {
                    products.map((product, index) => (
                        <div key={index} className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 items-center text-sm md:text-base font-medium pt-3">
                            <div className="flex items-center md:gap-6 gap-3">

                                {/* PRODUCT IMAGE  */}
                                <div className="cursor-pointer w-24 h-24 flex items-center justify-center border border-gray-300 rounded">
                                    <img className="max-w-full h-full object-cover" src={product.image} alt={product.name} />
                                </div>

                                {/* Product Details  */}
                                <div>
                                    <p className="hidden md:block font-semibold">{product.name}</p>
                                    <div className="font-normal text-gray-500/70">
                                        <p>Size: <span>{product.size || "N/A"}</span></p>
                                        
                                        {/* Quantity with options  */}
                                        <div className='flex items-center'>
                                            <p>Qty:</p>
                                            <select className='outline-none'>
                                                {
                                                    Array(5).fill('').map((_, index) => (
                                                        <option key={index} value={index + 1}>{index + 1}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            
                            {/* offer price */}
                            <p className="text-center">${product.offerPrice * product.quantity}</p>
                            <button className="cursor-pointer mx-auto">
                                <img src={assets.remove_icon} alt="remove icon" />
                            </button>
                        </div>)
                    )
                }

                {/* ------- CONTINUE SHOPPING ------- */}
                <button className="group cursor-pointer flex items-center mt-8 gap-2 text-green-700 font-medium">
                    <img src={assets.arrow_right_icon_colored} alt="right arrow" />
                    Continue Shopping
                </button>

            </div>

            {/* ------------------------- ORDER SUMMARY ------------------------- */}
            <div className="max-w-[360px] w-full bg-gray-100/40 p-5 max-md:mt-16 border border-gray-300/70">
                <h2 className="text-xl md:text-xl font-medium">Order Summary</h2>
                <hr className="border-gray-300 my-5" />

                <div className="mb-6">
                    <p className="text-sm font-medium uppercase">Delivery Address</p>
                    <div className="relative flex justify-between items-start mt-2">
                        <p className="text-gray-500">No address found</p>
                        <button onClick={() => setShowAddress(!showAddress)}
                            className="text-green-700 hover:underline cursor-pointer">
                            Change
                        </button>
                        {
                            showAddress && (
                                <div className="absolute top-12 py-1 bg-white border border-gray-300 text-sm w-full">
                                    <p onClick={() => setShowAddress(false)} className="text-gray-500 p-2 hover:bg-gray-100">
                                        New York, USA
                                    </p>
                                    <p onClick={() => setShowAddress(false)} className="text-green-700 text-center cursor-pointer p-2 hover:bg-indigo-500/10">
                                        Add address
                                    </p>
                                </div>
                            )
                        }
                    </div>

                    <p className="text-sm font-medium uppercase mt-6">Payment Method</p>

                    <select className="w-full border border-gray-300 bg-white px-3 py-2 mt-2 outline-none">
                        <option value="COD">Cash On Delivery</option>
                        <option value="Online">Online Payment</option>
                    </select>
                </div>

                <hr className="border-gray-300" />

                <div className="text-gray-500 mt-4 space-y-2">
                    <p className="flex justify-between">
                        <span>Price</span><span>$20</span>
                    </p>
                    <p className="flex justify-between">
                        <span>Shipping Fee</span><span className="text-green-600">Free</span>
                    </p>
                    <p className="flex justify-between">
                        <span>Tax (2%)</span><span>$20</span>
                    </p>
                    <p className="flex justify-between text-lg font-medium mt-3">
                        <span>Total Amount:</span><span>$20</span>
                    </p>
                </div>

                <button className="w-full py-3 mt-6 cursor-pointer bg-green-700 text-white font-medium hover:bg-green-600 transition">
                    Place Order
                </button>
            </div>
        </ div>
    )
}

export default Cart
