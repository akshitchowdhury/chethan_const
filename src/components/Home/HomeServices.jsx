// import React, { useState } from 'react';
// import { FaExclamationCircle, FaOilCan, FaExplosion, FaWrench, FaTools, FaMapMarkedAlt, FaHandshake, Fa500Px, FaTruckMonster, FaRockrms } from 'react-icons/fa';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// import { FaBomb, FaBuildingCircleExclamation, FaBuildingShield, FaChair, FaRecycle } from 'react-icons/fa6';

// const HomeServices = () => {
//   const [activeTab, setActiveTab] = useState(0);

//   const services = [
//     {
//       title: 'Excavation Services',
//       items: [
//         {
//           icon: <FaExclamationCircle />,
//           title: 'Earthworks',
//           description: 'Specializing in mass excavation, we prioritize safety and care to safeguard buried infrastructure such as sewer lines and water pipes.'
//         },
//         {
//           icon: <FaOilCan />,
//           title: 'Backfilling and Embankment Works',
//           description: 'We use high-quality materials like soil, murram, and gravel for stable backfilling and embankment projects.'
//         },
//         {
//           icon: <FaRockrms />,
//           title: 'Rock Cutting and Breaking Works',
//           description: 'Utilizing advanced technology, our team provides precise rock cutting and breaking services.'
//         }
//       ]
//     },
//     {
//       title: 'Demolition Works & Dismantling Services',
//       items: [
//         {
//           icon: <FaBomb />,
//           title: 'Full Demolition Works',
//           description: 'Complete removal of structures with meticulous attention to safety and environmental concerns.'
//         },
//         {
//           icon: <FaBuildingShield/>,
//           title: 'Partial Demolition Works',
//           description: 'Selective dismantling to maintain structural integrity.'
//         },
//         {
//           icon: <FaWrench/>,
//           title: 'Interior Fit-Out Dismantling Works',
//           description: 'Safe removal of interior structures for renovation or repurposing.'
//         },
//         {
//           icon: <Fa500Px/>,
//           title: 'Warm Shell Demolition Works',
//           description: 'Preserving concrete structures while removing internal fixtures.'
//         },
//         {
//           icon: <FaRecycle/>,
//           title: 'Reinstatement Works',
//           description: 'Renewal, reconstruction, or repair to meet project requirements.'
//         }
//       ]
//     },
//     {
//       title: 'Additional Services',
//       items: [
//         {
//           icon: <FaBuildingCircleExclamation />,
//           title: 'Site Preparations',
//           description: 'Jungle Cleaning and Land Leveling, Layout Formation, Soil Supplying and Compaction'
//         }
//       ]
//     }
// ]

//   return (
//     <>
//     <div className="bg-inherit text-white font-sans  p-4">
//       <div className="container mx-auto px-4 py-16">
      
//     <h1 className='text-center text-4xl text-zinc-50 '>SERVICES WE OFFER</h1>
//         <div className="bg-inherit p-12 rounded-lg shadow-lg">
//           <div className="flex md:flex-row flex-col gap-y-6 justify-center mb-6">
//             <button
//               className={`px-4 py-2 rounded-lg mx-2 transition-colors duration-300 ${activeTab === 0 ? 'bg-yellow-400 text-gray-900' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
//               onClick={() => setActiveTab(0)}
//             >
//               Excavation Services
//             </button>
//             <button
//               className={`px-4 py-2 rounded-lg mx-2 transition-colors duration-300 ${activeTab === 1 ? 'bg-yellow-400 text-gray-900' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
//               onClick={() => setActiveTab(1)}
//             >
//               Demolition Works & Dismantling Services
//             </button>
//             <button
//               className={`px-4 py-2 rounded-lg mx-2 transition-colors duration-300 ${activeTab === 2 ? 'bg-yellow-400 text-gray-900' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
//               onClick={() => setActiveTab(2)}
//             >
//               Additional Services
//             </button>
//           </div>
//           <Carousel
//             showArrows={false}
//             showStatus={false}
//             showIndicators={false}
//             showThumbs={false}
//             autoPlay={false}
//             interval={1000}
//             selectedItem={activeTab}
//             className={`p-6 ${activeTab< 2 ? 'h-auto': 'h-[400px]'} `}
            
//           >
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 // className={` md:gap-y-12 md:flex ${index === 2 ? 'flex-row  justify-center items-center' : 'flex-row   justify-center items-center'}
//                 //  justify-center items-center gap-x-4`}
//               className='gap-x-4 flex flex-col md:flex-row flex-1 w-[100%]'
//               >
//                 {service.items.map((item, itemIndex) => (
//                   <div
//                     key={itemIndex}
//                     className="bg-gray-800 my-4
//                      p-6 rounded-lg flex  flex-col flex-1 justify-center 
//                      items-center w-[100%] h-auto md:h-[300px] shadow-lg transition-all duration-300 hover:bg-zinc-950"
//                   >
//                     <div className="text-4xl text-yellow-400 mb-4">{item.icon}</div>
//                     <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//                     <p className="text-gray-300 text-left">{item.description}</p>
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </Carousel> 
       
            
//         </div>

        
//       </div>
//     </div>
    
//     </>
//   );
// };

// export default HomeServices;

import React from 'react';
import s1 from "../../assets/services/SSSE3.jpg"
import s2 from "../../assets/services/SSSE1.jpg"
import s3 from "../../assets/services/SSSE16.jpg"
import s4 from "../../assets/services/SSSE15.jpg"
const HomeServices = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col w-full mb-20 items-center">
        <div className="flex items-center justify-center px-32 mb-12">
        <div className="flex-grow border-t w-[50px] md:w-[100px] border-black"></div>
        <h1 className="text-4xl md:text-2xl font-semibold text-center mx-4 text-amber-500">
           SSS ENTERPRISES
        </h1>
        <div className="flex-grow border-t w-[50px] md:w-[100px] border-black"></div>
      </div>

          <p className="lg:w-1/2 w-full text-lg text-justify text-gray-600 leading-relaxed
           mb-6">
         Shree Siddhi Sai Enterprises is a Bangalore based top player and pioneers
in the category of building demolition Contractors in Bangalore Established
in 1994. We have been providing our clients with excellent services in Karnataka and across India
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-white p-6 rounded-none border border-amber-600">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={s1}
                alt="content"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-white p-6 rounded-none border border-amber-600">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={s2}
                alt="content"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-white p-6 rounded-none border border-amber-600">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={s3}
                alt="content"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-white p-6 rounded-none border border-amber-600">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={s4}
                alt="content"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
