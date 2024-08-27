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
        <h2 className="text-3xl font-semibold text-amber-600">GROUP HIGHLIGHTS</h2>
        <div className="border-t-2 border-b-2 border-gray-200 mt-4 mb-8 w-20 mx-auto"></div>
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
