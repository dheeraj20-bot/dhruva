"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import dheeraj from "@/assets/dheeraj.png"
import ufuk from "@/assets/ufuk.jpeg"
const people = [
  {
    id: 1,
    name: "Dheeraj Kumar",
    designation: "CEO & Founder, Dhruvacode",
    image:
      dheeraj
  },
  {
    id: 2,
    name: "Ufuk berk",
    designation: "Business Development",
    image: ufuk
  },
 
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
