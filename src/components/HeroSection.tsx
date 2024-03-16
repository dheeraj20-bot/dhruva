import React from 'react'
import high from "@/assets/high.svg"
import Image from 'next/image'
import { IconTrendingUp } from '@tabler/icons-react';
import { AnimatedTooltipPreview } from './AnimatedTooltipPreview';

const HeroSection = () => {
  return (
    <div className='h-screen  w-full mt-12 lg:mt-28
    relative  mb-2 sm:mb-0 overflow-clip' >
       <div className='flex  relative lg:w-[80%]   mx-auto flex-col  items-center'>
    <h1 className='text-4xl  mb-8 lg:text-6xl !leading-snug text-gray-800 text-center font-bold'>
    From Strategy to Sales: Your All-in-One Marketing Partner for {" "}  
    <span className='bg-clip-text text-transparent  bg-gradient-to-r from-teal-800 to-blue-600'>
    Healthcare
    </span>
   </h1>
   <Image className='absolute  bottom-[12.5rem] hidden xl:block  lg:right-[6rem] xl:right-[2rem] ' src={high} width={60} height={40} alt=''/>
  <p className='text-center mb-10 text-base px-3 lg:text-xl w-full lg:w-1/2
   text-slate-700 '>Empower your business with a website thats 
   more than just pixels on a screen</p>
   <button className='bg-black flex gap-4 items-center text-white py-4 text-xl px-10 font-semibold  rounded-3xl  border-b 
    border-b-violet-900 shadow-2xl shadow-black/90 '>
    Book a Call <IconTrendingUp stroke={2} />
   </button>
   
    </div>
    <div className='mt-10'>
   <div className="text-center  mb-3 text-2xl sm:text-4xl font-bold  " >
        We build the tools, you shape your  <span className=" bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">future</span>
        </div>
        <div className="flex  gap-3 mb-10 items-center  justify-center  text-base sm:text-xl ">  
            <div className="">
              <p>Founded by </p>
                </div>

                <div className=''>
                <AnimatedTooltipPreview/>
                </div>
        </div>
   

   </div>
    </div>
    

  )
}

export default HeroSection