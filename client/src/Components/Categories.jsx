import React from 'react'
import { assets } from '../assets/assets'

const Categories = () => {
    return (
        <div className='mt-16'>
            <p className='text-2xl md:text-3xl font-medium'>Categories</p>

            <div className='group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center'>
                <img src={assets.box_icon} alt="fruit" className='group-hover:scale-108 transition max-w-28' />
                <p className='text-sm font-medium'>Fruit</p>
            </div>

        </div>
    )
}

export default Categories
