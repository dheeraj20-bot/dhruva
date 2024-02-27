"use client"
import aboutus from "@/assets/aboutus.png"
import Image from "next/image"

const AboutUs = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full sm:w-11/12 mx-auto  justify-evenly items-center gap-3 h-screen -mt-72 sm:-mt-20">
      <div className="text-white">
        <h1 className="text-3xl italic ">Why Choose Us?</h1>
        
      </div>
     <Image src={aboutus} alt="aboutus" width={400} height={400} className="rounded-lg" priority={true}/>
    </div>
  )
}

export default AboutUs