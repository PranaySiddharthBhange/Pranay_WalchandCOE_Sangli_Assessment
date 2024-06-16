import React from 'react';
import { Link } from "react-router-dom";

import './About.css';
import cow from "./assets/Cow.png";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";


const AboutOurCrafts = () => {
  return (
    <>

<div className="about-our-crafts">
      <h1 className='headabout'>About Our Crafts</h1>
      <p>
        At Handmade Heaven, we believe in the power of handcrafted items to bring joy and beauty to everyday life. Our team of skilled artisans pours their hearts into every piece, ensuring that each one is a unique work of art.
      </p>
      <div className="crafts-details">
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
          <img src={cow} alt="Craft" />
        </div>
      </div>

      
    </div>
    <div>
    <h2 class='sub-abt-heading'>Customer Reviews</h2>
    <div class="reviews-container">
        <div class="reviews">
            <div class="review">"Excellent service and friendly staff!" - John D.</div>
            <div class="review">"Great quality products, highly recommend!" - Sarah K.</div>
            <div class="review">"Fast delivery and fantastic customer support!" - Mike P.</div>
            <div class="review">"Very satisfied with my purchase!" - Emily R.</div>
            <div class="review">"Outstanding experience from start to finish!" - David L.</div>
        </div>
    </div>
    <h2 className='sub-abt-heading'><b style={{ fontFamily: 'Times New Roman,Arial, sans-serif' }}>2K</b>+ Happy Customers</h2>

</div>
    
  


<div style={{ marginTop: '30px' }}>
                
                <footer className="footer">
                    <div className="footer-container">
                        <div className="footer-company-name">
                            <h2>Handmade Haven
                            </h2>

                        </div>
                        <ul style={{ display: 'flex', listStyleType: 'none', padding: 3, margin: 3 }}>
                            <Link to='/contact' style={{ marginRight: '20px',textDecoration :"underline",textUnderlineOffset : "10px" }}>Contact</Link>
                            <Link to='/'style={{ marginRight: '20px' }}>Home</Link>
                            <Link to="/products">Products</Link>
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
