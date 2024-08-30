import React, { useState } from 'react'
import { Tab } from '@headlessui/react'
import ProjectHero from './ProjectHero'
import ProjectText from './ProjectText'

import ongoing1 from "../../assets/services/SSSE9.jpg"
import ongoing2 from "../../assets/services/SSSE8.jpg"
import ongoing3 from "../../assets/services/SSSE7.jpg"
import ongoing4 from "../../assets/services/SSSE6.jpg"
import ongoing5 from "../../assets/services/SSSE5.jpg"

import completed1 from "../../assets/services/SSSE1.jpg"
import completed2 from "../../assets/services/SSSE11.jpg"
import completed3 from "../../assets/services/SSSE2.jpg" 
import completed4 from "../../assets/services/SSSE12.jpg" 
import completed5 from "../../assets/services/SSSE10.jpg" 
import completed6 from "../../assets/services/SSSE14.png" 
import completed7 from "../../assets/services/SSSE15.jpg" 
import completed8 from "../../assets/services/SSSE16.jpg" 

export default function ProjectBody() {
  const [activeTab, setActiveTab] = useState('ongoing')

  const projects = {
    ongoing: [
      { id: 1, name: 'Century Ethos', location: 'Bangalore, Karnataka', image: ongoing1 },
      { id: 2, name: 'Brigade Buena Vista', location: 'Bangalore, Karnataka', image: ongoing2 },
      { id: 3, name: 'Regent Hirise Residential Tower', location: 'Kolkata, West Bengal', image: ongoing3 },
      { id: 4, name: 'Brigade Xanadu', location: 'Chennai, Tamil Nadu', image: ongoing4 },
      { id: 5, name: 'Project E', location: 'Location E', image: ongoing5 },
    ],
    completed: [
      { id: 1, name: 'Project G', location: 'Location G', image: completed1 },
      { id: 2, name: 'Project H', location: 'Location H', image: completed2 },
      { id: 3, name: 'Project I', location: 'Location I', image: completed3 },
      { id: 4, name: 'Project J', location: 'Location J', image: completed4 },
      { id: 5, name: 'Project K', location: 'Location K', image: completed5 },
      { id: 6, name: 'Project L', location: 'Location L', image: completed6 },
      { id: 7, name: 'Project M', location: 'Location M', image: completed7 },
      { id: 8, name: 'Project N', location: 'Location N', image: completed8 },
    ],
  }

  return (
    <>
      <ProjectHero />
      <ProjectText />
      <section className="py-12 bg-zinc-50 text-gray-500">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mb-6">
            <Tab.Group>
              <Tab.List className="flex space-x-4 mb-4">
                <Tab
                  className={({ selected }) =>
                    `w-1/2 py-2 md:h-[60px] md:text-lg uppercase text-sm font-medium rounded-none focus:outline-none ${
                      selected
                        ? 'bg-amber-500 text-white font-semibold'
                        : 'bg-gray-50 border border-amber-500 text-zinc-950 hover:bg-amber-500 hover:text-white transition duration-300'
                    }`
                  }
                  onClick={() => setActiveTab('ongoing')}
                >
                  Ongoing Projects
                </Tab>
                <Tab
                  className={({ selected }) =>
                    `w-1/2 py-2 md:h-[60px] md:text-lg uppercase text-sm font-medium rounded-none focus:outline-none ${
                      selected
                        ? 'bg-amber-500 text-white font-semibold'
                        : 'bg-gray-50 border border-amber-500 text-zinc-950 hover:bg-amber-500 hover:text-white transition duration-300'
                    }`
                  }
                  onClick={() => setActiveTab('completed')}
                >
                  Completed Projects
                </Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {projects[activeTab].map((project) => (
                      <div key={project.id} className="relative overflow-hidden group">
                        <img src={project.image} alt={project.name} className="w-full h-64 object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-60"></div>
                        <div className="absolute bottom-0 left-0 p-4 text-white">
                          <h3 className="text-lg font-semibold">{project.name}</h3>
                          <p className="text-sm">{project.location}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {projects[activeTab].map((project) => (
                      <div key={project.id} className="relative overflow-hidden group">
                        <img src={project.image} alt={project.name} className="w-full h-64 object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-60"></div>
                        <div className="absolute bottom-0 left-0 p-4 text-white">
                          <h3 className="text-lg font-semibold">{project.name}</h3>
                          <p className="text-sm">{project.location}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </section>
    </>
  )
}