import React from 'react'
import { useAppContext } from '../Contexts/AppContext'
import { useParams } from 'react-router-dom';
import { categories } from '../assets/assets';
import ProductCard from '../Components/ProductCard';

const ProductCategory = () => {

    const { products } = useAppContext();
    const { category } = useParams(); //This extracts the category value from the current URL (e.g., /category/fruits → category = "fruits").

    //searches the categories array for a category whose path (converted to lowercase) matches the category from the URL.
    const searchCategory = categories.find((item) => item.path.toLocaleLowerCase() === category);

    // This filters all products and only keeps the ones that match the selected category.
    const filteredProducts = products.filter((product) => product.category.toLowerCase() === category);

    return (
        <div className='mt-16'>
            {
                searchCategory && (
                    //title
                    <div className='flex flex-col items-end w-max'>
                        <p className='text-2xl font-medium uppercase'>{searchCategory.text.toUpperCase()}</p>
                        <div className='w-16 h-0.5 bg-green-700 rounded-full'></div>
                    </div>
                )
            }

            {/* if the filteredProducts have value then display the data otherwise show no prod found message */}
            {
                filteredProducts.length > 0 ? (
                    <div className='flex justify-center'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6 mt-6'>
                            {
                                filteredProducts.map((product) => (
                                    <ProductCard key={product._id} product={product} />
                                ))
                            }
                        </div>
                    </div>

                ) : (
                    <div className='flex items-center justify-center h-[60vh]'>
                        <p className='text-2xl font-medium text-primary'>No products found in this category.</p>
                    </div>
                )
            }
        </div >
    )
}

export default ProductCategory
