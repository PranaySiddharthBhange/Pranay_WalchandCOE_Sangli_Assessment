import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from './Form';
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';
import elephant from './assets/Baby Elephant 2.png';
import './Contact.css';
import FAQComponent from './FAQComponent';
import kite from "./assets/Kite.png";

const Contact = () => {
    return (
        <>
             <img src={kite} alt="Kite" className="leftIcon-about" />
            {/* Contact Section */}
            <div className='conthead'>Contact Us</div>
            <div className='contsubhead'>
                Have a question or want to learn more about our products? Don't hesitate to reach out!
            </div>
            <div className='contact-container'>
                <ContactForm />
                <img src={elephant} alt='Elephant' />
            </div>

            {/* Available On Section */}
            <h2 className='sub-abt-heading'>Available On</h2>
            <div className='available-container'>
                <div className='availablelist'>
                    <Link className='availablelist-indi' to='/'>Amazon</Link>
                    <Link className='availablelist-indi' to='/'>Flipkart</Link>
                    <Link className='availablelist-indi' to='/'>Myntra</Link>
                    <Link className='availablelist-indi' to='/'>Snapdeal</Link>
                </div>
                <FAQComponent />
            </div>

            {/* FAQ Section */}
            <FAQComponent />

            {/* Footer Section */}
            <div style={{ marginTop: '30px' }}>
                <footer className='footer'>
                    <div className='footer-container'>
                        <div className='footer-company-name'>
                            <h2>Handmade Haven</h2>
                        </div>
                        <ul className='footer-links'>
                            <li><Link to='/contact'>Contact</Link></li>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/products'>Products</Link></li>
                        </ul>
                        <div className='footer-social-media'>
                            <h3>Follow Us</h3>
                            <div className='social-icons'>
                                <FaInstagram />
                                <FaTwitter />
                                <FaFacebookF />
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Contact;
