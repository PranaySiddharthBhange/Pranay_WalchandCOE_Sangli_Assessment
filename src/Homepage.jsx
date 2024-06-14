import React from 'react';
import lion from './assets/State Emblem of India.png';
import kite from "./assets/Kite.png";
import cow from "./assets/Cow.png";
import { Link } from "react-router-dom";
import './Homepage.css'; 

const Homepage = () => {
    return (
        <div>
            <div className="container">
                <div className="linksContainer">
                    <Link to="/home" className="link">Home</Link>
                    <Link to="/products" className="link">Products</Link>
                    <Link to="/contacts" className="link">Contact</Link>
                </div>
                <p className="title">Discover the Beauty of Handmade Crafts</p>
                <img src={lion} alt="State Emblem of India" className="mainIcon" />
                <img src={kite} alt="Kite" className="leftIcon" />
                <img src={cow} alt="Cow" className="rightIcon" />
            </div>
        </div>
    );
}

export default Homepage;
