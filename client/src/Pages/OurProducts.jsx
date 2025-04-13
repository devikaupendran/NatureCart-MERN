import React from 'react'
import { useAppContext } from '../Contexts/AppContext'
import ProductCard from '../Components/ProductCard';

const OurProducts = () => {

    const { products } = useAppContext();
    return (
        <div className='mt-16 flex-col w-full'>
            
            {/* title */}
            <div className='flex flex-col items-end w-max'>
                <p className='text-2xl font-medium uppercase'>All products</p>
                <div className='w-16 h-0.5 bg-green-700 rounded-full'></div>
            </div>

            <div className='flex justify-center'>
                <section className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-6 mt-6'>
                    {
                        products.filter((product) => product.inStock)
                            .map((product, index) => {
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
