'use client'
import Link from "next/link"
import {servicedata} from "../data/ServiceData"
import { Button } from "./ui/moving-border"
import { BackgroundGradient } from "./ui/background-gradient"
import Image from "next/image"

interface Service{
    id: number,
    title: string,  
    description: string,
    isFeatured: boolean,
    icon:string
}

const Services = () => {
  
  return (
    <div className="py-12 text-white bg-black/[0.96]">
        <div>
            <div className="text-center">
                  <h2 className="text-2xl  font-bold text-transparent md:text-6xl
                  bg-clip-text bg-gradient-to-r from-violet-100 to-violet-900
                   tracking-wide uppercase 
                  ">Fetured Services</h2>
                  <p className="mt-2 text-xl leading-8
                     italic tracking-tight text-white
                   sm:text-2xl">Client Bliss: Satisfaction Guaranteed !</p>
            </div>
        </div>
        <div className="mt-16">
            <div className="grid px-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
            gap-10 justify-center 
            ">
               {
                servicedata.map((service:Service)=>(
                   <div key={service.id} className="flex justify-center" >
                    <div className="relative">
                        {/* <div className="text-5xl -mt-8 absolute">
                            {course.id}
                        </div> */}
                    <BackgroundGradient
                    className="flex flex-col rounded-[22px] bg-white
                      dark:bg-zinc-900 overflow-hidden items-center h-full max-w-sm p-4 sm:p-12 " 
                    >
                       <Image
          src={service.icon}
          alt="webdev"
          height="100"
          width="100"
          className=" object-cover mb-2"
        />
         
                        <div className=" flex flex-col items-center
                        text-center flex-grow
                        ">
                          <p>{service.title}</p>
                          <p>{service.description}</p>
                          {/* <Link href={`/courses/${course.slug}`}>
                            Learn More
                          </Link> */}
                        </div>
                    </BackgroundGradient>
                    </div>
                    
                   </div>
                ))}
            </div>

        </div>
        <div className="mt-20 text-center">
            <Link href={"/"}>
            <Button
            borderRadius="1.7rem"
            className="bg-white font-semibold dark:bg-transparent text-black dark:text-white
              border-violet-300 dark:border-slate-800"
            >
                Contact us
            </Button>
            </Link>
            

        </div>
        
    </div>
  )
}

export default Services