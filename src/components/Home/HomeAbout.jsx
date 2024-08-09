import React from 'react'
import aboutImg2 from "../../assets/aboutImg2.jpg"
const HomeAbout = () => {
  return (
    <div className=" bg-gray-950 mx-auto px-4 py-16 ">
    <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-cyan-500">About Chethan Construction</h1>
    
    <section className="mb-16">
      

      <h2 className="text-3xl font-semibold mb-6 text-cyan-500">Experience & Professionalism</h2>
      <div className='w-[300px] md:w-[500px] h-[2px] bg-cyan-950'></div>
      <div className='flex flex-col md:flex-row py-4'>
      
      <p className="text-sm text-zinc-50 md:text-lg mb-8 leading-relaxed md:w-[700px]">
      At Chethan, we bring over 20 years of extensive experience and unwavering professionalism to every project. We have established a solid reputation for excellence and reliability in the construction industry by successfully executing diverse and challenging projects across India. Our journey has been marked by continuous innovation, adaptability to evolving industry standards, and a commitment to pushing the boundaries of what's possible in construction. From humble beginnings to becoming a recognized leader in the field, we've consistently delivered results that not only meet but exceed our clients' expectations. 
      </p>
      
      
      <img src={aboutImg2} className='md:w-1/2'/>
      </div>
      
      
    </section>
      
    </div>
  )
}

export default HomeAbout
