import React from 'react'
import Header from './Components/Header'
import ProductCard from './Components/ProductCard'
import ProductDetails from './Components/ProductDetails'


export default function App() {
    return (
        <>
            {/* Header */}
            <Header />
            {/* Product Card */}
            <div className="total-product-wrapper">
                <ProductCard />
                <ProductDetails />
            </div>
            {/* Product Details */}
        </>
    )
}
