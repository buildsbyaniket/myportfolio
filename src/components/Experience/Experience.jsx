import React, { useState } from "react";
import { FaLaptopCode, FaCheckCircle, FaStar, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const milestones = [
  {
    year: "2023",
    title: "Engineering Foundation",
    location: "G. H. Raisoni College, Pune",
    description: "Initiated a Bachelor of Engineering in Information Technology. Discovered a passion for programming, starting with C++ foundations, Object-Oriented Principles, and primary algorithms.",
    type: "academic",
    tags: ["C++", "DSA Intro", "OOPs"]
  },
  {
    year: "2024",
    title: "Frontend Architecture Mastery",
    location: "Self-Paced Practice & Projects",
    description: "Deep-dived into frontend design frameworks. Mastered JavaScript (ES6+), React.js ecosystems, Redux state pipelines, and responsive utility engines like Tailwind CSS.",
    type: "skills",
    tags: ["React JS", "Redux", "Tailwind CSS", "Git"]
  },
  {
    year: "2025",
    title: "Full-Stack Development (MERN)",
    location: "Web Development Bootcamp",
    description: "Configured backend services. Developed full-stack architectures using Node.js, Express, and MongoDB. Implemented authentication channels and API protocols in projects.",
    type: "projects",
    tags: ["MongoDB", "Express", "Node JS", "REST APIs"]
  },
  {
    year: "2026 - Present",
    title: "Data Structures & Advanced DSA",
    location: "LeetCode Practice Arena",
    description: "Focused heavily on problem-solving consistency. Mastered standard structures, greedy heuristics, linked nodes, trees, and relational SQL database query optimizations.",
    type: "dsa",
    tags: ["LeetCode", "Advanced DSA", "MySQL", "140+ Solved"]
  }
];

const Experience = () => {
  const [activeMilestone, setActiveMilestone] = useState(null);

  return (
    <section
      id="experience"
      className="py-24 px-[10vw] md:px-[7vw] lg:px-[16vw] font-sans relative overflow-hidden bg-gradient-to-b from-transparent via-[#060517]/20 to-transparent"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-[40%] left-[2%] w-[250px] h-[250px] bg-purple-600/5 rounded-full blur-[80px]" />
      </div>

      {/* Section Title */}
      <div className="text-center mb-20 relative">
        <span className="text-[#8245ec] font-bold text-xs uppercase tracking-[0.25em] bg-[#8245ec]/10 px-4 py-1.5 rounded-full border border-[#8245ec]/20 shadow-[0_0_15px_rgba(130,69,236,0.1)]">
          Timeline
        </span>
        <h2 className="text-4.5xl font-black text-white mt-6 tracking-tight">
          LEARNING <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">JOURNEY</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#8245ec] to-transparent mx-auto mt-4" />
        <p className="text-gray-400 mt-4 text-lg font-medium max-w-xl mx-auto">
          Chronological milestone progression mapping academic achievements, skill stacks, and algorithmic training.
        </p>
      </div>

      {/* Timeline Layout */}
      <div className="relative max-w-4xl mx-auto">
        
        {/* Central Vertical Line */}
        <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/10 via-[#8245ec]/40 to-purple-500/10 -translate-x-1/2 pointer-events-none z-0" />

        {/* Milestones Cards list */}
        <div className="space-y-16">
          {milestones.map((milestone, index) => {
            const isEven = index % 2 === 0;
            const isActive = activeMilestone === index;

            return (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
                onMouseEnter={() => setActiveMilestone(index)}
                onMouseLeave={() => setActiveMilestone(null)}
              >
                
                {/* 1. Timeline Circle Connector Node */}
                <div className="absolute left-[30px] md:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center pointer-events-none">
                  <div className={`w-8 h-8 rounded-full border-2 transition-all duration-300 flex items-center justify-center shadow-lg ${
                    isActive 
                      ? "bg-[#8245ec] border-white scale-125 shadow-[0_0_15px_rgba(130,69,236,0.6)]" 
                      : "bg-[#0b0a1d] border-[#8245ec]/60"
                  }`}>
                    <FaStar className={`text-[10px] transition-colors ${isActive ? "text-white" : "text-[#8245ec]"}`} />
                  </div>
                </div>

                {/* Spacer on desktop */}
                <div className="w-full md:w-1/2 hidden md:block" />

                {/* 2. Timeline Card */}
                <div className={`w-full md:w-1/2 pl-14 pr-4 z-10 ${
                  isEven ? "md:pl-0 md:pr-8" : "md:pl-8 md:pr-0"
                }`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className={`bg-[#080619]/90 border rounded-3xl p-6 relative group transition-colors duration-300 ${
                      isActive 
                        ? "border-[#8245ec] shadow-[0_15px_40px_rgba(130,69,236,0.15)] bg-[#0b0921]" 
                        : "border-white/10"
                    }`}
                  >
                    {/* Double outline glow */}
                    <div className="absolute -inset-1 border border-purple-500/5 rounded-[2.2rem] pointer-events-none group-hover:border-purple-500/10 transition-colors" />

                    {/* Milestone header */}
                    <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
                      <span className="font-mono text-xs font-black text-[#8245ec] uppercase tracking-widest">
                        {milestone.year}
                      </span>
                      <span className="text-[9px] font-mono text-gray-500 tracking-wider">
                        [MILESTONE_NODE_{index + 1}]
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-white group-hover:text-purple-400 transition-colors">
                      {milestone.title}
                    </h3>
                    
                    <span className="text-xs text-gray-500 font-semibold block mt-1">
                      {milestone.location}
                    </span>

                    <p className="text-gray-400 text-sm mt-3.5 leading-relaxed text-justify">
                      {milestone.description}
                    </p>

                    {/* Skill tags */}
                    <div className="flex flex-wrap gap-1.5 mt-5">
                      {milestone.tags.map((tag, i) => (
                        <span 
                          key={i} 
                          className="bg-[#050312] border border-white/5 rounded-xl px-3 py-1 text-[10px] font-mono font-bold text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;