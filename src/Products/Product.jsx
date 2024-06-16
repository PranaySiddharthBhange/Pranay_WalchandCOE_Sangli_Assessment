import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import './Product.css';
import '../Footer/Footer.css';
import Navbar from '../Global/Navbar';

import { products } from '../data'; // Importing product data
import kite from "../assets/Kite.png"; // Importing image asset
import AllProducts from './AllProducts';

const categories = ["Ceramics", "Leather", "Toys", "Décor"];

const Product = () => {
    const [selectedCategory, setSelectedCategory] = useState("Ceramics"); // State to track selected category

    // Filter products based on selected category
    const filteredProducts = products.filter(product => product.category === selectedCategory);

    // Reference for the product list container to enable scrolling
    const productListRef = useRef(null);

    // Function to scroll the product list container
    const scroll = (direction) => {
        const scrollAmount = direction === "left" ? -300 : 300; // Amount to scroll by
        productListRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' }); // Smooth scroll behavior
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar /> {/* Navigation bar component */}

            <img src={kite} alt="Kite" className="leftIcon-about" /> {/* Image component */}

            <div style={{ flex: 1 }}>
                <div className="gallery-container">
                    <p className="heading">Featured Products</p>
                    <p className="subheading">Explore our collection of unique, handcrafted items made with love and attention to detail.</p>

                    {/* Category selection buttons */}
                    <div className="categories">
                        {categories.map(category => (
                            <button
                                key={category}
                                className={category === selectedCategory ? "active" : ""}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Product list with scrolling functionality */}
                    <div className="products">
                        {/* Scroll buttons */}
                        <button className="scroll-btn left" onClick={() => scroll("left")}><IoIosArrowDropleft /></button>
                        <div className="product-list" ref={productListRef}>
                            {filteredProducts.map(product => (
                                <div key={product.id} className="product-item">
                                    <img src={product.url} alt={product.description} />
                                    <p>{product.description}</p>
                                </div>
                            ))}
                        </div>
                        <button className="scroll-btn right" onClick={() => scroll("right")}><IoIosArrowDropright /></button>
                    </div>
                </div>
            </div>

            <AllProducts /> {/* Component displaying all products */}

            {/* Footer section */}
            <div style={{ marginTop: '30px' }}>
                <footer className="footer">
                    <div className="footer-container">
                        <div className="footer-company-name">
                            <h2>Handmade Haven</h2>
                        </div>
                        {/* Navigation links */}
                        <ul style={{ display: 'flex', listStyleType: 'none', padding: 3, margin: 3 }}>
                            <li><Link to="/" style={{ marginRight: '20px' }}>Home</Link></li>
                            <li><Link to="/about" style={{ marginRight: '20px' }}>About</Link></li>
                            <li><Link to='/products' style={{ marginRight: '20px', textDecoration: "underline", textUnderlineOffset: "10px" }}>Products</Link></li>
                            <li><Link to='/contact' >Contact</Link></li>
                        </ul>
                        {/* Social media icons */}
                        <div className="footer-social-media">
                            <h3>Follow Us</h3>
                            <div className="social-icons">
                                <FaInstagram />
                                <FaXTwitter />
                                <FaFacebookF />
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Product;
