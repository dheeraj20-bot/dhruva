import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GoogleTagManager } from '@next/third-parties/google'


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
      <body className={GeistSans.className}>
        <div className="flex flex-col h-screen">
        <Navbar /> 
         {children}
      <Footer/>
      </div>
      </body>
    </html>
  );
}
