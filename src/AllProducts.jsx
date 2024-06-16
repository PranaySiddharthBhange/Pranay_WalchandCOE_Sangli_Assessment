import React from 'react';
import { products } from './data';
import './AllProducts.css'; 

const AllProducts = () => {
    // Shuffle the products array to display them in random order
    const shuffledProducts = products.sort(() => Math.random() - 0.5);
    // Slice the array to display only the first 12 products
    const displayedProducts = shuffledProducts.slice(0, 12);

    return (
        <div className="all-products-container">
            <p className="all-heading">All Products</p>
            <div className="all-products">
                {displayedProducts.map(product => (
                    <div key={product.id} className="all-product-card">
                        <img src={product.url} alt={product.description} className="all-product-image" />
                        <div className="all-product-info">
                            <p className="all-product-description">{product.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllProducts;
