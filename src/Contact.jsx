import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from './Form';
import elephant from './assets/Baby Elephant 2.png';
import './Contact.css';
import FAQComponent from './FAQComponent';
import kite from "./assets/Kite.png";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
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
                <img src={elephant} className="crafts-image" alt='Elephant' />
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
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-company-name">
              <h2>Handmade Haven</h2>
            </div>
            <ul style={{ display: 'flex', listStyleType: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginRight: '20px' }}>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to="/about" style={{ marginRight: '20px' }}>About</Link>
              </li>
              <li style={{ marginRight: '20px' }}>
                <Link to='/products'>Products</Link>
              </li>
              <li >
                <Link to='/contact' style={{ textDecoration: "underline", textUnderlineOffset: "10px" }}>Contact</Link>
              </li>
              
              
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
        </>
    );
};

export default Contact;
