import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ServicesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Handle click event for mobile view
  const handleClick = () => {
    setIsOpen(!isOpen); // Toggle dropdown for mobile
  };

  return (
    <div 
      className="relative group text-left z-50"  
      onMouseEnter={() => window.innerWidth > 768 && setIsOpen(true)} 
      onMouseLeave={() => window.innerWidth > 768 && setIsOpen(false)}
    >
      {/* Main link with click handler for mobile */}
      <button 
        onClick={handleClick} 
        className="text-zinc-950 font-medium relative hover:text-amber-400 group focus:outline-none"
      >
        SERVICES
        <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-amber-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
      </button>

      {/* Dropdown Menu */}
      <div 
        className={`absolute left-0 mt-2 w-60 bg-white shadow-lg py-2 transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 md:opacity-100'
        }`}
      >
        <ul className="opacity-100 transition-opacity duration-300">
          <li>
            <Link 
              to="/excavation" 
              className="block px-4 py-2 text-gray-700 hover:bg-amber-400 hover:text-white transition-colors duration-200"
              onClick={() => setIsOpen(false)} // Close dropdown on mobile after clicking a link
            >
              Excavation Services
            </Link>
          </li>
          <li>
            <Link 
              to="/demolition" 
              className="block px-4 py-2 text-gray-700 hover:bg-amber-400 hover:text-white transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Demolition Works & Dismantling Services
            </Link>
          </li>
          <li>
            <Link 
              to="/siteprep" 
              className="block px-4 py-2 text-gray-700 hover:bg-amber-400 hover:text-white transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Site Preparations
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ServicesDropdown;
