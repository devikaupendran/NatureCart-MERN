import React, { useEffect, useState } from 'react'
import { assets, dummyAddress } from '../assets/assets';
import { useAppContext } from '../Contexts/AppContext';

const Cart = () => {
    const { products, navigate, currencySymbol, cartItems, updateCartitem, removeCartItem, getCartItemCount, getCartItemAmount } = useAppContext();

    const [cartArray, setCartArray] = useState([]);
    const [addresses, setAddresses] = useState(dummyAddress);
    const [showAddress, setShowAddress] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState(dummyAddress[0]);
    const [paymentOption, setPaymentOption] = useState("COD");

    const getCart = () => {
        const tempArray = [];
        // key represents the product's unique ID (not the field names of the object).
        for (const key in cartItems) {
            // Find the product in the products array where the _id matches the key
            const product = { ...products.find(item => item._id === key) };
            product.quantity = cartItems[key];   // Add the quantity from cartItems to the product
            tempArray.push(product);
        }
        setCartArray(tempArray)
    }

    useEffect(() => {
        if (products.length > 0 && cartItems) {
            getCart();
        }
    }, [products, cartItems])

    return products.length > 0 && cartItems ? (
        // ------------------------- PRODUCTS ------------------------- 
        < div className="flex flex-col md:flex-row mt-16" >
            <div className='flex-1 max-w-4xl'>
                <h1 className="text-3xl font-medium mb-6">
                    Shopping Cart <span className="text-sm text-green-700">{getCartItemCount()} Items</span>
                </h1>

                {/* ------- HEADINGS ------- */}
                <div className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-base font-medium pb-3">
                    <p className="text-left">Product Details</p>
                    <p className="text-center">Subtotal</p>
                    <p className="text-center">Action</p>
                </div>

                {
                    cartArray.map((product, index) => (
                        <div key={index} className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 items-center text-sm md:text-base font-medium pt-3">
                            <div className="flex items-center md:gap-6 gap-3">

                                {/* PRODUCT IMAGE  */}
                                <div onClick={() => {
                                    navigate(`/products/${product.category.toLowerCase()}/${product._id}`);
                                    scrollTo(0, 0)
                                }}
                                    className="cursor-pointer w-24 h-24 flex items-center justify-center border border-gray-300 rounded">
                                    <img className="max-w-full h-full object-cover" src={product.image[0]} alt={product.name} />
                                </div>

                                {/* Product Details  */}
                                <div>
                                    <p className="hidden md:block font-semibold">{product.name}</p>
                                    <div className="font-normal text-gray-500/70">
                                        <p>Weight: <span>{product.weight || "N/A"}</span></p>

                                        {/* Quantity with options  */}
                                        <div className='flex items-center'>
                                            <p>Qty:</p>
                                            <select className='outline-none p-4'>
                                                {
                                                    Array(cartItems[product._id] > 9 ? cartItems[product._id] : 9).fill('').map((_, index) => (
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
                            <button onClick={() => removeCartItem(product._id)} className="cursor-pointer mx-auto">
                                <img src={assets.remove_icon} alt="remove icon" className='inline-block w-6 h-6' />
                            </button>
                        </div>)
                    )
                }

                {/* ------- CONTINUE SHOPPING ------- */}
                <button onClick={() => {
                    navigate('/products');
                    scrollTo(0, 0);
                }}
                    className="group cursor-pointer flex items-center mt-8 gap-2 text-green-700 font-medium">
                    <img src={assets.arrow_right_icon_colored} alt="right arrow" className='group-hover:translate-x-1 transition' />
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
    ) : null
}

export default Cart
