"use client"

import { ThreeDCardDemo } from "@/components/ThreeDCardDemo";
import Image from "next/image";
import { GoogleGeminiEffectDemo } from "@/components/GoogleGeminiEffectDemo";
import {TextRevealCardPreview} from "@/components/CtaSection"
import {BentoGridThirdDemo} from "@/components/BentoGrid"
import { AnimatedTooltipPreview } from "@/components/AnimatedTooltipPreview";
import {Service} from "@/components/Service"
import { Testimonial } from "@/components/Testimonial";

export default function Home() {
 

  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <div className="h-screen  w-full top-40
       rounded-md relative  -mb-32 sm:mb-0 overflow-clip">
      <GoogleGeminiEffectDemo/>
      </div>
       <div className="p-4  sm:pt-20">
        <div className="text-center  text-white  mt-5 mb-3 text-2xl sm:text-4xl font-bold  " >
        We build the tools, you shape your  <span className=" bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">future</span>
        </div>
        <div className="flex  gap-3  items-center justify-center text-white mb- text-base sm:text-xl ">  
            <div className="-mt-6">
              <p>Founded by </p>
                </div>
                <div>
                <AnimatedTooltipPreview/>
                </div>
        </div>
       <BentoGridThirdDemo/>
       </div>
    <ThreeDCardDemo/>
   
    <Service/>

      <div>
        <Testimonial/>
        </div> 
   
    <TextRevealCardPreview/>
    </main>
  );
}

