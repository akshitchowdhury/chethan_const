import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const AboutDropDown = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div 
        className="relative group text-left z-50"  
        onMouseEnter={() => setIsOpen(true)} 
        // onMouseLeave={() => setIsOpen(false)}
      >
         <div
    className="cursor-pointer text-zinc-950 font-medium relative hover:text-amber-400 group"
  >
      ABOUT 
          <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-amber-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </div>
  
        {/* Dropdown Menu */}
        {isOpen && (
          <ul className="absolute left-0 mt-2 w-60 bg-white shadow-lg 
           py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <li>
              <Link to={"/aboutUs"} className="block px-4 py-2 text-gray-700 hover:bg-amber-400 hover:text-white transition-colors duration-200">
                About Us
              </Link>
            </li>
            <li>
            <Link to={"/team"} className="block px-4 py-2 text-gray-700 hover:bg-amber-400 hover:text-white transition-colors duration-200">
              
              Our Team
              </Link>
            </li>
            <li>
            <Link to={"/siteprep"} className="block px-4 py-2 text-gray-700 hover:bg-amber-400 hover:text-white transition-colors duration-200">
              
                Core Principles
              </Link>
            </li>
           
          </ul>
        )}
      </div>
    );
}

export default AboutDropDown