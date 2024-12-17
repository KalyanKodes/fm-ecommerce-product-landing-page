import React, { useContext, useState } from 'react'
import { ProviderContext } from '../App'


export default function ProductDetails({ itemNumber, addToCart }) {
    const [removed, setRemoved] = useState(false)
    const handleChange = () => {
        addToCart(!data[itemNumber].isAddedToCart ? "add" : 'remove', itemNumber)
    }
    const data = useContext(ProviderContext);
    console.log(data)
    return (
        <div className='product-details-wrapper'>
            <p>{data[itemNumber].productData.productCompany.toUpperCase()}</p>
            <h1 className='product-heading'>{data[itemNumber].productData.productName}</h1>
            <p className='product-description'>{data[itemNumber].productData.productDescription}</p>
            <div className="product-price-wrapper">
                <h1 className='product-price'>${(data[itemNumber].productData.actualPrice - (data[itemNumber].productData.actualPrice * data[itemNumber].productData.discount) / 100).toFixed(2)}<span>{data[itemNumber].productData.discount}%</span></h1>
                <p style={{ textDecoration: 'line-through', color: 'var(--dark-grayish-blue)', fontWeight: 700 }}>${data[itemNumber].productData.actualPrice.toFixed(2)}</p>
            </div>
            <div className="product-cart-items-wrapper">
                <button className='addto-card-button' onClick={handleChange}>
                    <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#000" fillRule="nonzero" /></svg>
                    {!data[itemNumber].isAddedToCart ? "Add to cart" : "Remove from cart"}
                </button>
            </div>
        </div>
    )
}
