import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ServicesDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <li 
        className="relative group text-left z-50"  
        onMouseEnter={() => setIsOpen(true)} 
        // onMouseLeave={() => setIsOpen(false)}
      >
         <Link 
    to="/services" 
    className="text-zinc-50 font-medium relative hover:text-amber-400 group"
  >
          SERVICES
          <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-amber-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
  
        {/* Dropdown Menu */}
        {isOpen && (
          <ul className="absolute left-0 mt-2 w-60 bg-white shadow-lg 
           py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <li>
              <a href="https://hillsidepharmacycollege.edu.in/research-activities.html" target='_blank' className="block px-4 py-2 text-gray-700 hover:bg-amber-400 hover:text-white transition-colors duration-200">
                Excavation Services
              </a>
            </li>
            <li>
              <a href="https://hillsidepharmacycollege.edu.in/research-activities.html" target='_blank' className="block px-4 py-2 text-gray-700 hover:bg-amber-400 hover:text-white transition-colors duration-200">
              Demolition Works & Dismantling Services
              </a>
            </li>
            <li>
              <a href="https://hillsidepharmacycollege.edu.in/research-activities.html" target='_blank' className="block px-4 py-2 text-gray-700 hover:bg-amber-400 hover:text-white transition-colors duration-200">
                Site Preparations
              </a>
            </li>
           
          </ul>
        )}
      </li>
    );
}

export default ServicesDropdown