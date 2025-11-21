import React from 'react';
import { SectionId } from '../types';
import { motion } from 'framer-motion';

const MotionDiv = motion.div as any;

interface SkillsProps {
  id: SectionId;
}

interface Skill {
  name: string;
  icon: string;
  isCenter?: boolean;
}

// Configuration for the 3x3 Grid
// Center is index 4 (Next.js)
const skillsData: Skill[] = [
  // Row 1
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  
  // Row 2
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', isCenter: true },
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },

  // Row 3
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
];

const Skills: React.FC<SkillsProps> = ({ id }) => {
  return (
    <section id={id} className="min-h-screen w-full bg-black flex flex-col items-center justify-center py-24 relative overflow-hidden">
        
        {/* Subtle Background Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1a1a1a_0%,#000000_100%)] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
            
            <MotionDiv 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-16 md:mb-24 text-center"
            >
                 <h2 className="text-4xl md:text-6xl 2xl:text-8xl font-bold text-white tracking-tight">SKILLS</h2>
            </MotionDiv>

            {/* 3x3 Grid */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 2xl:gap-12">
                {skillsData.map((skill, index) => (
                    <SkillItem key={skill.name} skill={skill} index={index} />
                ))}
            </div>
        </div>
    </section>
  );
};

interface SkillItemProps {
  skill: Skill;
  index: number;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill, index }) => {
    // Central Item Style (Glowing Orb)
    if (skill.isCenter) {
        return (
            <MotionDiv
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ 
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.2 
                }}
                className="relative w-24 h-24 md:w-36 md:h-36 2xl:w-48 2xl:h-48 flex items-center justify-center"
            >
                {/* Outer Glow Layer */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 blur-xl opacity-60 animate-pulse" />
                
                {/* Main Sphere */}
                <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white via-blue-100 to-indigo-200 shadow-[0_0_30px_rgba(255,255,255,0.5)] flex items-center justify-center z-10">
                    {/* Icon - Inverted for dark on light */}
                    <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="w-12 h-12 md:w-20 md:h-20 2xl:w-24 2xl:h-24 object-contain" 
                    />
                </div>
            </MotionDiv>
        );
    }

    // Outer Items Style (Dark Glassmorphism Squares)
    return (
        <MotionDiv
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.1)" }}
            className="w-24 h-24 md:w-36 md:h-36 2xl:w-48 2xl:h-48 bg-[#0f0f0f] border border-[#222] rounded-2xl md:rounded-3xl flex items-center justify-center group relative overflow-hidden hover:border-gray-700 transition-all duration-300 cursor-default"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-10 h-10 md:w-16 md:h-16 2xl:w-20 2xl:h-20 object-contain opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-300" 
            />
        </MotionDiv>
    );
};

export default Skills;