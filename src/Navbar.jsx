import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { FiMenu } from 'react-icons/fi'; 
import './Navbar.css'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="navbar">
        <div className="hamburger-icon" onClick={toggleMenu}>
          <FiMenu />
        </div>
      </div>

      {isOpen && (
        <div className="menu">
          <ul>
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
