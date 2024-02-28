"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";

const items = [
    { id:1, title: "Content Production", description: "Our team will shoot high quality videos for your content." },
    { id:2,title: "Research & Writing", description: "For each content, we will do the research and write compelling copies for you." },
    { id:3,title: "Video Editing", description: "We will create captivating videos using fast paced video editing." },
    { id:4,title: "Graphics Designing", description: "Our visual design experts will create aesthetic designs that stand out." },
    { id:5,title: "Social Media Management", description: "End-to-end social media management to optimise content and drive engagement." },
    { id:6,title: "Meme Marketing", description: "Ideate and create relatable memes that resonated with the audience." },
   
  ];
  const servicesHeadline = "Here's what we ";

export function Service() {
  return (
    <div id="service">
        <div className="text-center text-white text-2xl sm:text-4xl mb-10 font-bold mt-0 sm:mt-10">
       {servicesHeadline} <span className="bg-clip-text text-transparent bg-gradient-to-r  from-violet-400 to-blue-500">offer</span>

        </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-3 w-11/12">
    {items.map((item) => (
      <BackgroundGradient
        key={item.id} // Add a unique key for each item
        className="rounded-[22px]  w-full p-8 group bg-white dark:bg-zinc-900 dark:group-hover:bg-transparent dark:group:hover:shadow-xl  hover:shadow-xl dark:hover:bg-transparent dark:hover:shadow-xl dark:shadow-neutral-800 shadow-lg flex flex-col justify-center items-center00"
      >
        <p className="text-xl sm:text-2xl font-bold text-black mt-4 mb-2 dark:text-neutral-200 
        dark:group-hover:text-black dark:group:hover:shadow-xl">
          {item.title}
        </p>
        <p className="text-sm
        dark:group-hover:text-black text-neutral-600 dark:text-neutral-400">
          {item.description}
        </p>
      </BackgroundGradient>
    ))}
  </div>
    </div>

  
  );
}
