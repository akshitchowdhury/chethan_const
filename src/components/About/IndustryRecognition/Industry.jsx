import React from 'react'
import { FaHardHat, FaProjectDiagram, FaUsers, FaRocket, FaHandshake, FaShieldAlt, FaMedal, FaTrophy } from 'react-icons/fa';

const Industry = () => {
  return (
    <>
          

        <div className="grid grid-cols-1 py-5 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <FaHardHat />, title: "20 Years of Industry Leadership", description: "Our long-standing presence in the industry reflects our commitment to delivering exceptional results." },
              { icon: <FaProjectDiagram />, title: "Diverse Project Portfolio", description: "From residential developments to large-scale infrastructure, we have demonstrated expertise in tackling various construction challenges." },
              { icon: <FaUsers />, title: "Skilled Team of Experts", description: "Our professionals are highly trained and experienced, ensuring precision and efficiency in every task." },
              { icon: <FaRocket />, title: "Advanced Technology & Methods", description: "We utilize cutting-edge technology and innovative methods for superior project outcomes, including precise rock cutting and efficient land development." },
              { icon: <FaTrophy  />, title: "IndustryRecognition", description: "Our dedication to excellence has earned us recognition within the industry and repeat business from satisfied clients. Whether it's excavation, demolition, or site preparation, Chethan is synonymous with reliability and expertise." },
            ].map((item, index) => (
              <div key={index} className="bg-gray-700 p-6 
              rounded-lg shadow-lg transition-all duration-300 hover:bg-gray-600">
                <div className="text-4xl text-yellow-400 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
    </>
  )
}

export default Industry
