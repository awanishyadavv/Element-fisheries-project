import '../components/Style/MarketPlace.css';
import React from 'react';
import Product from './Assets/Products/Product';

const MarketPlace = () => {
    return (
        <div className='marketplace'>
        <div className='filter-marketplace'>
            <h3>Filter</h3>
        </div>
        <div className='products'>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />

            <Product />
            <Product />
            <Product />
            <Product />

            <Product />
        </div>
        </div>
    );
}

export default MarketPlace;