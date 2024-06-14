import React from 'react';
import { SiSnapcraft } from "react-icons/si";

const Header = () => {
  return (
    <header>
      <div className="">
        <div >
        <SiSnapcraft size={50} color="black" />
        <span className="text-lg font-extrabold ml-2 underline">Craft</span>
        </div>
        <nav className="w-full md:w-auto md:flex-grow mt-4 md:mt-0 md:ml-6">
          <ul className="flex flex-row md:flex-row md:space-x-6 space-y-4 md:space-y-0 items-center md:justify-end">
            <li><a href="#home" className="text-gray-600 hover:text-gray-900">Home</a></li>
            <li><a href="#products" className="text-gray-600 hover:text-gray-900">Products</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
