import React from 'react'
import work from "@/assets/webdevelopment.svg"
import Image from 'next/image'

const WorkSection = () => {
  return (
    <div id='work' className="w-full px-2 mb-2 overflow-hidden  -mt-[8rem]  sm:-mt-[2rem] 
    mx-auto flex items-center justify-center flex-col">
      <Image
        src={work}
        alt="Work"
        width={1000}
        height={800}
        className="md:w-11/12 rounded-md object-cover md:h-auto" 
      />
    </div>
  )
}

export default WorkSection
