import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from './Form/Form'; // Importing the ContactForm component for handling user inquiries
import elephant from '../assets/Baby Elephant 2.png'; // Importing image asset for visual appeal
import './Contact.css'; // Importing CSS file for Contact component styling
import FAQComponent from './FAQComponent/FAQComponent'; // Importing FAQComponent for displaying frequently asked questions
import kite from "../assets/Kite.png"; // Importing decorative kite image
import { FaInstagram } from "react-icons/fa"; // Importing Instagram icon from react-icons
import { FaXTwitter } from "react-icons/fa6"; // Importing Twitter icon from react-icons
import { FaFacebookF } from "react-icons/fa"; // Importing Facebook icon from react-icons

const Contact = () => {
    return (
        <>
            {/* Left decorative kite icon */}
            <img src={kite} alt="Kite" className="leftIcon-about" />

            {/* Contact Section */}
            <div className='conthead'>Contact Us</div> {/* Main heading for the Contact section */}
            <div className='contsubhead'>
                Have a question or want to learn more about our products? Don't hesitate to reach out!
            </div> {/* Subheading providing a brief message to encourage contact */}

            {/* Container for Contact Form and Visual Element */}
            <div className='contact-container'>
                <ContactForm /> {/* Renders the ContactForm component for user interaction */}
                <img src={elephant} className="crafts-image" alt='Elephant' /> {/*elephant image */}
            </div>

            {/* Available On Section */}
            <h2 className='sub-abt-heading'>Available On</h2> {/* Subheading for where products are available */}
            <div className='available-container'>
                <div className='availablelist'>
                    {/* Links to various online platforms */}
                    <Link className='availablelist-indi' to='/'>Amazon</Link>
                    <Link className='availablelist-indi' to='/'>Flipkart</Link>
                    <Link className='availablelist-indi' to='/'>Myntra</Link>
                    <Link className='availablelist-indi' to='/'>Snapdeal</Link>
                </div>
                <FAQComponent /> {/* Renders FAQComponent to provide answers to common inquiries */}
            </div>

            {/* FAQ Section */}
            <FAQComponent /> {/* rendering of FAQComponent */}

            {/* Footer Section */}
            <div style={{ marginTop: '30px' }}>
                <footer className="footer">
                    <div className="footer-container">
                        <div className="footer-company-name">
                            <h2>Handmade Haven</h2> {/* Footer section displaying company name */}
                        </div>
                        <ul style={{ display: 'flex', listStyleType: 'none', padding: 0, margin: 0 }}>
                            {/* Navigation links within the footer */}
                            <li style={{ marginRight: '20px' }}>
                                <Link to='/'>Home</Link> {/* Link to the homepage */}
                            </li>
                            <li>
                                <Link to="/about" style={{ marginRight: '20px' }}>About</Link> {/* Link to the About page */}
                            </li>
                            <li style={{ marginRight: '20px' }}>
                                <Link to='/products'>Products</Link> {/* Link to the Products page */}
                            </li>
                            <li>
                                <Link to='/contact' style={{ textDecoration: "underline", textUnderlineOffset: "10px" }}>Contact</Link> {/* Link to the Contact page with underlined styling */}
                            </li>
                        </ul>
                        <div className="footer-social-media">
                            <h3>Follow Us</h3> {/* Heading for social media follow section */}
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
};

export default Contact;
