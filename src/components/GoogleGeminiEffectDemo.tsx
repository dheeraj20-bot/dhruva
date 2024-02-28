"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import ufuk from "@/assets/ufuk.jpeg"
import dheeraj from "@/assets/dheeraj.png"


export function GoogleGeminiEffectDemo() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

interface Person {
  id: number;
  name: string;
  designation: string;
  image: any;
}

 

  const people: Person[] = [
    {
      id: 1,
      name: "Dheeraj kumar",
      designation: "CEO & Founder",
      image: dheeraj
    },
    {
      id: 2,
      name: "Ufuk berk",
      designation: "Client Manager",
      image: ufuk
    }
  ];
   

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <div
      ref={ref}
    >
      
    
    <GoogleGeminiEffect
       title="Build with Dhruvacode"
       description="Harnessing the power of AI, we engineer specialized medical solutions and navigate the market to empower healthcare professionals. 
       We translate foresight into reality for the medical field."
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}/>
   
      
    </div>
  );
}
