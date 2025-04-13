import React from 'react'
import Banner from '../Components/Banner'
import Categories from '../Components/Categories'
import BestSellers from '../Components/BestSellers'
import BottomBanner from '../Components/BottomBanner'
import NewsLetter from '../Components/NewsLetter'

const Home = () => {
    return (
        <div className='mt-14'>
            <Banner />
            <Categories />
            <BestSellers />
            <BottomBanner />
            <NewsLetter />
        </div>
    )
}

export default Home
