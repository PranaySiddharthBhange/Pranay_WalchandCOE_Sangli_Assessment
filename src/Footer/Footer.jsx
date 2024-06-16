import React from 'react';
import './Footer.css'; // Importing the CSS file for Footer component styling
import { FaInstagram } from "react-icons/fa"; // Importing Instagram icon from react-icons
import { FaXTwitter } from "react-icons/fa6"; // Importing Twitter icon from react-icons
import { FaFacebookF } from "react-icons/fa"; // Importing Facebook icon from react-icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Company Name Section */}
        <div className="footer-company-name">
          <h2>Handmade Haven</h2> {/* Heading displaying company name */}
        </div>
        
        {/* Social Media Section */}
        <div className="footer-social-media">
          <h3>Follow Us</h3> {/* Heading indicating social media follow */}
          
          {/* Social Icons */}
          <div className="social-icons">
            <FaInstagram /> {/* Instagram Icon */}
            <FaXTwitter /> {/* Twitter Icon */}
            <FaFacebookF /> {/* Facebook Icon */}
          </div>
        </div>
      
      </div>
    </footer>
  );
}

export default Footer;
