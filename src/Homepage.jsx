import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import lion from './assets/State Emblem of India.png';
import kite from "./assets/Kite.png";
import cow from "./assets/Cow.png";
import elephant from "./assets/Baby Elephant 2.png";
import diya from "./assets/Diya.png";
import firecracker from "./assets/Firecracker.png";
import gateway from "./assets/Gateway of India.png";
import lotus from "./assets/Lotus.png";
import sweets from "./assets/Sweets.png";
import taj from "./assets/Taj Mahal.png";
import Footer from "./Footer";
import './Homepage.css';

const Homepage = () => {
    // Array of images to be used in the slideshow
    const images = [lion, elephant, diya, firecracker, gateway, lotus, sweets, taj];

    // State to keep track of the current image index
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // useEffect hook to handle the image slideshow
    useEffect(() => {
        // Function to update the current image index to the next image
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // Interval of 4 seconds (4000 milliseconds)

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, [images.length]); // Dependency array to ensure effect runs correctly based on the length of images array

    return (
        <div>
            <div className="container">
                {/* Navigation Links */}
                <div className="linksContainer">
                    <Link to="/" className="link">Home</Link>
                    <Link to="/about" className="link">About</Link>
                    <Link to="/products" className="link">Products</Link>
                    <Link to="/contact" className="link">Contact</Link>
                </div>
                {/* Title */}
                <p className="title">Discover the Beauty of Handmade Crafts</p>
                {/* Slideshow Image */}
                <img src={images[currentImageIndex]} alt="Slideshow" className="mainIcon" />
                {/* Static Images */}
                <img src={kite} alt="Kite" className="leftIcon" />
                <img src={cow} alt="Cow" className="rightIcon" />
            </div>
            {/* Footer Component */}
            <Footer />
        </div>
    );
}

export default Homepage;
