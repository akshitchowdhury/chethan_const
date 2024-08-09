import React from 'react';
import { FaTree, FaMapMarkedAlt, FaEarthAsia, FaTools } from 'react-icons/fa';
import sitePreparationImage from "../../../assets/sitePreparation.jpg";

import ServiceContact from '../ServiceContact';
import SitePreparationsHero from './SitePreparationsHero';
import SitePreparationsText from './SitePreparationsText';
import { FaEarthAfrica } from 'react-icons/fa6';

const services = [
  {
    icon: <FaTree className="text-green-500 text-3xl" />,
    title: "Jungle Cleaning and Land Leveling",
    description: "Efficient removal of vegetation and leveling of land to prepare the site for construction.",
  },
  {
    icon: <FaMapMarkedAlt className="text-blue-500 text-3xl" />,
    title: "Layout Formation",
    description: "Precise layout formation to ensure accurate and effective project planning and execution.",
  },
  {
    icon: <FaEarthAfrica className="text-brown-500 text-3xl" />,
    title: "Soil Supplying and Compaction",
    description: "Providing high-quality soil and ensuring proper compaction to create a stable foundation.",
  },
];

const SitePreparations = () => {
  return (
    <>
      <SitePreparationsHero />
      <SitePreparationsText />
      
      <div className='bg-cyan-950'>
        <section className="mb-16 p-12">
          <h2 className="text-3xl font-semibold mb-6 text-yellow-300">Site Preparation Services</h2>
          <div className='w-[300px] md:w-[500px] h-[2px] bg-yellow-300'></div>
          <div className='flex flex-col md:flex-row py-4 md:gap-x-10'>
            <p className="text-sm md:text-lg mb-8 text-zinc-200 leading-relaxed md:w-[700px]">
              At Chethan Constructions, we bring over 20 years of experience to our site preparation services. Our comprehensive approach ensures that every project starts with a solid foundation. We specialize in jungle cleaning and land leveling to prepare the site for construction, accurate layout formation to guide the project, and soil supplying and compaction to ensure a stable base. Our commitment to excellence and attention to detail guarantees that your project begins on the right track.
            </p>
            <img src={sitePreparationImage} className='md:w-1/2 h-[300px]' alt="Site Preparation Services" />
          </div>
          <div className='flex flex-row md:mx-32 gap-x-12'>
          <FaTree className="text-green-500 text-3xl" />
          <FaMapMarkedAlt className="text-blue-500 text-3xl" />
          <FaEarthAfrica className="text-brown-500 text-3xl" />


          </div>
        </section>
      </div>

      <section className="max-w-6xl mx-auto p-6 bg-zinc-100 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-zinc-800 text-center mb-8">Site Preparation Services</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto bg-white rounded-lg shadow-md border border-zinc-200">
            <thead className="bg-cyan-500 text-white">
              <tr>
                <th className="p-4 text-left">Icon</th>
                <th className="p-4 text-left">Service</th>
                <th className="p-4 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, index) => (
                <tr key={index} className="hover:bg-zinc-950 hover:text-zinc-50 transition duration-300 ease-in-out">
                  <td className="p-4 text-center">{service.icon}</td>
                  <td className="p-4 font-semibold">{service.title}</td>
                  <td className="p-4">{service.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <ServiceContact />
    </>
  );
};

export default SitePreparations;
