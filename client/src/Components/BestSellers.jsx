import React from 'react'
import ProductCard from './ProductCard'
import { useAppContext } from '../Contexts/AppContext'

const BestSeller = () => {

    const { products } = useAppContext();
 

    return (
        <div className='mt-16'>
            <p className='text-2xl md:text-3xl font-medium'>Best sellers</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6 mt-6'>

                {
                    //filter the products based on stock and displayed 5 products and pass that data to product card for displaying
                    products.filter((product) => product.inStock).slice(0, 5)
                        .map((product, index) => {
                            return (
                                <ProductCard key={index} product={product} />
                            )
                        })
                }
            </div>
        </div>
    )
}

export default BestSeller
