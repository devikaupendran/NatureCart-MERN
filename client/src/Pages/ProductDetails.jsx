import React, { useState } from 'react'
import { assets } from '../assets/assets';

const ProductDetails = () => {
    const product = {
        name: "Strawberry",
        category: "fruit",
        price: 100,
        offerPrice: 80,
        images: [
            "https://www.freeiconspng.com/uploads/strawberry-png-30.png",
            "https://img.freepik.com/free-psd/fresh-strawberries-splash-juice-transparent-background_84443-25724.jpg?semt=ais_hybrid&w=740",
            "https://w7.pngwing.com/pngs/983/762/png-transparent-strawberry-fruit-strawberry-strawberry-clipart-thumbnail.png",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe3JEQ12QZQRKVK_bW33TUlQDv3RgR0T7d3g&s"
        ],
        description: [
            "Naturally sweet and juicy flavor",
            "Perfect for snacking, baking, or blending",
            "Rich in vitamins, antioxidants, and fiber"
        ]
    };
    const [thumbnail, setThumbnail] = useState(product.images[0]);

    return product && (
        <div className="max-w-6xl w-full px-6 mt-24">

            {/* Breadcrumbs */}
            <p>
                <span>Home</span> /
                <span> Products</span> /
                <span> {product.category}</span> /
                <span className="text-green-700"> {product.name}</span>
            </p>

            <div className="flex flex-col md:flex-row gap-16 mt-4">
                <div className="flex gap-3">
                    <div className="flex flex-col gap-3">
                        {product.images.map((image, index) => (
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

                    <div className="mt-6">
                        <p className="text-gray-500/70 line-through">MRP: ${product.price}</p>
                        <p className="text-2xl font-medium">MRP: ${product.offerPrice}</p>
                        <span className="text-gray-500/70">(inclusive of all taxes)</span>
                    </div>

                    <p className="text-base font-medium mt-6">About Product</p>
                    <ul className="list-disc ml-4 text-gray-500/70">
                        {product.description.map((desc, index) => (
                            <li key={index}>{desc}</li>
                        ))}
                    </ul>

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