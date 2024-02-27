import Services from "@/components/Services";
import { ThreeDCardDemo } from "@/components/ThreeDCardDemo";
import Image from "next/image";
import { GoogleGeminiEffectDemo } from "@/components/GoogleGeminiEffectDemo";
import AboutUs from "@/components/AboutUs";

export default function Home() {

  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <div className="h-screen  w-full top-40
   rounded-md relative  -mb-32 sm:mb-0 overflow-clip">
      <GoogleGeminiEffectDemo/>
      </div>
      {/* <AboutUs/> */}
      <Services/>
    <ThreeDCardDemo/>
    </main>
    
  );
}

