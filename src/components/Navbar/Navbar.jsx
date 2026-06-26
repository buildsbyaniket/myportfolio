import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Journey" },
    { id: "works", label: "Works" },
    { id: "leetcode-portal", label: "DSA Portal" },
    { id: "education", label: "Academics" },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setIsOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition px-[7vw] lg:px-[16vw] py-3.5
      ${
        isScrolled
          ? "bg-[#020108]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          : "bg-transparent"
      }`}
    >
      <div className="text-white flex justify-between items-center">
        
        {/* LOGO */}
        <div className="text-base font-black cursor-pointer select-none font-mono tracking-tighter" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="text-[#8245ec]">&lt;</span>
          Aniket
          <span className="text-[#8245ec]">/</span>
          Dev
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu links with High-Contrast tags */}
        <ul className="hidden lg:flex space-x-6 items-center">
          {menuItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`cursor-pointer font-bold text-[10px] uppercase tracking-widest py-1.5 px-3.5 rounded-xl border transition-all duration-300
                ${
                  isActive
                    ? "text-purple-400 border-purple-500/30 bg-purple-950/20 shadow-[0_0_15px_rgba(130,69,236,0.15)]"
                    : "text-gray-400 border-transparent hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </li>
            );
          })}
        </ul>

        {/* Desktop Socials */}
        <div className="hidden lg:flex space-x-4 items-center">
          {[
            { href: "https://github.com/buildsbyaniket", icon: <FaGithub size={18} /> },
            { href: "https://www.linkedin.com/in/aniket-dev-52a105326/", icon: <FaLinkedin size={18} /> },
            { href: "https://leetcode.com/u/Aniket_Dev06/", icon: <SiLeetcode size={18} /> }
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#8245ec] hover:scale-110 transition duration-300 bg-white/5 border border-white/5 p-2 rounded-xl"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-3">
          {/* Mobile socials icons */}
          <div className="flex gap-2">
            <a
              href="https://github.com/buildsbyaniket"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white p-2 bg-white/5 rounded-xl border border-white/5"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="https://leetcode.com/u/Aniket_Dev06/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white p-2 bg-white/5 rounded-xl border border-white/5"
            >
              <SiLeetcode size={16} />
            </a>
          </div>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 bg-purple-950/20 border border-purple-500/20 text-[#8245ec] rounded-xl hover:bg-purple-950/40 transition"
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="absolute top-18 left-1/2 -translate-x-1/2 w-[90%] bg-[#020108]/95 border border-white/10 backdrop-blur-2xl rounded-2xl shadow-2xl p-6 mt-2">
          <ul className="flex flex-col space-y-4 text-gray-400">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className="w-full"
              >
                <button 
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left font-bold text-xs uppercase tracking-widest py-2.5 px-4 rounded-xl border transition-all
                  ${
                    activeSection === item.id
                      ? "text-purple-400 bg-purple-950/20 border-purple-500/20"
                      : "border-transparent hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;