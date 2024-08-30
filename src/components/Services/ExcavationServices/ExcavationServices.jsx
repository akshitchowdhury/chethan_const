// // // ExcavationServices.jsx
// // import React from 'react';
// // import styled from 'styled-components';
// // import { FaDigging, FaMountain, FaHammer, Fa500Px } from 'react-icons/fa';
// // import ExcavationHero from './ExcavationHero';
// // import ExcavationText from './ExcavationText';

// // const ServicesContainer = styled.section`
// //   max-width: 1200px;
// //   margin: 0 auto;
// //   padding: 2rem;
// //   font-family: 'Arial', sans-serif;
// // `;

// // const Title = styled.h2`
// //   color: #2c3e50;
// //   text-align: center;
// //   margin-bottom: 2rem;
// //   font-size: 2.5rem;
// // `;

// // const ServicesGrid = styled.div`
// //   display: grid;
// //   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
// //   gap: 2rem;
// // `;

// // const ServiceCard = styled.div`
// //   background-color: #f8f9fa;
// //   border-radius: 10px;
// //   padding: 2rem;
// //   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
// //   transition: transform 0.3s ease;

// //   &:hover {
// //     transform: translateY(-5px);
// //   }
// // `;

// // const ServiceTitle = styled.h3`
// //   color: #34495e;
// //   display: flex;
// //   align-items: center;
// //   margin-bottom: 1rem;
// //   font-size: 1.5rem;
// // `;

// // const IconWrapper = styled.span`
// //   margin-right: 1rem;
// //   font-size: 1.8rem;
// //   color: #3498db;
// // `;

// // const ServiceDescription = styled.p`
// //   color: #7f8c8d;
// //   line-height: 1.6;
// // `;

// // const ExcavationServices = () => {
// //   return (
// //     <>
// //     <ExcavationHero/>
// //     <ExcavationText/>
// //     <ServicesContainer>
// //       <Title>Excavation Services</Title>
// //       <ServicesGrid>
// //         <ServiceCard>
// //           <ServiceTitle>
// //             <IconWrapper>
// //               <Fa500Px/>
// //             </IconWrapper>
// //             Earthworks
// //           </ServiceTitle>
// //           <ServiceDescription>
// //             Specializing in mass excavation, we prioritize safety and care to safeguard buried infrastructure such as
// //             sewer lines and water pipes.
// //           </ServiceDescription>
// //         </ServiceCard>
// //         <ServiceCard>
// //           <ServiceTitle>
// //             <IconWrapper>
// //               <FaMountain />
// //             </IconWrapper>
// //             Backfilling and Embankment Works
// //           </ServiceTitle>
// //           <ServiceDescription>
// //             We use high-quality materials like soil, murram, and gravel for stable backfilling and embankment
// //             projects.
// //           </ServiceDescription>
// //         </ServiceCard>
// //         <ServiceCard>
// //           <ServiceTitle>
// //             <IconWrapper>
// //               <FaHammer />
// //             </IconWrapper>
// //             Rock Cutting and Breaking Works
// //           </ServiceTitle>
// //           <ServiceDescription>
// //             Utilizing advanced technology, our team provides precise rock cutting and breaking services.
// //           </ServiceDescription>
// //         </ServiceCard>
// //       </ServicesGrid>
// //     </ServicesContainer>
// //     </>
// //   );
// // };

// // export default ExcavationServices;


// import React from 'react';
// import { FaDigging, FaMountain, FaHammer, Fa500Px } from 'react-icons/fa';
// import excavation from "../../../assets/excavation.jpg"
// import ExcavationHero from './ExcavationHero';
// import ExcavationText from './ExcavationText';
// import ServiceContact from '../ServiceContact';
// import ContactBody from '../../Contact/ContactBody';

// const services = [
//   {
//     icon: <Fa500Px className="text-cyan-500 text-3xl" />,
//     title: "Earthworks",
//     description: "Specializing in mass excavation, we prioritize safety and care to safeguard buried infrastructure such as sewer lines and water pipes.",
//   },
//   {
//     icon: <FaMountain className="text-amber-500 text-3xl" />,
//     title: "Backfilling and Embankment Works",
//     description: "We use high-quality materials like soil, murram, and gravel for stable backfilling and embankment projects.",
//   },
//   {
//     icon: <FaHammer className="text-zinc-500 text-3xl" />,
//     title: "Rock Cutting and Breaking Works",
//     description: "Utilizing advanced technology, our team provides precise rock cutting and breaking services.",
//   },
// ];

// const ExcavationServices = () => {
//   return (
//     <>
//       <ExcavationHero />
//       <ExcavationText />
//     <div className='bg-gray-50'>
//       <section className="mb-16 p-12 ">
          

//           <h2 className="text-3xl font-semibold mb-6 text-yellow-300">Excavation Services</h2>
//           <div className='w-[300px] md:w-[500px] h-[2px] bg-yellow-300'></div>
//           <div className='flex flex-col md:flex-row py-4 md:gap-x-10'>
          
//           <p className="text-sm md:text-lg mb-8 text-zinc-950 leading-relaxed md:w-[700px]">
//           At Chethan Constructions, we leverage over 20 years of extensive experience and unwavering professionalism in providing top-tier excavation services. Our solid reputation in the industry is built on a track record of successfully handling diverse and challenging excavation projects across India. We pride ourselves on our continuous innovation and adaptability to the latest industry standards, pushing the boundaries of what's possible in excavation. From our modest beginnings to becoming a recognized leader in the field, we consistently deliver excavation solutions that not only meet but exceed our clients' expectations.. 
//           </p>
          
          
//           <img src={excavation} className='md:w-1/2 h-[300px]'/>
//           </div>
          
//           <div className='flex flex-row mx-44 gap-x-12'>
//           <Fa500Px className="text-cyan-500 text-3xl" />
//           <FaMountain className="text-amber-500 text-3xl" />
//           <FaHammer className="text-zinc-500 text-3xl" />


//           </div>
//         </section>
//         </div>

//       <section className="max-w-6xl mx-auto p-6 bg-zinc-100 rounded-lg shadow-lg">
//         <h2 className="text-3xl font-bold text-zinc-800 text-center mb-8">Excavation Services</h2>
//         <div className="overflow-x-auto">
//           <table className="w-full table-auto bg-white rounded-lg shadow-md border border-zinc-200">
//             <thead className="bg-cyan-500 text-white">
//               <tr>
//                 <th className="p-4 text-left">Icon</th>
//                 <th className="p-4 text-left">Service</th>
//                 <th className="p-4 text-left">Description</th>
//               </tr>
//             </thead>
//             <tbody>
//               {services.map((service, index) => (
//                 <tr key={index} className="hover:bg-zinc-950 
//                  hover:text-zinc-50 trasnsition duration-700 ease-in-out">
//                   <td className="p-4 text-center">{service.icon}</td>
//                   <td className="p-4  font-semibold">{service.title}</td>
//                   <td className="p-4 ">{service.description}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </section>

//       <ContactBody/>
//     </>
//   );
// };

// export default ExcavationServices;


import React from 'react';
import { FaDigging, FaMountain, FaHammer } from 'react-icons/fa';
import { GiEarthCrack } from 'react-icons/gi';
import ExcavationHero from './ExcavationHero';
import ExcavationText from './ExcavationText';

import exc from "../../../assets/services/SSSE14.png"
import ContactBody from '../../Contact/ContactBody';

const services = [
  {
    icon: <GiEarthCrack className="text-cyan-500 text-3xl" />,
    title: "Earthworks",
    description: "Specializing in mass excavation, we prioritize safety and care to safeguard buried infrastructure such as sewer lines and water pipes.",
  },
  {
    icon: <FaMountain className="text-amber-500 text-3xl" />,
    title: "Backfilling and Embankment Works",
    description: "We use high-quality materials like soil, murram, and gravel for stable backfilling and embankment projects.",
  },
  {
    icon: <FaHammer className="text-zinc-500 text-3xl" />,
    title: "Rock Cutting and Breaking Works",
    description: "Utilizing advanced technology, our team provides precise rock cutting and breaking services.",
  },
];

const ExcavationServices = () => {
  return (
    <div className="bg-gray-50">
      <ExcavationHero />
      <ExcavationText />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Excavation Services</h2>
          <div className="mt-2 h-1 w-20 bg-yellow-300 mx-auto"></div>
        </div>
        
        <div className="bg-white overflow-hidden shadow-lg rounded-none">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-cyan-500 to-blue-500">
                  <th className="text-left text-white px-6 py-3">Service</th>
                  <th className="text-left text-white px-6 py-3">Description</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service, index) => (
                  <tr key={index} className="hover:bg-gray-100 transition-colors duration-200">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0">{service.icon}</div>
                        <div className="font-medium">{service.title}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">{service.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2 pr-8">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
                Our Expertise in Excavation
              </h2>
              <div className="h-1 w-20 bg-yellow-300 mb-8"></div>
              <p className="text-justify text-gray-600 leading-relaxed mb-4">
                At Chethan Constructions, we leverage over 20 years of extensive experience and unwavering professionalism in providing top-tier excavation services. Our solid reputation in the industry is built on a track record of successfully handling diverse and challenging excavation projects across India.
              </p>
              <p className="text-justify text-gray-600 leading-relaxed mb-4">
                We pride ourselves on our continuous innovation and adaptability to the latest industry standards, pushing the boundaries of what's possible in excavation. From our modest beginnings to becoming a recognized leader in the field, we consistently deliver excavation solutions that not only meet but exceed our clients' expectations.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <div className="relative h-64 lg:h-96 rounded-lg overflow-hidden shadow-xl">
                <img src={exc} alt="Excavation Expertise" className="w-full h-full object-cover"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ContactBody/>
    </div>
  );
};

export default ExcavationServices;