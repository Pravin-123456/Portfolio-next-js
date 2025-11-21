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

// Configuration for the Skills
// Center is Next.js
const skillsData: Skill[] = [
  // Left Group
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  
  // Center Item
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', isCenter: true },
  
  // Right Group
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
];

interface SkillItemProps {
  skill: Skill;
  index: number;
}

// Defined BEFORE usage to prevent ReferenceError
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
                // Mobile: w-24 h-24 (fits grid)
                // Desktop: w-48 h-48 (larger central focus)
                className="relative w-24 h-24 md:w-48 md:h-48 2xl:w-64 2xl:h-64 flex items-center justify-center"
            >
                {/* Outer Glow Layer */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 blur-xl opacity-60 animate-pulse" />
                
                {/* Main Sphere */}
                <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white via-blue-100 to-indigo-200 shadow-[0_0_30px_rgba(255,255,255,0.5)] flex items-center justify-center z-10 overflow-hidden">
                    <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="w-12 h-12 md:w-24 md:h-24 2xl:w-32 2xl:h-32 object-contain" 
                    />
                </div>
            </MotionDiv>
        );
    }

    // Outer Items Style (Squares)
    return (
        <MotionDiv
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.1)" }}
            // Mobile: w-24 h-24
            // Desktop: w-28 h-28 (slightly smaller than orb to create hierarchy)
            className="w-24 h-24 md:w-28 md:h-28 2xl:w-40 2xl:h-40 bg-[#0f0f0f] border border-[#222] rounded-2xl md:rounded-3xl flex items-center justify-center group relative overflow-hidden hover:border-gray-700 transition-all duration-300 cursor-default"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-10 h-10 md:w-14 md:h-14 2xl:w-20 2xl:h-20 object-contain opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-300" 
            />
        </MotionDiv>
    );
};

const Skills: React.FC<SkillsProps> = ({ id }) => {
  // Split data for the desktop layout logic
  const leftSkills = skillsData.slice(0, 4);
  const centerSkill = skillsData[4];
  const rightSkills = skillsData.slice(5, 9);

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

            {/* DESKTOP LAYOUT (md and up) - 2x2 | Orb | 2x2 Pattern */}
            <div className="hidden md:flex items-center justify-center gap-12 xl:gap-24">
                {/* Left 2x2 Grid */}
                <div className="grid grid-cols-2 gap-4 xl:gap-6">
                    {leftSkills.map((skill, index) => (
                        <SkillItem key={skill.name} skill={skill} index={index} />
                    ))}
                </div>

                {/* Center Orb */}
                <div className="relative z-20 mx-4">
                    <SkillItem skill={centerSkill} index={4} />
                </div>

                {/* Right 2x2 Grid */}
                <div className="grid grid-cols-2 gap-4 xl:gap-6">
                    {rightSkills.map((skill, index) => (
                        <SkillItem key={skill.name} skill={skill} index={index + 5} />
                    ))}
                </div>
            </div>

            {/* MOBILE LAYOUT (< md) - 3x3 Grid */}
            <div className="grid grid-cols-3 gap-3 md:hidden">
                {skillsData.map((skill, index) => (
                    <SkillItem key={skill.name} skill={skill} index={index} />
                ))}
            </div>
        </div>
    </section>
  );
};

export default Skills;