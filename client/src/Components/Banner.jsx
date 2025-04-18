import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <div className='relative w-full'>
            <img src={assets.banner} alt="banner" className='w-full hidden md:block' /> {/* hidden on mobile screen */}
            <img src={assets.bannerMobile} alt="banner" className='w-full md:hidden' /> {/* hidden on large screen */}

            <div className='absolute inset-0 flex flex-col items-center md:items-start justify-end
                     md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24'>
                <h1 className='text-3xl lg:text-4xl 2xl:text-5xl font-bold text-center md:text-left 
                        max-w-72 md:max-w-80 lg:max-w-120 leading-tight lg:leading-15'>
                    Freshness You Can Trust, Savings You Will Love!
                </h1>

                <div className='flex items-center mt-6 font-medium'>
                    <Link to={'/products'} className='group flex items-center gap-2 px-7 md:px-9 py-3 bg-green-700 hover:bg-green-600 transition rounded text-white cursor-pointer'>
                        Shop now
                    </Link>

                    <Link to={'/products'} className='group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer'>
                        Explore deals
                        <img src={assets.black_arrow} alt="arrow"
                            className='transition group-hover:translate-x-1' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Banner
