import web from "@/assets/development.png"
import Research from "@/assets/research.png"
import video from "@/assets/video.png"
import content from "@/assets/content.png"
import social from "@/assets/market.png"
import meme from "@/assets/meme.png"


interface Service {
  id: number;
  title: string;
  description: string;
  src:string
}


export const items = [
  { id:1,
    src:content,
    title: "Content Production", description: "Our team will shoot high quality videos for your content." },
  { id:2, src:Research,title: "Research & Writing", description: "For each content, we will do the research and write compelling copies for you." },
  { id:3,src:video,title: "Video Editing", description: "We will create captivating videos using fast paced video editing." },
  { id:4,src:web,title: "Graphics Designing", description: "Our visual design experts will create aesthetic designs that stand out." },
  { id:5,src:social,title: "Social Media Management", description: "End-to-end social media management to optimise content and drive engagement." },
  { id:6,src:meme,title: "Meme Marketing", description: "Ideate and create relatable memes that resonated with the audience." },
 
];