import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const ExcavationText = () => {
  return (
    <div className="container absolute -my-[60%] lg:-my-[0%] md:-my-[0%] md:labsolute md:top-0
     lg:absolute lg:right-30 lg:top-[290px]">
      <div className="text-left px-4 md:mx-[37%] lg:w-[600px]">
    
    
        <h1 className="text-3xl text-white font-bold mb-2 md:text-5xl lg:text-6xl">
        DEMOLITION<span className="animate-colorChange"> DISMANTLING SERVICES</span>
</h1>
<div className='flex flex-row px-12 gap-x-2 md:px-1 md:gap-x-6  items-center'>
        <Link to={"/"} className="text-zinc-50 font-medium relative text-sm md:text-xl hover:text-amber-400 group">
  HOME 
  </Link>
  <FontAwesomeIcon icon={faArrowRightArrowLeft}/>
        <Link to={"/"} className="text-zinc-50 font-medium relative text-sm md:text-xl hover:text-amber-400 group">
  SERVICES
  </Link>
  <FontAwesomeIcon icon={faArrowRightArrowLeft}/>
  <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-amber-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>

        <h1 className="text-sm md:text-xl text-white font-bold mb-2 lg:text-xl"> 
        DEMOLITION AND DISMANTLING SERVICES
</h1>
     </div>   
        
      </div>
    </div>
  )
}

export default ExcavationText


