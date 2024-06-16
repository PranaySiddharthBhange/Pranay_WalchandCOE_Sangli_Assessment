import React from 'react';
import { Link } from "react-router-dom";
import './About.css';
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import kite from "./assets/Kite.png";
import cow from "./assets/Cow.png";
import Navbar from './Navbar';
// Functional component to display information about the crafts
const AboutOurCrafts = () => {
  return (
    <>
      <Navbar></Navbar>

      <img src={kite} alt="Kite" className="leftIcon-about" />
      <div className="about-our-crafts">
        <h1 className='headabout'>About Our Crafts</h1>
        <p>
          At Handmade Heaven, we believe in the power of handcrafted items to bring joy and beauty to everyday life. Our team of skilled artisans pours their hearts into every piece, ensuring that each one is a unique work of art.
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
            <img src={cow} alt="Lion" />
          </div>
        </div>
      </div>

      {/* Section for customer reviews */}
      <div>
        <h2 className='sub-abt-heading'>Customer Reviews</h2>
        <div className="reviews-container">
          <div className="reviews">
            <div className="review">"Excellent service and friendly staff!" - John D.</div>
            <div className="review">"Great quality products, highly recommend!" - Sarah K.</div>
            <div className="review">"Fast delivery and fantastic customer support!" - Mike P.</div>
            <div className="review">"Very satisfied with my purchase!" - Emily R.</div>
            <div className="review">"Outstanding experience from start to finish!" - David L.</div>
          </div>
        </div>
        <h2 className='sub-abt-heading'><b style={{ fontFamily: 'Times New Roman, Arial, sans-serif' }}>2K</b>+ Happy Customers</h2>
      </div>

      {/* Footer section */}
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
              <li style={{ marginRight: '20px' }}>
                <Link to='/about' style={{ textDecoration: "underline", textUnderlineOffset: "10px" }}>About</Link>
              </li>
              <li style={{ marginRight: '20px' }}>
                <Link to='/products'>Products</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
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
}

export default AboutOurCrafts;
