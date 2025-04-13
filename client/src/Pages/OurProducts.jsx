import React, { useState, useEffect} from 'react'
import { useAppContext } from '../Contexts/AppContext'
import ProductCard from '../Components/ProductCard';

const OurProducts = () => {

    const { products, searchQuery } = useAppContext();
    const [filteredProducts, setFilteredProducts] = useState([]);

    //function to filter the products based on search query or products
    useEffect(() => {
        if (searchQuery.length > 0) {
            setFilteredProducts(
                products.filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase())))
        }
        else {
            setFilteredProducts(products)
        }
    }, [products, searchQuery])

    return (
        <div className='mt-16 flex-col w-full'>

            {/* title */}
            <div className='flex flex-col items-end w-max'>
                <p className='text-2xl font-medium uppercase'>All products</p>
                <div className='w-16 h-0.5 bg-green-700 rounded-full'></div>
            </div>

            {/* all products filter based on stock */}
            <div className='flex justify-center'>
                <section className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-6 mt-6'>
                    {
                        filteredProducts.filter((product) => product.inStock).map((product, index) => {
                            return (
                                <ProductCard key={index} product={product} />
                            )
                        })
                    }
                </section>
            </div>

        </div>
    )
}

export default OurProducts
