import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
// import footerLogo from "../../assets/logo-removebg-preview.png"
import {
  faEnvelopeOpen,
  faFileAlt,
  faFileArchive,
  faMapMarkedAlt,
  faMapMarker,
  faMobile,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons/faMapMarkerAlt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo (2).png"
import "./Footer.css"
const Footer = () => {
  const handleClick = () => {
    window.scrollTo({ behavior: 'smooth', top: "0" });
  };
  return (
    <div className="footer bg-zinc-950 py-8">
      {/* Newslatter and Columns */}
      <div className=" bg-black bg-opacity-50 absolute top-0 left-0 p-4
      h-full ">
        {/* Footer Columns */}
        <div className="footer-columns p-10">
          <div className="flex flex-col lg:flex-row md:flex-row ">
            {/* Column */}
            <div className="w-full sm:w-1/3 mb-8 sm:mb-0 text-left">
              <div className="-my-12 text-white">

                <div className="font-bold flex flex-row items-center">
                  <img src={logo} className='w-[150px] h-[150px] py-2' />

                </div>
                <p>
                  Established in 1994, Shree Chethan Services has been providing our clients with excellent services in Karnataka and across India.
                </p>
                <div className="social-icons mt-4">
                  <ul className="flex space-x-3">
                    <li>
                      <FontAwesomeIcon
                        icon={faFacebook}
                        className="text-white text-3xl
                    hover:text-amber-400 transition ease-in-out duration-300"
                      />
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="text-white text-3xl
                    hover:text-amber-400 transition ease-in-out duration-300"
                      />
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faTwitter}
                        className="text-white text-3xl
                    hover:text-amber-400 transition ease-in-out duration-300"
                      />
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        className="text-white text-3xl
                    hover:text-amber-400 transition ease-in-out duration-300"
                      />
                    </li>
                  </ul>
                </div>
                <br />
                <div className="address-list mt-2">
                  <ul className="text-left">
                    <li className="flex items-center -my-4 ">
                      <FontAwesomeIcon
                        icon={faEnvelopeOpen}
                        className="text-amber-400 
                   text-xl p-4"
                      />
                      <a
                        href="mailto:admissions@hillsideacademy.in"
                        className="text-white"
                      >
                        chethanaservices@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Column */}
            {/* Column */}
            <div className="w-full sm:w-1/3 my-12 lg:my-0 md:my-0mb-12 ">
              <div className="footer-c-widget h-white list-widget text-white">
                <h3 className="text-lg font-semibold mb-4 mx-14">QUICK LINKS</h3>
                <ul className="text-left px-20">
                  <li className="relative">
                    <Link onClick={handleClick} to={"/"}
                      className="block mb-2 after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-amber-400 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="relative">
                    <Link onClick={handleClick} to={"/about"}
                      className="block mb-2 after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-amber-400 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="relative">
                    <Link onClick={handleClick} to={"/services"}
                      className="block mb-2 after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-amber-400 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                    >
                      Services
                    </Link>
                  </li>
                  <li className="relative">
                    <Link onClick={handleClick} to={"/career"}
                      className="block mb-2 after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-amber-400 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                    >
                      Careers
                    </Link>
                  </li>
                  {/* <li className="relative">
                    <Link onClick={ handleClick} to={"/gallery"}
                      className="block mb-2 after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-amber-400 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                    >
                      Gallery
                    </Link>
                  </li> */}



                  <li className="relative ">
                    <Link onClick={handleClick} to={"/contact"}
                      className="block mb-2 after:content-[''] after:absolute
                       after:w-10 after:h-0.5 after:bg-amber-400 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full sm:w-1/3 my-6 lg:my-0 md:my-0mb-12 ">
              <div className="footer-c-widget h-white list-widget text-white">
                <h3 className="text-lg font-semibold mb-4 mx-14">SERVICES</h3>
                <ul className="text-left px-12">
                  <li className="relative">
                    <Link onClick={handleClick} to={"/excavation"}
                      className="block mb-2 after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-amber-400 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                    >
                      Excavation Services
                    </Link>
                  </li>
                  <li className="relative">
                    <Link onClick={handleClick} to={"/demolition"}
                      className="block mb-2 after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-amber-400 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                    >
                      Demolition/Dismantling Services
                    </Link>
                  </li>
                  <li className="relative">
                    <Link onClick={handleClick} to={"/siteprep"}
                      className="block mb-2 after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-amber-400 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                    >
                      Site Preparations
                    </Link>
                  </li>

                </ul>
              </div>
            </div>
            {/* Column */}
            {/* Column */}
            <div className="w-full my-6 md:my-0 sm:w-1/3 mb-8 sm:mb-0">
              <div className="footer-c-widget h-white address-list text-white">
                <h3 className="text-lg md:text-left text-center  font-semibold mb-4">
                  CONTACT US
                </h3>
                <ul className="text-left">
                  <li className="flex items-start mb-4">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="text-amber-400 text-xl px-4"
                    />{" "}
                    53/3, Nagavarapalya Main Rd, Rajana Colony, C V Raman Nagar, Bengaluru, Karnataka 560093
                  </li>
                  <hr className="border-gray-700 mb-4" />
                  <h5 className="text-md text-center md:text-left font-semibold mb-2">
                    PHONE NO
                  </h5>
                  <li className="flex items-start mb-4">
                    <FontAwesomeIcon
                      icon={faMobileAlt}
                      className="text-amber-400 text-xl px-4"
                    />{" "}
                    +91-9448334376
                  </li>
                  {/* <hr className="border-gray-700 mb-4" />
                  <li className="flex items-start mb-4">
                    <FontAwesomeIcon
                      icon={faFileAlt}
                      className="text-amber-400 text-xl px-4 "
                    />{" "}
                    <a
                      href="brochure/Hillside-Academy-Brochure.pdf"
                      target="_blank"
                      className="text-white text-center"
                    >
                      Download Brochure
                    </a>
                  </li> */}
                  <hr className="border-gray-700 mb-4" />
                  <li className="flex items-start">
                    <FontAwesomeIcon
                      icon={faFileArchive}
                      className="text-amber-400 text-xl px-4"
                    />{" "}
                    <a
                      href="privacy-policy.html"
                      className="text-white text-center"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Column */}
          </div>
        </div>
        {/* Footer Columns */}
      </div>
      {/* Newslatter and Columns */}

      {/* Sub Footer */}
      {/* <div className="sub-footer bg-gray-900 text-white text-center py-4">
        <p className="text-sm">Powered by INNOMATRICS TECH.</p>
      </div> */}
      {/* Sub Footer */}
    </div>
  );
};

export default Footer;

// import footerbg from "../../assets/homeHero3.jpg"
// const Footer = () => {
//   return (
//     <footer className="relative">
//       <div
//         className="absolute inset-0 bg-black opacity-95"
//         style={{
//           backgroundImage: `url(${footerbg})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           zIndex: '-1',
//         }}
//       ></div>
//       <div className="relative max-w-6xl mx-auto py-12 text-white flex justify-between">
//         <div>
//           <h2 className="font-semibold mb-4">QUICK LINKS</h2>
//           <ul className="space-y-2">
//             <li>&gt; MFAR Group</li>
//             <li>&gt; Awards & Recognitions</li>
//             <li>&gt; Job Portal</li>
//             <li>&gt; The Team</li>
//             <li>&gt; CSR Policy</li>
//             <li>&gt; Projects</li>
//             <li>&gt; Annual Report</li>
//           </ul>
//         </div>
//         <div>
//           <h2 className="font-semibold mb-4">ADDRESS INFO</h2>
//           <p className="mb-2"># 8 & 8A AVS Compound, 80 Ft. Road, 4th Block Koramangala, Bangalore 560 034. India.</p>
//           <p className="mb-2">📧 bd@mfarconstructions.com</p>
//           <p className="mb-2">📞 +91-80 411 02170</p>
//           <p>📠 91 80 41102250</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
