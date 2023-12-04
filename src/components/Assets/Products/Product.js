import './Product.css';
import React,{useState} from 'react';

const Product = () => {
    const productName = 'Boult Audio Z20 TWS Earbuds with 40H Playtime, Zen™ ENC Clear Calling Mic, Made in India, 10mm Rich Bass Drivers, Type-C Fast Charge, IPX5, Touch Controls, Voice Assistant, BT 5.3 Ear Buds (Black)'
    const mrp = 11000;
    const discount = 50;
    let currentPrice = 0;
    const [quantity, setQuantity] = useState(0);


    const Price = () => {
        const discountPrice = (mrp * discount) / 100;
        currentPrice = mrp - discountPrice;
    }

    const increaseQuantity = () => {
        setQuantity (quantity + 1);
    }
    const decreaseQuantity = () => {
        if(quantity!=0){
        setQuantity (quantity - 1);
    }
    }
    Price();
    
    return (
        <div className='product-container'>
            <div className='product-image'></div>
            <div className='product-name-discription'>
                <a href=''>{productName}</a>
            </div>
            <div className='product-pricing'>
                <div className='discounted-price'>
                    <p className='currency-logo'>₹</p><p className='current-price'>{currentPrice}</p>
                </div>
                M.R.P:<a className='product-mrp'>₹{mrp}</a> ( {discount}% off)
            </div>
            <div className='conuting-container'>
                <span className='decrease-quantity' onClick={decreaseQuantity}></span>
                <div className='quantity'>{quantity}</div>
                <div className='increase-quantity' onClick={increaseQuantity}></div>
            </div>
            <div className='option-container'>
                <div className='add-to-cart-btn'>Add</div>
                <div className='buy-now-btn'>Buy</div>
            </div>
        </div>
    );
}

export default Product;