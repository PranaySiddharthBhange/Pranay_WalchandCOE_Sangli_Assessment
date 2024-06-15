import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { products } from './data';
import { IoIosArrowDropleft } from "react-icons/io";
import './Product.css'
import { IoIosArrowDropright } from "react-icons/io";
import './Footer.css'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
const categories = ["Ceramics", "Leather", "Toys", "Décor"];

const Product = () => {

    const [selectedCategory, setSelectedCategory] = useState("Ceramics");

    const filteredProducts = products.filter(product => product.category === selectedCategory);

    const scroll = (direction) => {
        const container = document.querySelector(".product-list");
        const scrollAmount = direction === "left" ? -300 : 300;
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };

    return (

        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <div style={{ flex: 1 }}>
                <div className="gallery-container">
                    <p className="heading">Featured Products</p>
                    <p className="subheading">Explore our collection of unique, handcrafted items made with love and attention to detail.

                    </p>

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
                        <button className="scroll-btn left" onClick={() => scroll("left")}><IoIosArrowDropleft />
                        </button>
                        <div className="product-list">
                            {filteredProducts.map(product => (
                                <div key={product.id} className="product-item">
                                    <img src={product.url} alt={product.description} />
                                    <p>{product.description}</p>
                                </div>
                            ))}
                        </div>
                        <button className="scroll-btn right" onClick={() => scroll("right")}><IoIosArrowDropright />
                        </button>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '30px' }}>
                
                <footer className="footer">
                    <div className="footer-container">
                        <div className="footer-company-name">
                            <h2>Handmade Haven
                            </h2>

                        </div>
                        <ul style={{ display: 'flex', listStyleType: 'none', padding: 3, margin: 3 }}>
                            <Link to='/about' style={{ marginRight: '20px',textDecoration :"underline",textUnderlineOffset : "10px" }}>About</Link>
                            <Link to='/contact'style={{ marginRight: '20px' }}>Contact</Link>
                            <Link to="/">Home</Link>
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
