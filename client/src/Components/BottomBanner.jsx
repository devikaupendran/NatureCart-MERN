import React from 'react'
import { assets, features } from '../assets/assets'

const BottomBanner = () => {
    return (
        <div className='relative mt-24'>
            <img src={assets.bottom_banner_image} alt="banner" className='w-full hidden md:block' /> {/* hidden on small screen */}
            <img src={assets.bottom_banner_mobile} alt="banner" className='w-full md:hidden' /> {/* hidden on large screen */}

            <div className='absolute inset-0 flex flex-col items-center md:items-end md:justify-center pt-16 md:pt-0 md:pr-24'>
                <div>
                    <h1 className='text-2xl ms:text-3xl font-semibold text-green-700 md-6'>Why we are the best?</h1>
                    {
                        features.map((feature, index) => {
                            return (
                                <div key={index} className='flex items-center gap-5 mt-3'>
                                    <img src={feature.icon} alt={feature.title} className='w-9 md:w-11 ' />
                                    <div>
                                        <h3 className='text-lg md:text-xl font-semibold'>{feature.title}</h3>
                                        <p className='text-gray-500/70 text-xs md:text-sm'>{feature.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default BottomBanner
