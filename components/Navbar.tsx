import React from 'react';
import { SectionId } from '../types';
import { motion } from 'framer-motion';

const MotionNav = motion.nav as any;

interface NavbarProps {
  activeSection: SectionId;
  scrollTo: (id: SectionId) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, scrollTo }) => {
  const navItems = [
    { id: SectionId.HOME, label: 'Home' },
    { id: SectionId.ABOUT, label: 'About' },
    { id: SectionId.SKILLS, label: 'Skills' },
    { id: SectionId.PROJECTS, label: 'Projects' },
    { id: SectionId.OTHERS, label: 'Others' },
  ];

  const getPageNumber = () => {
    switch (activeSection) {
      case SectionId.HOME: return 'Page 01';
      case SectionId.ABOUT: return 'Page 02';
      case SectionId.SKILLS: return 'Page 03';
      case SectionId.PROJECTS: return 'Page 04';
      default: return 'Page 05';
    }
  };

  return (
    <MotionNav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 xl:px-16 2xl:px-24 xl:py-8 2xl:py-12 text-white"
    >
      {/* Brand Logo Area - Matches "Building the IMPOSIBLES" placement */}
      <div className="flex flex-col leading-tight w-48 xl:w-72 2xl:w-96">
        <span className="text-sm xl:text-lg 2xl:text-xl font-light text-gray-300">Building the</span>
        <span className="text-lg xl:text-3xl 2xl:text-4xl font-bold tracking-widest">IMPOSIBLES</span>
      </div>

      {/* Center Links */}
      <div className="hidden md:flex gap-8 xl:gap-16 2xl:gap-24 text-md xl:text-xl 2xl:text-2xl font-medium tracking-wide">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`hover:text-brand-purple transition-colors duration-300 ${activeSection === item.id ? 'text-white font-bold' : 'text-gray-400'}`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Right Page Pill */}
      <div className="w-48 xl:w-72 2xl:w-96 flex justify-end">
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-full px-6 py-2 xl:px-10 xl:py-4 2xl:px-12 2xl:py-5 text-sm xl:text-lg 2xl:text-xl font-semibold shadow-lg shadow-purple-500/20">
          {getPageNumber()}
        </div>
      </div>
    </MotionNav>
  );
};

export default Navbar;