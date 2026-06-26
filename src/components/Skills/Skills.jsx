// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import { FaLaptopCode, FaCubes } from "react-icons/fa";

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-[10vw] md:px-[7vw] lg:px-[16vw] font-sans relative overflow-hidden bg-gradient-to-b from-transparent via-[#060517]/30 to-transparent"
  >
    {/* Section Title */}
    <div className="text-center mb-16 relative">
      <span className="text-[#8245ec] font-bold text-xs uppercase tracking-[0.25em] bg-[#8245ec]/10 px-4 py-1.5 rounded-full border border-[#8245ec]/20 shadow-[0_0_15px_rgba(130,69,236,0.1)]">
        Tech Stack
      </span>
      <h2 className="text-4.5xl font-black text-white mt-6 tracking-tight">
        SKILLS & <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">CAPABILITIES</span>
      </h2>
      <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#8245ec] to-transparent mx-auto mt-4" />
      <p className="text-gray-400 mt-4 text-lg font-medium max-w-xl mx-auto">
        A structured breakdown of languages, systems, frameworks, and developer tools in my tech stack.
      </p>
    </div>

    {/* Skill Categories Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-[#080619]/90 border border-white/10 backdrop-blur-md px-6 sm:px-8 py-8 rounded-[2.5rem] relative group hover:border-[#8245ec]/40 transition-colors duration-300"
        >
          {/* Double Outline Framing */}
          <div className="absolute -inset-1 border border-purple-500/5 rounded-[2.8rem] pointer-events-none group-hover:border-purple-500/10 transition-colors" />

          {/* Module tag */}
          <div className="absolute top-4 left-6 font-mono text-[9px] text-purple-500/50 select-none tracking-widest">
            [MODULE_ID: {category.title.toUpperCase()}]
          </div>

          <h3 className="text-2xl font-black text-white mb-8 text-center pt-2 flex items-center justify-center gap-2">
            <FaCubes className="text-purple-400 text-lg" /> {category.title}
          </h3>

          {/* Skill Items Grid */}
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1200}
            scale={1.02}
            transitionSpeed={800}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center space-x-2.5 bg-[#03020c]/80 border border-white/5 hover:border-[#8245ec]/45 hover:shadow-[0_0_15px_rgba(130,69,236,0.15)] rounded-2xl py-3 px-3 transition-all duration-300 cursor-pointer select-none group/item"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-8 sm:h-8 object-contain group-hover/item:scale-110 transition-transform"
                  />
                  <span className="text-xs font-semibold text-gray-300 group-hover/item:text-white transition-colors truncate">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;