import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets';
import { useAppContext } from '../Contexts/AppContext';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {

    const { products, navigate, addToCart, currencySymbol } = useAppContext();
    const { id } = useParams();

    const product = products.find((item) => item._id === id);

    const [relatedProducts, setRelatedProducts] = useState([]);
    const [thumbnail, setThumbnail] = useState(null);

    //Filters out products in the same category.Takes only the first 5 to show as related products.Stores them in state for display.
    useEffect(() => {
        if (products.length > 0) {
            let productsCopy = [...products];
            productsCopy = productsCopy.filter((item) => product.category === item.category);
            setRelatedProducts(productsCopy.slice(0, 5))
        }
    }, [products]);

    //When the product is set (or changes), the first image is selected as the default thumbnail to be displayed.
    useEffect(() => {
        setThumbnail(product?.image[0] ? product.image[0] : null)
    }, [product])

    return product && (
        <div className="mt-12">

            {/* Breadcrumbs */}
            <p>
                <span>Home</span> /
                <span> Products</span> /
                <span> {product.category}</span> /
                <span className="text-green-700"> {product.name}</span>
            </p>

            {/* images section  */}
            <div className="flex flex-col md:flex-row gap-16 mt-4">
                <div className="flex gap-3">
                    <div className="flex flex-col gap-3">
                        {product.image.map((image, index) => (
                            <div key={index} onClick={() => setThumbnail(image)} className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer" >
                                <img src={image} alt={`Thumbnail ${index + 1}`} />
                            </div>
                        ))}
                    </div>

                    <div className="border border-gray-500/30 max-w-100 rounded overflow-hidden">
                        <img src={thumbnail} alt="Selected product" />
                    </div>
                </div>

                <div className="text-sm w-full md:w-1/2">
                    {/* ----- name ----- */}
                    <h1 className="text-3xl font-medium">{product.name}</h1>

                    <div className="flex items-center gap-0.5 mt-1">
                        {/* --------- rating stars --------- */}
                        <div className="flex items-center gap-1">
                            {
                                Array(5).fill('').map((_, i) => (
                                    <img key={i} className='md:w-3.5 w-3' src={i < 4 ? assets.star_icon : assets.star_dull_icon} alt='star' />
                                ))
                            }
                            <p>4</p>
                        </div>
                    </div>

                    {/* price and offer price section */}
                    <div className="mt-6">
                        <p className="text-gray-500/70 line-through">MRP: ${product.price}</p>
                        <p className="text-2xl font-medium">MRP: ${product.offerPrice}</p>
                        <span className="text-gray-500/70">(inclusive of all taxes)</span>
                    </div>

                    {/* About product  */}
                    <p className="text-base font-medium mt-6">About Product</p>
                    <ul className="list-disc ml-4 text-gray-500/70">
                        {product.description.map((desc, index) => (
                            <li key={index}>{desc}</li>
                        ))}
                    </ul>
                    {/* Add to cart and Buy now nutton */}
                    <div className="flex items-center mt-10 gap-4 text-base">
                        <button className="w-full py-3.5 cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition" >
                            Add to Cart
                        </button>
                        <button className="w-full py-3.5 cursor-pointer font-medium bg-green-700 text-white hover:bg-green-600 transition" >
                            Buy now
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductDetails