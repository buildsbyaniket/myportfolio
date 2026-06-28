import React from "react";
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile2.png";

import { FaTerminal, FaFileDownload, FaNetworkWired } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="relative z-10 min-h-screen px-[10vw] md:px-[7vw] lg:px-[16vw] flex items-center pt-20"
    >

      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-16">

        {/* LEFT PANEL: CYBER TEXT CONSOLE */}
        <div className="md:w-1/2 text-center md:text-left relative">


          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-2 tracking-tight">
            Hi, I am
          </h1>

          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter bg-gradient-to-r from-white via-white to-purple-400 bg-clip-text text-transparent">
            Aniket Dev
          </h2>

          <h3 className="text-xl md:text-2xl font-bold text-[#8245ec] flex flex-wrap items-center justify-center md:justify-start gap-2 min-h-[2.5rem] select-none">
              <span className="text-gray-400">I specialize in </span>
              <span className="text-purple-400 underline decoration-purple-600 decoration-wavy">
                <Typewriter
                  options={{
                    strings: [
                      "FullStack Development",
                      "UI/UX Designing",
                      "DSA Problem Solving",
                      "Scalable Architecture",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h3>

          {/* Glowing Double Outline Text Box */}
          <div className="bg-[#0b0a1d]/60 border border-white/10 rounded-3xl p-6 mt-8 relative shadow-2xl backdrop-blur-sm group hover:border-[#8245ec]/40 transition-colors">
            {/* Outer offset borders */}
            <div className="absolute -inset-1 border border-purple-500/5 rounded-[2rem] pointer-events-none group-hover:border-purple-500/10 transition-colors" />
            
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed text-justify">
              I am an engineering student and aspiring **Full-Stack Developer** specializing in the MERN stack and modern cloud databases. I build highly responsive, secure, and user-centric web applications while constantly refining my algorithmic efficiency and problem-solving through live code environments.
            </p>
          </div>

          {/* Outlined Cyberpunk Download Button */}
          <div className="mt-8 flex justify-center md:justify-start">
            <a
              href="https://drive.google.com/file/d/1LlEb-xjgiF-tQoo73-4CS_PNj7UQJjMY/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-2xl font-bold text-xs uppercase tracking-widest text-white border border-[#8245ec]/80 bg-[#8245ec]/5 hover:bg-[#8245ec]/20 hover:shadow-[0_0_30px_rgba(130,69,236,0.4)] transition-all duration-300 overflow-hidden"
            >
              {/* Sliding glowing background */}
              <span className="absolute inset-0 w-full h-full -mt-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <FaFileDownload className="text-purple-400 group-hover:scale-125 transition-transform" />
              <span>DOWNLOAD CV</span>
            </a>
          </div>
        </div>

        {/* RIGHT PANEL: CYBER FRAME PICTURE */}
        <div className="md:w-1/2 flex justify-center">
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.02}
            transitionSpeed={1200}
            className="relative"
          >
            {/* Holographic Glowing frame bounds */}
            <div className="absolute -inset-4 border border-[#8245ec]/20 rounded-[3rem] pointer-events-none z-0 hidden lg:block" />
            <div className="absolute -inset-2 border-2 border-[#8245ec]/40 rounded-[2.5rem] pointer-events-none z-0" />
            
            
            {/* Corner tags for high-tech detailing */}
            <div className="absolute top-2 left-4 font-mono text-[9px] text-purple-400/50 z-20 select-none tracking-wider">[SYS.GRID_X_29]</div>
            <div className="absolute bottom-2 right-4 font-mono text-[9px] text-purple-400/50 z-20 select-none tracking-wider">[TARGET.SYS_ALIGN]</div>

            {/* Profile image with inner shadow panel */}
            {/* Profile image with glass effect */}
            <div
              className="w-64 h-64 md:w-[26rem] md:h-[26rem] rounded-[2rem] overflow-hidden bg-gradient-to-b from-purple-950/20 to-transparent border border-white/10 shadow-2xl relative z-10"
            >
              <img src={profileImage} alt="Aniket Dev" className="w-full h-full object-cover" />
              {/* Glass overlay */}
              <div className="absolute inset-0 rounded-[2rem] border border-white/30 pointer-events-none" />
              {/* Inner ambient shadows */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020108] via-transparent to-transparent opacity-80" />
            </div>
          </Tilt>
        </div>

      </div>
    </section>
  );
};

export default About;
