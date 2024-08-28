import React from 'react';
import aboutImg from "../../assets/excavation.jpg";
import AboutWhatWeDo from './AboutWhatWeDo';

const AboutBody = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="border-2 border-black bg-gray-50 mx-auto px-4 py-6 sm:py-8 md:py-10">
        <div className="flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32 mb-6 sm:mb-8 md:mb-12">
          <div className="flex-grow border-t border-black"></div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mx-2 sm:mx-4 text-amber-500 whitespace-nowrap">
            ABOUT SSS ENTERPRISES
          </h1>
          <div className="flex-grow border-t border-black"></div>
        </div>
        
        <section>
          <div className="max-w-7xl mx-auto p-4 text-base sm:text-lg md:text-xl font-normal -my-6 sm:-my-8 md:-my-12 flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="w-full md:w-1/2 mb-6 md:mb-0 flex justify-center md:justify-start">
              <img
                src={aboutImg}
                alt="Excavation Work"
                className="rounded-none shadow-md w-full max-w-[500px] h-auto object-cover"
              />
            </div>
            
            {/* Content Section */}
            <div className="w-full md:w-1/2 md:pl-6">
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
          </div>
          
          {/* Additional Content Section */}
          <AboutWhatWeDo />
        </section>
      </div>
    </div>
  );
};

export default AboutBody;