import React, { useState } from "react";
import { education } from "../../constants";
import { FaGraduationCap, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const Education = () => {
  const [activeEdu, setActiveEdu] = useState(null);

  return (
    <section
      id="education"
      className="relative py-24 px-[10vw] md:px-[7vw] lg:px-[16vw] font-sans overflow-hidden bg-gradient-to-b from-transparent via-[#060517]/20 to-transparent"
    >
      {/* Background decoration blur */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute bottom-[30%] left-[5%] w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[90px]" />
      </div>

      {/* Section Title */}
      <div className="text-center mb-20 relative">
        <span className="text-[#8245ec] font-bold text-xs uppercase tracking-[0.25em] bg-[#8245ec]/10 px-4 py-1.5 rounded-full border border-[#8245ec]/20 shadow-[0_0_15px_rgba(130,69,236,0.1)]">
          Academics
        </span>
        <h2 className="text-4.5xl font-black text-white mt-6 tracking-tight">
          EDUCATION <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">DETAILS</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#8245ec] to-transparent mx-auto mt-4" />
        <p className="text-gray-400 mt-4 text-lg font-medium max-w-xl mx-auto">
          Academic qualifications and scholastic achievements tracking my engineering studies and foundational training.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Central Vertical line */}
        <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/10 via-[#8245ec]/40 to-purple-500/10 -translate-x-1/2 pointer-events-none z-0" />

        <div className="space-y-16">
          {education.map((edu, index) => {
            const isRight = index % 2 === 0;
            const isActive = activeEdu === index;

            return (
              <div
                key={edu.id}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  isRight ? "md:flex-row-reverse" : ""
                }`}
                onMouseEnter={() => setActiveEdu(index)}
                onMouseLeave={() => setActiveEdu(null)}
              >
                {/* Timeline Connector Circle */}
                <div className="absolute left-[30px] md:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center pointer-events-none">
                  <div className={`w-9 h-9 rounded-full border-2 transition-all duration-300 flex items-center justify-center shadow-lg ${
                    isActive 
                      ? "bg-[#8245ec] border-white scale-125 shadow-[0_0_15px_rgba(130,69,236,0.6)]" 
                      : "bg-[#0b0a1d] border-[#8245ec]/60"
                  }`}>
                    <FaGraduationCap className={`text-xs transition-colors ${isActive ? "text-white" : "text-[#8245ec]"}`} />
                  </div>
                </div>

                {/* Spacer */}
                <div className="w-full md:w-1/2 hidden md:block" />

                {/* Card Container */}
                <div className={`w-full md:w-1/2 pl-14 pr-4 z-10 ${
                  isRight ? "md:pl-0 md:pr-8" : "md:pl-8 md:pr-0"
                }`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className={`bg-[#080619]/90 border rounded-3xl p-6 relative group transition-colors duration-300 ${
                      isActive 
                        ? "border-[#8245ec] shadow-[0_15px_40px_rgba(130,69,236,0.15)] bg-[#0b0921]" 
                        : "border-white/10"
                    }`}
                  >
                    {/* Double outline glow overlay */}
                    <div className="absolute -inset-1 border border-purple-500/5 rounded-[2.2rem] pointer-events-none group-hover:border-purple-500/10 transition-colors" />

                    {/* Node Tags */}
                    <div className="flex justify-between items-center mb-2 flex-wrap">
                      <span className="font-mono text-xs font-black text-[#8245ec] uppercase tracking-widest">
                        {edu.date}
                      </span>
                      <span className="text-[9px] font-mono text-gray-500 tracking-wider">
                        [ACADEMIC_NODE_{index + 1}]
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-white group-hover:text-purple-400 transition-colors leading-snug">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-400 text-sm font-semibold mt-1">{edu.school}</p>

                    <div className="inline-flex mt-4 bg-purple-950/20 border border-purple-500/20 rounded-xl px-3.5 py-1 text-xs font-black text-purple-400 shadow-[0_0_10px_rgba(130,69,236,0.1)]">
                      GRADE: {edu.grade}
                    </div>

                    <p className="mt-4 text-gray-450 text-sm leading-relaxed text-justify">
                      {edu.desc}
                    </p>
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

export default Education;
