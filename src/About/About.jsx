import React from 'react';
import { Link } from "react-router-dom";
import './About.css'; // Importing CSS for About page styling
import { FaInstagram } from "react-icons/fa"; // Instagram icon from react-icons
import { FaXTwitter } from "react-icons/fa6"; // Twitter icon from react-icons (Note: Corrected import)
import { FaFacebookF } from "react-icons/fa"; // Facebook icon from react-icons
import kite from "../assets/Kite.png"; // Importing image assets
import cow from "../assets/Cow.png"; // Importing image assets
import Navbar from '../Global/Navbar'; // Importing Navbar component for navigation

const AboutOurCrafts = () => {
    return (
        <>
            <Navbar /> {/* Include Navbar component for navigation */}

            {/* Background image and main heading */}
            <img src={kite} alt="Kite" className="leftIcon-about" /> {/* Displayed decorative kite image */}
            <div className="about-our-crafts">
                <h1 className='headabout'>About Our Crafts</h1> {/* Main heading for the About section */}
                <p>
                    At Handmade Haven, we believe in the power of handcrafted items to bring joy and beauty to everyday life. Our team of skilled artisans pours their hearts into every piece, ensuring that each one is a unique work of art.
                </p>
                <div className="crafts-details">
                    {/* Section for highlighting various aspects of the crafts */}
                    <div className="crafts-detail">
                        <h2 className='sub-abt-heading'>Handcrafted with Care</h2>
                        <p>
                            Each item is meticulously crafted by our team of skilled artisans, ensuring the highest quality and attention to detail.
                        </p>
                    </div>
                    <div className="crafts-detail">
                        <h2 className='sub-abt-heading'>Unique and Sustainable</h2>
                        <p>
                            Our products are made using sustainable materials and techniques, making them both environmentally friendly and one-of-a-kind.
                        </p>
                    </div>
                    <div className="crafts-detail">
                        <h2 className='sub-abt-heading'>Supporting Local Artisans</h2>
                        <p>
                            By purchasing our products, you're supporting the livelihoods of local artisans and contributing to the growth of our community.
                        </p>
                    </div>
                    <div className="crafts-image">
                        <img src={cow} alt="Lion" /> {/* Displayed image of a cow */}
                    </div>
                </div>
            </div>

            {/* Section for customer reviews */}
            <div>
                <h2 className='sub-abt-heading'>Customer Reviews</h2> {/* Heading for customer reviews section */}
                <div className="reviews-container">
                    <div className="reviews">
                        {/* Individual customer reviews */}
                        <div className="review">"Excellent service and friendly staff!" - John D.</div>
                        <div className="review">"Great quality products, highly recommend!" - Sarah K.</div>
                        <div className="review">"Fast delivery and fantastic customer support!" - Mike P.</div>
                        <div className="review">"Very satisfied with my purchase!" - Emily R.</div>
                        <div className="review">"Outstanding experience from start to finish!" - David L.</div>
                    </div>
                </div>
                <h2 className='sub-abt-heading'><b style={{ fontFamily: 'Times New Roman, Arial, sans-serif' }}>2K</b>+ Happy Customers</h2> {/* Highlighted number of happy customers */}
            </div>

            {/* Footer section with navigation links and social media icons */}
            <div style={{ marginTop: '30px' }}>
                <footer className="footer">
                    <div className="footer-container">
                        <div className="footer-company-name">
                            <h2>Handmade Haven</h2> {/* Displayed company name */}
                        </div>
                        {/* Navigation links */}
                        <ul style={{ display: 'flex', listStyleType: 'none', padding: 0, margin: 0 }}>
                            <li style={{ marginRight: '20px' }}>
                                <Link to='/'>Home</Link> {/* Home link */}
                            </li>
                            <li style={{ marginRight: '20px' }}>
                                <Link to='/about' style={{ textDecoration: "underline", textUnderlineOffset: "10px" }}>About</Link> {/* About link with underline styling */}
                            </li>
                            <li style={{ marginRight: '20px' }}>
                                <Link to='/products'>Products</Link> {/* Products link */}
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link> {/* Contact link */}
                            </li>
                        </ul>
                        {/* Social media icons */}
                        <div className="footer-social-media">
                            <h3>Follow Us</h3> {/* Heading for social media section */}
                            <div className="social-icons">
                                <FaInstagram /> {/* Instagram icon */}
                                <FaXTwitter /> {/* Twitter icon */}
                                <FaFacebookF /> {/* Facebook icon */}
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default AboutOurCrafts;
