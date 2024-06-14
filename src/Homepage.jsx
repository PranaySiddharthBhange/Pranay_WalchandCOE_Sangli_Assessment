import React from 'react';
import lion from './assets/State Emblem of India.png';
import kite from "./assets/Kite.png";
import cow from "./assets/Cow.png";
import elephant from "./assets/Baby Elephant 2.png";
import diya from "./assets/Diya.png";
import firecracker from "./assets/Firecracker.png";
import gateway from "./assets/Gateway of India.png"
import lotus from "./assets/Lotus.png";
import sweets from "./assets/Sweets.png";
import taj from "./assets/Taj Mahal.png";
import { Link } from "react-router-dom";
import './Homepage.css'; 
import { useEffect,useState } from 'react';
const Homepage = () => {

    const images = [lion, elephant, diya, firecracker,gateway,lotus,sweets,taj];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Update currentImageIndex to the next image in the array
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Interval of 3 seconds (3000 milliseconds)

        return () => clearInterval(interval); // Cleanup function to clear interval on component unmount
    }, [images.length]); // useEffect dependency on images.length to ensure re-render on image list change




    return (
        <div>
            <div className="container">
                <div className="linksContainer">
                    <Link to="/home" className="link">Home</Link>
                    <Link to="/products" className="link">Products</Link>
                    <Link to="/contacts" className="link">Contact</Link>
                </div>
                <p className="title">Discover the Beauty of Handmade Crafts</p>
                {/* <img src={lion} alt="State Emblem of India" className="mainIcon" /> */}
                <img src={images[currentImageIndex]} alt="Slideshow Image" className="mainIcon" />
                
                <img src={kite} alt="Kite" className="leftIcon" />
                <img src={cow} alt="Cow" className="rightIcon" />
            </div>
        </div>
    );
}

export default Homepage;
