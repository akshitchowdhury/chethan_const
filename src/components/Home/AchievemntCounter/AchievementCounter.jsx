import React, { useEffect, useState } from 'react';
import { FaUsers, FaBuilding, FaMapMarkerAlt, FaProjectDiagram } from 'react-icons/fa';

const AchievementCounter = () => {
  const [employees, setEmployees] = useState(0);
  const [projects, setProjects] = useState(0);
  const [builtArea, setBuiltArea] = useState(0);
  const [ongoingProjects, setOngoingProjects] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setEmployees((prev) => (prev < 750 ? prev + 5 : 750));
      setProjects((prev) => (prev < 200 ? prev + 2 : 200));
      setBuiltArea((prev) => (prev < 64.8 ? prev + 0.1 : 64.8));
      setOngoingProjects((prev) => (prev < 47 ? prev + 1 : 47));
      setClients((prev) => (prev < 120 ? prev + 1 : 120));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white py-10">
      <div className="max-w-screen-xl mx-auto text-center">
      <div className="flex items-center justify-center mb-12 px-32">
        <div className="flex-grow border-t w-[70px] border-black"></div>
        <h1 className="text-4xl md:text-2xl font-semibold text-center mx-4 text-amber-500">
          GROUP HIGHLIGHTS
        </h1>
        <div className="flex-grow border-t w-[70px] border-black"></div>
      </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="text-center">
            <FaUsers className="text-6xl text-amber-600 mx-auto" />
            <p className="text-4xl font-semibold">{employees}</p>
            <p className="text-amber-600">No of Employees</p>
          </div>
          <div className="text-center">
            <FaBuilding className="text-6xl text-amber-600 mx-auto" />
            <p className="text-4xl font-semibold">{projects}</p>
            <p className="text-amber-600">Projects Completed</p>
          </div>
          <div className="text-center">
            <FaMapMarkerAlt className="text-6xl text-amber-600 mx-auto" />
            <p className="text-4xl font-semibold">{builtArea.toFixed(1)}</p>
            <p className="text-amber-600">Mill Sq.Ft of Successfully completed Built Up Area</p>
          </div>
          <div className="text-center">
            <FaProjectDiagram className="text-6xl text-amber-600 mx-auto" />
            <p className="text-4xl font-semibold">{ongoingProjects}</p>
            <p className="text-amber-600">Ongoing Projects</p>
          </div>
          <div className="text-center">
            <FaUsers className="text-6xl text-amber-600 mx-auto" />
            <p className="text-4xl font-semibold">{clients}</p>
            <p className="text-amber-600">No of Clients</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementCounter;
