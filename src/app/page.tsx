import {HeroSection} from "@/components/HeroSection";
import { ServiceSection } from "@/components/ServiceSection";
// import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <main className=" bg-space-1 antialiased ">
       <HeroSection/>
       <ServiceSection/>
       {/* <Testimonials/> */}
    </main>
  );
}

