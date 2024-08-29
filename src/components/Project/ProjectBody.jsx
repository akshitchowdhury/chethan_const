import React, { useState } from 'react'
import { Tab } from '@headlessui/react'
import { HomeIcon, BuildingOffice2Icon, SwatchIcon } from '@heroicons/react/24/outline'
import ProjectHero from './ProjectHero'
import ProjectText from './ProjectText'

export default function ProjectBody() {
  const [activeTab, setActiveTab] = useState('ongoing')

  const projects = {
    ongoing: [
      { id: 1, name: 'Project A' },
      { id: 2, name: 'Project B' },
      { id: 3, name: 'Project C' },
      { id: 4, name: 'Project D' },
      { id: 5, name: 'Project E' },
      { id: 6, name: 'Project F' },
    ],
    completed: [
      { id: 7, name: 'Project G' },
      { id: 8, name: 'Project H' },
      { id: 9, name: 'Project I' },
    ],
  }

  const services = [
    {
      name: 'Residential',
      icon: <HomeIcon className="w-5 h-5" />,
      image: '/placeholder.svg?height=200&width=300',
      description: 'Residential House architecture with contemporary exterior design and neutral color palette, blending gracefully into the surroundings.',
    },
    {
      name: 'Commercial',
      icon: <BuildingOffice2Icon className="w-5 h-5" />,
      image: '/placeholder.svg?height=200&width=300',
      description: 'High-quality commercial construction delivered with a focus on exceeding customer expectations and fostering long-term relationships.',
    },
    {
      name: 'Interiors',
      icon: <SwatchIcon className="w-5 h-5" />,
      image: '/placeholder.svg?height=200&width=300',
      description: 'Customized interior design solutions that blend functionality with aesthetics, creating spaces that reflect our clients\' unique styles and needs.',
    },
  ]

  return (
    <>
    <ProjectHero/>
    <ProjectText/>
    <section className="py-12 bg-zinc-50 text-gray-500">
      <div className="container mx-auto px-10 md:px-24">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-full">
            <div className="mb-6">
              <Tab.Group>
                <Tab.List className="flex space-x-4 mb-4">
                  <Tab
                    className={({ selected }) =>
                      `w-1/2 py-2 text-sm font-medium rounded-md focus:outline-none ${
                        selected
                          ? 'bg-amber-500 text-black'
                          : 'bg-zinc-900 text-gray-500 hover:bg-zinc-800'
                      }`
                    }
                    onClick={() => setActiveTab('ongoing')}
                  >
                    Ongoing Projects
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      `w-1/2 py-2 text-sm font-medium rounded-md focus:outline-none ${
                        selected
                          ? 'bg-amber-500 text-black'
                          : 'bg-zinc-900 text-gray-500 hover:bg-zinc-800'
                      }`
                    }
                    onClick={() => setActiveTab('completed')}
                  >
                    Completed Projects
                  </Tab>
                </Tab.List>
                <Tab.Panels>
                  <Tab.Panel>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {projects[activeTab].map((project) => (
                        <div key={project.id} className="bg-zinc-900 rounded-lg p-4 flex items-center justify-center">
                          <span className="text-amber-500 text-sm">{project.name}</span>
                        </div>
                      ))}
                    </div>
                  </Tab.Panel>
                  <Tab.Panel>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {projects[activeTab].map((project) => (
                        <div key={project.id} className="bg-zinc-900 rounded-lg p-4 flex items-center justify-center">
                          <span className="text-amber-500 text-sm">{project.name}</span>
                        </div>
                      ))}
                    </div>
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>
          {/* <div className="w-full lg:w-1/2">
            <h2 className="text-xl font-semibold mb-4 text-amber-500">Our Services</h2>
            <Tab.Group>
              <Tab.List className="flex space-x-1 rounded-xl bg-zinc-900 p-1 mb-4">
                {services.map((service, index) => (
                  <Tab
                    key={index}
                    className={({ selected }) =>
                      `w-full rounded-lg py-2.5 text-sm font-medium leading-5 
                      ring-white ring-opacity-60 ring-offset-2 ring-offset-zinc-950 focus:outline-none focus:ring-2
                      ${
                        selected
                          ? 'bg-amber-500 text-black shadow'
                          : 'text-gray-500 hover:bg-zinc-800 hover:text-gray-400'
                      }`
                    }
                  >
                    <div className="flex items-center justify-center">
                      {service.icon}
                      <span className="ml-2">{service.name}</span>
                    </div>
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels>
                {services.map((service, index) => (
                  <Tab.Panel
                    key={index}
                    className="rounded-xl bg-zinc-900 p-3 ring-white ring-opacity-60 ring-offset-2 ring-offset-zinc-950 focus:outline-none focus:ring-2"
                  >
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-48 object-cover mb-4 rounded"
                    />
                    <p className="text-gray-500 text-sm">{service.description}</p>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div> */}
        </div>
      </div>
    </section>
    </>
  )
}