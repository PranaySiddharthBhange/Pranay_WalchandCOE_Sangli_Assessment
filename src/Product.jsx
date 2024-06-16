import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import './Product.css';
import './Footer.css';
import Navbar from './Navbar';

import { products } from './data';
import kite from "./assets/Kite.png";
import AllProducts from './AllProducts'
const categories = ["Ceramics", "Leather", "Toys", "Décor"];
const Product = () => {
    const [selectedCategory, setSelectedCategory] = useState("Ceramics");

    // Filter products based on selected category
    const filteredProducts = products.filter(product => product.category === selectedCategory);

    // Ref for the product list container
    const productListRef = useRef(null);

    // Scroll function to scroll the product list container
    const scroll = (direction) => {
        const scrollAmount = direction === "left" ? -300 : 300;
        productListRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                  <Navbar></Navbar>

            <img src={kite} alt="Kite" className="leftIcon-about" />
            <div style={{ flex: 1 }}>
                <div className="gallery-container">
                    <p className="heading">Featured Products</p>
                    <p className="subheading">Explore our collection of unique, handcrafted items made with love and attention to detail.</p>

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
                    <div className="products">
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

            <AllProducts></AllProducts>

            <div style={{ marginTop: '30px' }}>
                <footer className="footer">
                    <div className="footer-container">
                        <div className="footer-company-name">
                            <h2>Handmade Haven</h2>
                        </div>
                        <ul style={{ display: 'flex', listStyleType: 'none', padding: 3, margin: 3 }}>
                            <li><Link to="/" style={{ marginRight: '20px' }}>Home</Link></li>
                            <li><Link to="/about" style={{ marginRight: '20px' }}>About</Link></li>
                            <li><Link to='/products' style={{ marginRight: '20px', textDecoration: "underline", textUnderlineOffset: "10px" }}>Products</Link></li>
                            <li><Link to='/contact' >Contact</Link></li>
                        </ul>
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
