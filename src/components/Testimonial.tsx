"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Testimonial() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:"I, Dr. Aytaç, am compelled to acknowledge the outstanding performance of Dhruva Code and their exceptional team. Their timely delivery and effortless results have spared me from any concerns, allowing me to focus on my work without unnecessary worries. Kudos to Dhruva Code for their excellence." ,
    name: "Dr. Aytec",
    title: "Hair Voyage Turkey",
  },
  {
    quote:
      " I am Arzu, the founder of Hezel Tourism, and I am delighted to express my utmost satisfaction with the ethical and simple approach of your team. Your dedication and efficiency in delivering the results I wanted and expected have truly exceeded my business expectations. Thank you for your outstanding service.",
    name: "Arzu ",
    title: "Hazel Tourism",
  },
  {
    quote: "I am Dr. Murat, and my clinic faced significant challenges with low organic reach and ineffective marketing spending. However, the Approach Team, led by Mr. Tushar, presented a unique strategy. They prioritized organic growth, ensuring visibility before deploying ad campaigns. Crafting videos from scratch, tailored to our brand voice and market needs, they achieved a remarkable 500k views. Their approach is commendable, and I would choose them repeatedly for their exceptional service.",
    name: "Dr. Murat",
    title: "Murat Clinic",
  },
  
 
];
