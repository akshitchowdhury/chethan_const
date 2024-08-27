import React from 'react'

import { Link } from 'react-router-dom';
import aboutImg2 from "../../assets/aboutImg2.jpg"
import { FaBuilding, FaTools, FaTrash, FaHammer } from 'react-icons/fa';
const HomeAbout = () => {
  return (
    <div className=" bg-gray-50 mx-auto px-4 py-16 ">
    <div className="flex items-center justify-center mb-12">
  <div className="flex-grow border-t w-[100px] border-amber-500"></div>
  <h1 className="text-4xl md:text-2xl font-semibold text-center mx-4 text-amber-500">
    ABOUT SSS ENTERPRISES
  </h1>
  <div className="flex-grow border-t w-[100px] border-amber-500"></div>
</div>

    <section className="mb-10">
      

   
      <div className="max-w-7xl mx-auto p-4 text-2xl  font-normal">
      <p className="text-justify text-gray-600 leading-relaxed mb-4">
        We are the Leading Class One Excavation Contractors and service providing company located in Bangalore. We are giving our best and specialized services for the past 20+ years around Bangalore and other metropolitan cities in South India. We have an experienced dedicated team of experts who can achieve any type of challenging tasks. We do business with our Associates, Clients, and Consultants with strong Business Ethics.
      </p>
      <p className="text-justify text-gray-600 leading-relaxed mb-4">
        We have undertaken plenty of work contracts from Government, Public sectors, and private sectors. So far, we have successfully completed major excavation works under reputed construction companies. Shree Chethan Services (SCS) is a Bangalore-based top player and pioneer in the category of building demolition Contractors in Bangalore.
      </p>
      <p className="text-justify text-gray-600 leading-relaxed mb-6">
        Established in 1994, Shree Chethan Services has been providing our clients with excellent services in Karnataka and across India.
      </p>
      
    </div>
    <div className="flex justify-center">
        <button className="bg-amber-400 text-gray-800 py-2 px-6 rounded-none hover:bg-amber-500 transition">
          KNOW MORE
        </button>
      </div>
    </section>
      
    </div>
  )
}

export default HomeAbout
