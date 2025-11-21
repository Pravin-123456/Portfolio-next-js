
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mouse } from 'lucide-react';
import { SectionId } from '../types';

const MotionH2 = motion.h2 as any;
const MotionH1 = motion.h1 as any;
const MotionP = motion.p as any;
const MotionDiv = motion.div as any;

interface HeroProps {
  id: SectionId;
}

const Hero: React.FC<HeroProps> = ({ id }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section id={id} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-16 md:pt-0">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        {/* 
          Replace the src below with your specific image URL.
          The image currently covers the full container.
        */}
        <img 
          src="https://cdn.jsdelivr.net/gh/Pravin-123456/Portfolio@assets/src/assets/background.webp" 
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Overlay - Darkens left side for text readability, completely clear on right for subject focus */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
        
        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 2xl:h-64 bg-gradient-to-t from-black to-transparent" />
        
        {/* Optional: Subtle Grid Overlay for texture */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] 2xl:bg-[size:80px_80px] pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 md:px-12 xl:px-16 2xl:px-24 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full pb-24 md:pb-4 lg:pb-24 2xl:pb-32">
        
        {/* Left Content */}
        <div className="flex flex-col items-start space-y-2 xl:space-y-6 2xl:space-y-8 pt-10 md:pt-0 xl:pt-20 2xl:pt-32">
          <MotionH2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-3xl xl:text-6xl 2xl:text-8xl font-bold text-white tracking-tight"
          >
            Hi I'M PRAVIN
          </MotionH2>

          <MotionH1 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-6xl lg:text-8xl xl:text-[10rem] 2xl:text-[13rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-400 drop-shadow-2xl"
          >
            MERN DEV
          </MotionH1>

          <MotionP 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ delay: 0.4 }}
             className="text-xl md:text-lg xl:text-3xl 2xl:text-4xl text-gray-300 max-w-lg xl:max-w-2xl 2xl:max-w-4xl leading-relaxed"
          >
            I ship pixel-perfect, lightning-fast web apps that feel like magic.
          </MotionP>

          <MotionDiv 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.6 }}
             className="pt-6 md:pt-2 lg:pt-6 xl:pt-12 2xl:pt-16"
          >
            <button className="group relative px-8 py-3 xl:px-14 xl:py-6 2xl:px-16 2xl:py-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full font-bold text-white xl:text-2xl 2xl:text-4xl shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all hover:scale-105 flex items-center gap-2 xl:gap-4">
              Projects <ArrowRight className="w-5 h-5 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12 group-hover:translate-x-1 transition-transform" />
            </button>
          </MotionDiv>
        </div>

        {/* Right Content - Empty to preserve grid layout */}
        <div className="hidden lg:block h-full w-full">
        </div>
      </div>

      {/* Social Links & Mouse - Absolute Bottom */}
      <div className="absolute bottom-8 md:bottom-10 lg:bottom-12 xl:bottom-20 2xl:bottom-28 left-0 right-0 z-20">
        <div className="container mx-auto px-6 md:px-12 xl:px-16 2xl:px-24 relative flex w-full justify-between items-center text-sm xl:text-2xl 2xl:text-3xl underline decoration-1 underline-offset-4 text-gray-300">
          <a href="#" className="flex items-center gap-2 xl:gap-4 2xl:gap-6 hover:text-white transition-colors">
            <Github className="w-5 h-5 xl:w-10 xl:h-10 2xl:w-14 2xl:h-14" /> <span className="hidden sm:inline">www.github.com</span><span className="sm:hidden">Github</span>
          </a>
          
          {/* Mouse Icon - Centered Absolutely relative to the container to sit between links */}
          <MotionDiv 
            style={{ y: y1 }} 
            className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center text-gray-500 animate-bounce"
          >
            <Mouse className="w-6 h-6 xl:w-12 xl:h-12 2xl:w-16 2xl:h-16" />
          </MotionDiv>

          <a href="#" className="flex items-center gap-2 xl:gap-4 2xl:gap-6 hover:text-white transition-colors">
              <span className="hidden sm:inline">www.linkedin.com</span><span className="sm:hidden">LinkedIn</span> <Linkedin className="w-5 h-5 xl:w-10 xl:h-10 2xl:w-14 2xl:h-14" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;