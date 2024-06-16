import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FiMenu } from 'react-icons/fi'; // Importing the hamburger menu icon
import './Navbar.css'; // Importing styles for the Navbar

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the open/close state of the menu

  // Function to toggle the menu open/close state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Main Navbar container */}
      <div className="navbar">
        {/* Hamburger menu icon */}
        <div className="hamburger-icon" onClick={toggleMenu}>
          <FiMenu />
        </div>
      </div>

      {/* Conditional rendering of the menu based on isOpen state */}
      {isOpen && (
        <div className="menu">
          <ul>
            {/* Navigation links */}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
