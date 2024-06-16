import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from './Form'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import elephant from "./assets/Baby Elephant 2.png";
import './Contact.css'
import FAQComponent from './FAQComponent'
const Contact = () => {
    return (
        <div>
         

         <div className='conthead'>Contact Us</div>
          <div className='contsubhead'>Have a question or want to learn more about our products? Don't hesitate to reach out!

</div>

            <div className='contact-container'>
                <ContactForm></ContactForm>
                <img src={elephant} alt="Elephant" />



            </div>
            <h2 class='sub-abt-heading'>Availabe On</h2>
            <div class="available-container">
                <div className='availablelist'>
                    <Link className='availablelist-indi' to="\">Amazon</Link>
                    <Link className='availablelist-indi' to="\">Flipkart</Link>
                    <Link className='availablelist-indi' to="\">Myntra</Link>
                    <Link className='availablelist-indi' to="\">Snapdeal</Link>
                </div>
                <FAQComponent />

            </div>

            <FAQComponent></FAQComponent>
            

            <div style={{ marginTop: '30px' }}>

                <footer className="footer">
                    <div className="footer-container">
                        <div className="footer-company-name">
                            <h2>Handmade Haven
                            </h2>

                        </div>
                        <ul style={{ display: 'flex', listStyleType: 'none', padding: 3, margin: 3 }}>
                            <Link to='/contact' style={{ marginRight: '20px', textDecoration: "underline", textUnderlineOffset: "10px" }}>Contact</Link>
                            <Link to='/' style={{ marginRight: '20px' }}>Home</Link>
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
        </div>
    );
}

export default Contact;
