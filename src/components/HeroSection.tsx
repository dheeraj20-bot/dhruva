"use client"
import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border"

const HeroSection = () => {
  
  const handleChatButtonClick = () => {
    // Trigger the click event on the Crisp chatbox widget
    if (window.$crisp) {
      window.$crisp.push(["do", "chat:open"]);
    }
  };

  return (
    <div className="h-auto md:h-[90vh]  w-full rounded-md  flex
     flex-col relative overflow-hidden mx-auto py-10 md:py-0  justify-center items-center">
       <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="violet"
      />
      <div className="p-4  mt-10 relative z-10 w-full text-center"> 
      <h1 className="mt-20 md:mt-20 text-3xl md:text-6xl font-bold
      bg-clip-text text-transparent bg-gradient-to-b from-neutral-50
      to-neutral-600">
        Let &apos s Make Internet Magic Happen!
      </h1>
    
      <p className="mt-6 font-normal  text-sm  md:text-xl text-neutral-400
        w-full md:w-1/2  mx-auto">
      Where creativity meets strategy, and clicks turn into conversions.
      Let &apos s make your online dreams a reality
       </p>

       <div className="mt-4 text-white" >
        <Link onClick={handleChatButtonClick} href={"/"}>

          <Button  borderRadius="1.7rem"
          className="bg-white font-semibold dark:bg-transparent text-black dark:text-white
            border-violet-300 dark:border-slate-800"
          >
            Let &apos s Talk
          </Button>
        </Link>
       </div>

      </div>
    </div>
  )
}

export default HeroSection