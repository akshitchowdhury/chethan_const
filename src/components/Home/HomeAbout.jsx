import React from 'react'

import { Link } from 'react-router-dom';
import aboutImg2 from "../../assets/aboutImg2.jpg"
import { FaBuilding, FaTools, FaTrash, FaHammer } from 'react-icons/fa';
const HomeAbout = () => {
  return (
    <div className=" bg-gray-950 mx-auto px-4 py-16 ">
    <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-cyan-500">About Chethan Construction</h1>
    
    <section className="mb-16">
      

      <h2 className="text-3xl font-semibold mb-6 text-cyan-500">Experience & Professionalism</h2>
      <div className='w-[300px] md:w-[500px] h-[2px] bg-cyan-950'></div>
      <div className='flex flex-col gap-y-5 md:flex-row py-4'>
      <div>
      <p className="text-sm text-zinc-50 md:text-lg mb-8 leading-relaxed md:w-[700px]">
      At Chethan, we bring over 20 years of extensive experience and unwavering professionalism to every project. We have established a solid reputation for excellence and reliability in the construction industry by successfully executing diverse and challenging projects across India. Our journey has been marked by continuous innovation, adaptability to evolving industry standards, and a commitment to pushing the boundaries of what's possible in construction. From humble beginnings to becoming a recognized leader in the field, we've consistently delivered results that not only meet but exceed our clients' expectations. 
      </p>
      
      <div className='flex flex-row md:mx-32 gap-x-12'>
          <FaBuilding className="text-cyan-500 text-3xl" />
          <FaTools className="text-amber-500 text-3xl" />
          <FaTrash className="text-zinc-500 text-3xl" />
          <FaHammer className="text-cyan-500 text-3xl" />
          <FaBuilding className="text-amber-500 text-3xl" />
          </div>

          <Link to={"/contact"}>
        <button className="w-44 h-12 max-w-xs px-4 py-2 my-6  bg-gray-50  text-zinc-950 
        hover:text-white font-bold 
         shadow-md hover:bg-amber-400 focus:outline-none 
         focus:ring-2 focus:ring-amber-300 focus:ring-opacity-50 transition duration-300 ease-in-out">
  
  Contact Us
  
  </button>
  </Link>
          </div>
      <img src={aboutImg2} className='md:w-1/2'/>
      </div>
      
      
    </section>
      
    </div>
  )
}

export default HomeAbout
