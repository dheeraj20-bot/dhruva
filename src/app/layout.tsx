import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Chatbot from "@/components/ChatBot";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DhruvaCode  |  Let's Make Internet Magic Happen!",
  description: "Where creativity meets strategy, and clicks turn into conversions Let's make your online dreams a reality",
  keywords:"Web Desiging , SEO in Turkey , Web Development in turkey , "
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
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
