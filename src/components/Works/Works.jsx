import React, { useState } from "react";
import { projects } from "../../constants";
import { FaGithub, FaLink, FaWindowMaximize, FaExternalLinkAlt, FaTerminal } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="works"
      className="py-24 px-[10vw] md:px-[7vw] lg:px-[16vw] font-sans relative overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute bottom-[10%] right-[-5%] w-[350px] h-[350px] bg-purple-600/5 rounded-full blur-[90px]" />
      </div>

      {/* Section Title */}
      <div className="text-center mb-16 relative">
        <span className="text-[#8245ec] font-bold text-xs uppercase tracking-[0.25em] bg-[#8245ec]/10 px-4 py-1.5 rounded-full border border-[#8245ec]/20 shadow-[0_0_15px_rgba(130,69,236,0.1)]">
          Portfolio
        </span>
        <h2 className="text-4.5xl font-black text-white mt-6 tracking-tight">
          RECENT <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">WORKS</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#8245ec] to-transparent mx-auto mt-4" />
        <p className="text-gray-400 mt-4 text-lg font-medium max-w-xl mx-auto">
          A collection of full-stack projects showcasing custom integrations, database systems, and interactive UI dashboards.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            whileHover={{ y: -6 }}
            className="bg-[#080619]/90 border border-white/10 rounded-[2.2rem] shadow-2xl overflow-hidden cursor-pointer relative group hover:border-[#8245ec]/40 transition-colors duration-300"
          >
            {/* Double Outline Glow */}
            <div className="absolute -inset-1 border border-purple-500/5 rounded-[2.5rem] pointer-events-none group-hover:border-purple-500/10 transition-colors" />

            {/* Custom high-tech header tags */}
            <div className="bg-[#0b0a21] px-5 py-3 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              </div>
              <span className="font-mono text-[9px] text-purple-500/50 tracking-wider">
                [PROJECT_NODE_{index + 1}]
              </span>
            </div>

            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-44 object-cover rounded-[1.5rem] border border-white/5"
              />
            </div>
            <div className="p-6 pt-2">
              <h3 className="text-xl font-black text-white group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 text-sm mt-3 line-clamp-3 leading-relaxed text-justify">
                {project.description}
              </p>

              {/* Tags */}
              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="inline-block bg-[#050312] border border-white/5 text-[9px] font-mono font-bold text-purple-400 rounded-lg px-2.5 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Container */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#080619] border border-white/10 rounded-[2.5rem] shadow-2xl lg:w-full w-[95%] max-w-3xl overflow-hidden relative"
            >
              {/* Modal Window Header */}
              <div className="bg-[#0b0a21] px-6 py-4.5 border-b border-white/5 flex items-center justify-between">
                <span className="font-mono text-[10px] text-purple-400 flex items-center gap-2 uppercase tracking-widest font-bold">
                  <FaTerminal /> project_inspector.exe
                </span>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-400 text-2xl leading-none hover:text-purple-500 font-bold"
                >
                  &times;
                </button>
              </div>

              <div className="flex flex-col">
                {/* Image */}
                <div className="w-full flex justify-center bg-[#050312] p-6 border-b border-white/5">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="max-h-60 object-contain rounded-2xl border border-white/5 shadow-2xl"
                  />
                </div>

                {/* Details */}
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-black text-white mb-3">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 text-justify">
                    {selectedProject.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-[#050312] border border-white/5 text-[9px] font-mono font-bold text-purple-400 rounded-lg px-2.5 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions buttons */}
                  <div className="flex gap-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-1/2 flex items-center justify-center gap-2 bg-[#050312] border border-white/10 hover:border-[#8245ec]/50 hover:bg-[#8245ec]/5 text-gray-300 py-3 rounded-2xl text-xs uppercase tracking-widest font-extrabold transition-all"
                    >
                      <FaGithub size={14} className="text-purple-400" /> View Code
                    </a>
                    {selectedProject.webapp ? (
                      <a
                        href={selectedProject.webapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-1/2 flex items-center justify-center gap-2 bg-[#8245ec] hover:bg-[#9760fa] hover:shadow-[0_0_20px_rgba(130,69,236,0.4)] text-white py-3 rounded-2xl text-xs uppercase tracking-widest font-extrabold transition-all"
                      >
                        <FaLink size={12} /> View Live
                      </a>
                    ) : (
                      <div className="w-1/2 flex items-center justify-center gap-2 bg-white/5 border border-white/5 text-gray-500 py-3 rounded-2xl text-xs uppercase tracking-widest font-extrabold select-none cursor-not-allowed">
                        Live offline
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;