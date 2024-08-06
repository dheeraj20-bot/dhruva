import { FeaturesSection } from "@/components/FeatureSection";
import {HeroSection} from "@/components/HeroSection";
import { ThreedCard } from "@/components/ThreedCard";

export default function Home() {
  return (
    <main className=" bg-space-1 antialiased ">
       <HeroSection/>
       <FeaturesSection/>
       <ThreedCard/>
    </main>
  );
}

