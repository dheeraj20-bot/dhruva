import React from 'react'
import { Meteors } from './ui/meteors'
import { ServiceCard } from './ServiceCard';

type Service = {
    title: string;
    description: string;
  };

const services:Service[] = [
    {
      title: "Galactic Web Development",
      description: "Launch your website into the stratosphere with our cutting-edge web development services. From stellar designs to seamless functionality, we create sites that are out of this world."
    },
    {
      title: "Cosmic SEO Optimization",
      description: "Unlock the universe’s potential with our SEO services. We boost your online presence to astronomical heights, ensuring your business shines brightly in the vast expanse of the internet."
    },
    {
      title: "Interstellar Video Editing & Graphics",
      description: "Transform your visuals into cosmic masterpieces. Our video editing and graphic design services will make your content shine like a supernova, captivating your audience with every frame."
    }
  ];
  

export const ServiceSection = () => {
  return (
    <section id='service' className='w-full antialiased py-20 -mt-32 '>
        <section className=' py-10 rounded-[4rem]  backdrop-blur-md bg-gradient-to-br  from-slate-900   to-zinc-900 max-w-7xl mx-auto border'>
        <h2 className=' text-3xl mb-6 bg-clip-text text-transparent bg-gradient-to-b 
         from-white  to-gray-600 sm:text-5xl text-center font-bold'>We can Help you in below things..</h2>
         <div className="flex flex-wrap  space-x-5 justify-center">
     {services.map((service, index) => (
      <ServiceCard key={index} service={service} />
    ))}
    </div>
  </section>
        
    </section>
  )
}

