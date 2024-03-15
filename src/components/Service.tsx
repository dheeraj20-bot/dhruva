"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import mongodb from "@/assets/mongodb.png"
import express from "@/assets/expressjs.png"
import firebase from "@/assets/firebase.png"
import django from "@/assets/django.png"
import tailwind from "@/assets/tailwindcss.png"
import Image from "next/image";
import node from "@/assets/node.webp"
import nextjs from "@/assets/nextjs.svg"
import framer from "@/assets/framer.webp"
import { div } from "three/examples/jsm/nodes/Nodes.js";


const items = [
    { id:1, title: "Content Production", description: "Our team will shoot high quality videos for your content." },
    { id:2,title: "Research & Writing", description: "For each content, we will do the research and write compelling copies for you." },
    { id:3,title: "Video Editing", description: "We will create captivating videos using fast paced video editing." },
    { id:4,title: "Graphics Designing", description: "Our visual design experts will create aesthetic designs that stand out." },
    { id:5,title: "Social Media Management", description: "End-to-end social media management to optimise content and drive engagement." },
    { id:6,title: "Meme Marketing", description: "Ideate and create relatable memes that resonated with the audience." },
   
  ];

const clients = [
  {
    client:mongodb
  },
  {
    client:firebase
  },
  {
    client:express
  },
  {
    client:tailwind
  },
  {
    client:node
  },
  {
    client:nextjs
  },
  {
    client:framer
  },
]

const servicesHeadline = "Here's what we";

export function Service() {
  return (
    <div id="service" className="w-11/12 mb-5 justify-center items-center mt-10  py-5 mx-auto flex flex-col">
     <div className="text-center  mb-7 text-2xl sm:text-4xl font-bold  " >
     Secure. Scalable. Tech Stack for{" "}
      <span className=" bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Healthcare & Fintech.</span>
        </div>

      <div className="flex flex-wrap  overflow-hidden  justify-center  gap-7 mb-10">
         {
          clients.map((item,index)=>(
            
            <Image key={index} src={item.client}  width={70} className=" last:hidden lg:last:block" height={30} alt="client"/>
          ))
         }
      </div>
       
      <div className="text-center  mb-7 text-2xl sm:text-4xl font-bold  " >
      What We Offer 
{" "}
      <span className=" bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
      Services
      </span>
        </div>

      <div className="mt-4 flex flex-wrap  items-center justify-center mx-auto w-11/12 gap-4">
            {
              items.map((item)=>(
                <BackgroundGradient key={item.id}>
                   <div className={` rounded-2xl shadow-md  max-w-sm p-4  sm:p-10 bg-white ${
          item.id % 2 === 1 ? 'h-[27rem]' : 'h-[20rem]' }`}>
                    <h1 className=" text-3xl  font-semibold mb-10">{item.title}</h1>
                    <p className=" text-pretty font-medium">{item.description}</p>
                  </div>
                </BackgroundGradient>
              ))
            }
      </div>
       
    </div>
  );

        

  
}




    
  
