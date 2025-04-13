import React from 'react'
import Banner from '../Components/Banner'
import Categories from '../Components/Categories'
import BestSellers from '../Components/BestSellers'

const Home = () => {
    return (
        <div className='mt-14'>
            <Banner />
            <Categories />
            <BestSellers />
        </div>
    )
}

export default Home
