import { faGlobeAsia, faMapMarkerAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ContactBody = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <div className="pb-16">
          <div className="text-left mb-8">
            <h2 className="text-4xl font-semibold mb-4">CONTACT INFORMATION</h2>
            <div className='w-[500px] h-[2px] bg-gray-500'></div>
            <p>
            Partner with Chethan for reliable, safe, and high-quality service delivery across India. Contact us today
            to discuss your demolition, excavation, or site preparation needs.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-start lg:space-x-8">
            <div className="flex items-center mb-8 lg:mb-0">
              <div className="text-3xl text-gray-800 mr-4">
                <FontAwesomeIcon className='text-amber-400' icon={faMapMarkerAlt}/>
              </div>
              <div>
                <p>Stock Building, 125 Main Street <br /> 1st Lane, San Francisco, USA</p>
              </div>
            </div>
            <div className="flex items-center mb-8 lg:mb-0">
              <div className="text-3xl text-gray-800 mr-4">
              <FontAwesomeIcon className='text-amber-400' icon={faMobileAlt}/>
              </div>
              <div>
                <p><a href="tel:+00124568365987">(001) 24568 365 987</a></p>
                <p><a href="tel:+00165897569784">(001) 65897 569 784</a></p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-3xl text-gray-800 mr-4">
              <FontAwesomeIcon className='text-amber-400' icon={faGlobeAsia}/>
              </div>
              <div>
                <p><a href="mailto:infor@example.com">infor@example.com</a></p>
                <p><a href="http://www.example.com" target="_blank" rel="noopener noreferrer">www.example.com</a></p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="pb-16">
          <h2 className="text-4xl font-semibold text-center mb-8">WHERE WE LOCATED</h2>
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                id="gmap_canvas"
                className="w-full h-96"
                src="https://maps.google.com/maps?q=121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              ></iframe>
            </div>
          </div>
        </div> */}
        <div>
          <h2 className="text-4xl font-semibold text-center mb-8">SEND US A MESSAGE</h2>
          <div className="max-w-3xl mx-auto">
            <form id="contact-form" action="https://whizthemes.com/nazmul/php/mail.php" method="post">
              <div className="grid grid-cols-1 gap-6">
                <div className="flex flex-col">
                  <label className="mb-2 font-medium">Your Name*</label>
                  <input type="text" name="name" className="border p-2" />
                </div>
                <div className="flex flex-col">
                  <label className="mb-2 font-medium">Your Email*</label>
                  <input type="email" name="email" className="border p-2" />
                </div>
                <div className="flex flex-col">
                  <label className="mb-2 font-medium">Subject*</label>
                  <input type="text" name="subject" className="border p-2" />
                </div>
                <div className="flex flex-col">
                  <label className="mb-2 font-medium">Message*</label>
                  <textarea name="message" className="border p-2" rows="6"></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">SEND NOW</button>
                </div>
              </div>
            </form>
            <div className="form-output mt-4 text-center">
              <p className="form-messege"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBody;
