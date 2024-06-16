import React, { Suspense } from 'react';
import { products } from '../data'; // Importing product data
import './AllProducts.css'; // Importing styles for AllProducts component

// Lazy load the ProductCard component
const ProductCard = React.lazy(() => import('./ProductCard'));

const AllProducts = () => {
    // Shuffle the products array to display them in random order
    const shuffledProducts = products.sort(() => Math.random() - 0.5);
    // Slice the array to display only the first 12 products
    const displayedProducts = shuffledProducts.slice(0, 12);

    return (
        <div className="all-products-container">
            <p className="all-heading">All Products</p>
            <div className="all-products">
                {/* Suspense component to handle lazy loading with fallback */}
                <Suspense fallback={<div className="loading-placeholder">Loading...</div>}>
                    {/* Map through displayed products and render ProductCard component */}
                    {displayedProducts.map(product => (
                        <ProductCard 
                            key={product.id} // Unique key for each product
                            product={product} // Pass product data as props to ProductCard
                        />
                    ))}
                </Suspense>
            </div>
        </div>
    );
}

export default AllProducts;
