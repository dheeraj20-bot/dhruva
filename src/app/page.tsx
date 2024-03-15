"use client"

import Image from "next/image";
import {TextRevealCardPreview} from "@/components/CtaSection"
import { AnimatedTooltipPreview } from "@/components/AnimatedTooltipPreview";
import {Service} from "@/components/Service"
import { Testimonial } from "@/components/Testimonial";
import HeroSection from "@/components/HeroSection";
import WorkSection from "@/components/WorkSection";
import { Globe } from "@/components/Globe";
import Contribution from "@/components/Contribution";


export default function Home() {
 

  return (
    <main className="min-h-screen  antialiased ">
     
       <HeroSection/>
       <WorkSection/>
       <Service/>
        <Globe/>
        <Contribution/>
    </main>
  );
}

