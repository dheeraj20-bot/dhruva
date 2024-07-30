import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GoogleTagManager } from '@next/third-parties/google'

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
      <GoogleTagManager gtmId="KZ6SN9N9" />
      <body className={poppins.className}>
        <div className="flex flex-col h-screen">
        <Navbar /> 
      {children}
      <Footer/>
      </div>
      </body>
    </html>
  );
}
