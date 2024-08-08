import React from 'react';
import { FaHardHat, FaProjectDiagram, FaUsers, FaRocket, FaHandshake, FaShieldAlt, FaMedal, FaTrophy } from 'react-icons/fa';
import AboutHero from './AboutHero';
import AboutText from './AboutText';

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
          <p className="text-lg mb-8 leading-relaxed">
            At Chethan, we bring over 20 years of extensive experience and unwavering professionalism to every project. We have established a solid reputation for excellence and reliability in the construction industry by successfully executing diverse and challenging projects across India.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <FaHardHat />, title: "20 Years of Industry Leadership", description: "Our long-standing presence in the industry reflects our commitment to delivering exceptional results." },
              { icon: <FaProjectDiagram />, title: "Diverse Project Portfolio", description: "From residential developments to large-scale infrastructure, we have demonstrated expertise in tackling various construction challenges." },
              { icon: <FaUsers />, title: "Skilled Team of Experts", description: "Our professionals are highly trained and experienced, ensuring precision and efficiency in every task." },
              { icon: <FaRocket />, title: "Advanced Technology & Methods", description: "We utilize cutting-edge technology and innovative methods for superior project outcomes, including precise rock cutting and efficient land development." },
            ].map((item, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg transition-all duration-300 hover:bg-gray-600">
                <div className="text-4xl text-yellow-400 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-yellow-300">Our Commitment to Professionalism</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <FaHandshake />, title: "Client-Centric Approach", description: "We prioritize clear communication and responsiveness, ensuring our clients are informed and satisfied throughout the project lifecycle." },
              { icon: <FaShieldAlt />, title: "Safety & Compliance", description: "Safety is paramount in everything we do. We strictly adhere to safety standards and regulations, implementing rigorous protocols to protect our team and the community." },
              { icon: <FaMedal />, title: "Quality Assurance", description: "We uphold rigorous quality standards to ensure every project meets and exceeds industry benchmarks." },
            ].map((item, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg transition-all duration-300 hover:bg-gray-600">
                <div className="text-4xl text-yellow-400 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-yellow-300">Industry Recognition</h2>
          <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
            <div className="text-6xl text-yellow-400 mb-6 flex justify-center">
              <FaTrophy />
            </div>
            <p className="text-lg text-center leading-relaxed">
              Our dedication to excellence has earned us recognition within the industry and repeat business from satisfied clients. Whether it's excavation, demolition, or site preparation, Chethan is synonymous with reliability and expertise.
            </p>
          </div>
        </section>
      </div>
    </div>
    </>
  );
};

export default About;