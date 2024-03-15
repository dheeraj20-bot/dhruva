import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Chatbot from "@/components/ChatBot";
import { Footer } from "@/components/Footer";

const poppins = Poppins( {weight: '400', subsets: ["devanagari"] });

export const metadata: Metadata = {
  title: "DhruvaCode  |  Let's Make Internet Magic Happen!",
  description: "Where creativity meets strategy, and clicks turn into conversions Let's make your online dreams a reality",
  keywords:"Web Designing, SEO Services, Web Development, Digital Marketing, Creative Solutions, Internet Magic, Online Presence, Growth Strategies, Innovation, User Experience Optimization"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={poppins.className}>
        <div className="relative  flex items-center justify-center">
        <Navbar /> 
        <Chatbot/>
        </div>
      {children}
      <Footer/>
      </body>
    </html>
  );
}
