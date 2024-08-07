import React from 'react'
import contactBg from "../../assets/contactBg.jpg"
const ContactHero = () => {
  return (
    
      <div className='relative w-full h-[400px]' >
  <img src={contactBg} className='object-cover w-full h-full mix-blend-multiply' alt="Background Image"/>
  <div className='absolute inset-0 bg-blue-400 opacity-40'></div>
</div>
    
  )
}

export default ContactHero
