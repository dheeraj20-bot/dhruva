"use client";

import Image from "next/image";
import React from "react";
import project2 from "@/assets/projects2.png";
import project1 from "@/assets/projects1.png";
// import project2 from "@/assets/images/project2.png";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function ThreeDCardDemo() {
  return (
    
    <div className="flex  flex-col  justify-center items-center mt-20">
       <div className="text-center">
                  <h2 className="text-2xl  font-bold text-transparent md:text-5xl
                  bg-clip-text bg-gradient-to-r from-violet-100 to-violet-900
                   tracking-wide uppercase 
                  ">Innovation in Action!</h2>
                  <p className="mt-2 text-base md:text-xl leading-8
                     italic tracking-tight text-slate-600 dark:text-slate-400
                   sm:text-xl">Discover the cutting-edge work of our 
                   clients, setting new standards in innovation!</p>
        </div>

    <div className="flex  space-x-0   lg:space-x-20  flex-col lg:flex-row justify-center items-center mt-6">

     <CardContainer className="inter-var px-3 ">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
         Hair voyage turkey
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Website is based on hair Transplant Services
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={project2}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        
      </CardBody>
    </CardContainer>

    <CardContainer className="inter-var px-3 ">
    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >

         Hazel Health Tourism        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Website is based on hair Transplant Services
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={project1}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        
      </CardBody>
    </CardContainer>
   </div>

    </div>
 
  );
}
