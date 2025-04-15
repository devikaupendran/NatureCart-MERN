import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets';
import { useAppContext } from '../Contexts/AppContext';
import { Link, useParams } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';

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
                <Link to={'/'}>Home</Link> /
                <Link to={'/products'}> Products</Link> /
                <Link to={`/products/${product.category.toLowerCase()}`}> {product.category}</Link> /
                <span className="text-green-700"> {product.name}</span>
            </p>

            {/* images section  */}
            <div className="flex flex-col md:flex-row gap-16 mt-4">
                <div className="flex gap-3">
                    <div className="flex flex-col gap-3">
                        {
                            product.image.map((image, index) => (
                                <div key={index} onClick={() => setThumbnail(image)}
                                    className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer" >
                                    <img src={image} alt={`Thumbnail ${index + 1}`} />
                                </div>
                            ))
                        }
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
                            <p>(4)</p>
                        </div>
                    </div>

                    {/* price and offer price section */}
                    <div className="mt-6">
                        <p className="text-gray-500/70 line-through">MRP: {currencySymbol} {product.price}</p>
                        <p className="text-2xl font-medium">MRP: {currencySymbol} {product.offerPrice}</p>
                        <span className="text-gray-500/70">(inclusive of all taxes)</span>
                    </div>

                    {/* About product  */}
                    <p className="text-base font-medium mt-6">About Product</p>
                    <ul className="list-disc ml-4 text-gray-500/70">
                        {product.description.map((desc, index) => (
                            <li key={index}>{desc}</li>
                        ))}
                    </ul>

                    {/* ------------- Add to cart and Buy now button ------------- */}
                    <div className="flex items-center mt-10 gap-4 text-base">
                        <button onClick={() => addToCart(product._id)}
                            className="w-full py-3.5 cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition" >
                            Add to Cart
                        </button>

                        <button onClick={() => {
                            addToCart(product._id);
                            navigate('/cart');
                            scrollTo(0, 0)
                        }}
                            className="w-full py-3.5 cursor-pointer font-medium bg-green-700 text-white hover:bg-green-600 transition" >
                            Buy now
                        </button>
                    </div>
                </div>
            </div>

            {/* ------------- Related Products ------------- */}
            <div className='flex flex-col items-center mt-20'>

                {/* -------- title -------- */}
                <div className='flex flex-col items-center w-max'>
                    <p className='text-3xl font-medium'>Related Products</p>
                    <div className='w-20 h-0.5 bg-green-700 rounded-full mt-2'></div>
                </div>

                {/* -------- products -------- */}
                <div className='flex justify-center'>
                    <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6 mt-6'>
                        {
                            relatedProducts.filter((product) => product.inStock)
                                .map((product, index) => (<ProductCard key={index} product={product} />))
                        }
                    </div>
                </div>

                <button onClick={() => {
                    navigate('/products');
                    scrollTo(0, 0)
                }}
                    className='mx-auto cursor-pointer px-12 my-16 py-2.5 border rounded text-green-700 hover:bg-green-100 transition '>See More</button>

            </div>
        </div>


    )
}

export default ProductDetails