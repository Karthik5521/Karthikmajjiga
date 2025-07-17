'use client';
import About from "@/sections/About";
import Contact from "@/sections/Contacts";
import Experience from "@/sections/Experience";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import { Analytics } from "@vercel/analytics/next"


export default function Home() {
  
  return (
    
    <main>
      
      <Hero/>
      <About/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Contact/>
    </main>
   
  );
}
