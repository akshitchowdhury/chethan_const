import React from 'react';
import { FaBuilding, FaTools, FaTrash, FaHammer } from 'react-icons/fa';
import demolitionImage from "../../../assets/demolition.webp";
import DemolitionHero from "./DemolitionHero";
import DemolitionText from "./DemolitionText";
import ServiceContact from '../ServiceContact';

const services = [
  {
    icon: <FaBuilding className="text-cyan-500 text-3xl" />,
    title: "Full Demolition Works",
    description: "Complete removal of structures with meticulous attention to safety and environmental concerns.",
  },
  {
    icon: <FaTools className="text-amber-500 text-3xl" />,
    title: "Partial Demolition Works",
    description: "Selective dismantling to maintain structural integrity.",
  },
  {
    icon: <FaTrash className="text-zinc-500 text-3xl" />,
    title: "Interior Fit-Out Dismantling Works",
    description: "Safe removal of interior structures for renovation or repurposing.",
  },
  {
    icon: <FaHammer className="text-cyan-500 text-3xl" />,
    title: "Warm Shell Demolition Works",
    description: "Preserving concrete structures while removing internal fixtures.",
  },
  {
    icon: <FaBuilding className="text-amber-500 text-3xl" />,
    title: "Reinstatement Works",
    description: "Renewal, reconstruction, or repair to meet project requirements.",
  },
];

const DemolitionDismantle = () => {
  return (
    <>
      <DemolitionHero />
      <DemolitionText />
      
      <div className='bg-cyan-950'>
        <section className="mb-16 p-12">
          <h2 className="text-3xl font-semibold mb-6 text-yellow-300">Demolition and Dismantling Services</h2>
          <div className='w-[300px] md:w-[500px] h-[2px] bg-yellow-300'></div>
          <div className='flex flex-col md:flex-row py-4 md:gap-x-10'>
            <p className="text-sm md:text-lg mb-8 text-zinc-200 leading-relaxed md:w-[700px]">
              At Chethan Constructions, we offer comprehensive demolition and dismantling services with over 20 years of industry expertise. Our focus on safety, efficiency, and environmental responsibility ensures that each project is executed with the highest standards. From full and partial demolitions to specialized interior dismantling and warm shell removals, our team is equipped to handle diverse requirements. We also provide reinstatement services to renew and reconstruct structures, demonstrating our commitment to exceeding client expectations.
            </p>
            <img src={demolitionImage} className='md:w-1/2 h-[300px]' alt="Demolition Services" />
          </div>
        </section>
      </div>

      <section className="max-w-6xl mx-auto p-6 bg-zinc-100 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-zinc-800 text-center mb-8">Demolition and Dismantling Services</h2>
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

export default DemolitionDismantle;
