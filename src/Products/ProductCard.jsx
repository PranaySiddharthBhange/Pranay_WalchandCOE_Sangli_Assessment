import React from 'react';

const ProductCard = ({ product }) => (
    <div className="all-product-card">
        <img 
            src={product.url} 
            alt={product.description} 
            className="all-product-image"
            loading="lazy"
        />
        <div className="all-product-info">
            <p className="all-product-description">{product.description}</p>
        </div>
    </div>
);

export default ProductCard;
