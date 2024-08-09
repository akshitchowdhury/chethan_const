import React from 'react';
import { FaHardHat, FaProjectDiagram, FaUsers, FaRocket, FaHandshake, FaShieldAlt, FaMedal, FaTrophy } from 'react-icons/fa';

import AboutHero from './AboutHero';
import AboutText from './AboutText';
import aboutImg from "../../assets/aboutImg.webp"
import aboutImg2 from "../../assets/aboutImg2.jpg"
import WhyUs from './IndustryRecognition/WhyUs';
import Commitment from './Commitment/Commitment';
const About = () => {
  return (
    <>
    <AboutHero/>
    <AboutText/>
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen font-sans">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-yellow-400">About Chethan Construction</h1>
        
        <section className="mb-16">
          

          <h2 className="text-3xl font-semibold mb-6 text-yellow-300">Experience & Professionalism</h2>
          <div className='w-[300px] md:w-[500px] h-[2px] bg-yellow-300'></div>
          <div className='flex flex-col md:flex-row py-4'>
          
          <p className="text-sm md:text-lg mb-8 leading-relaxed md:w-[700px]">
          At Chethan, we bring over 20 years of extensive experience and unwavering professionalism to every project. We have established a solid reputation for excellence and reliability in the construction industry by successfully executing diverse and challenging projects across India. Our journey has been marked by continuous innovation, adaptability to evolving industry standards, and a commitment to pushing the boundaries of what's possible in construction. From humble beginnings to becoming a recognized leader in the field, we've consistently delivered results that not only meet but exceed our clients' expectations. 
          </p>
          
          
          <img src={aboutImg2} className='md:w-1/2'/>
          </div>
          
          
        </section>
        
        {/* <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-yellow-300">Our Commitment to Professionalism</h2>
          <div className='w-[300px] md:w-[500px] h-[2px] bg-yellow-300 my-4'></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <FaHandshake />, title: "Client-Centric Approach", description: "We prioritize clear communication and responsiveness, ensuring our clients are informed and satisfied throughout the project lifecycle." },
              { icon: <FaShieldAlt />, title: "Safety & Compliance", description: "Safety is paramount in everything we do. We strictly adhere to safety standards and regulations, implementing rigorous protocols to protect our team and the community." },
              { icon: <FaMedal />, title: "Quality Assurance", description: "We uphold rigorous quality standards to ensure every project meets and exceeds industry benchmarks." },
            ].map((item, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg transition-all duration-300 hover:bg-zinc-950">
                <div className="text-4xl text-yellow-400 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </section> */}
        <Commitment/>
        <div className='flex flex-col md:flex-row py-4 gap-x-5'>
          
          
        <img src={aboutImg} className='md:w-1/2'/>
          <p className="text-sm md:text-lg mb-8 leading-relaxed md:w-[700px] py-4">
          Our portfolio spans a wide range of projects, including residential complexes, commercial buildings, industrial facilities, and critical infrastructure, each showcasing our versatility and expertise. Through economic ups and downs, changing regulations, and technological advancements, we've remained steadfast in our dedication to quality craftsmanship and client satisfaction, cementing our position as a trusted name in India's construction landscape..
          </p>
          
          </div>
        
      
      </div>
    </div>
    <WhyUs/>
    </>
  );
};

export default About;