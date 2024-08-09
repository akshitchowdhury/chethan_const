import React from 'react'
import HomeHero from './HomeHero'
import Industry from "../Services/Industry/Industry"
import Commitment from '../About/Commitment/Commitment'
import HomeAbout from './HomeAbout'
import WhyUs from '../About/IndustryRecognition/WhyUs'
import HomeServices from './HomeServices'

const Home = () => {
  return (
    <>
    <div className='overflow-x-hidden'>
      <HomeHero/>
      <HomeAbout/>
      <Industry/>
      <div className='p-6 bg-gray-950'>
      <HomeServices/>
      <Commitment/>
      
        
      </div>
      </div>
    </>
  )
}

export default Home
