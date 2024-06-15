import React from 'react';
import './Footer.css'; 
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-company-name">
          <h2>Handmade Haven
          </h2>
        </div>
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
  );
}

export default Footer;
