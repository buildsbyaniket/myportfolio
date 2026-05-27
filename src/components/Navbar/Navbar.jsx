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
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "works", label: "Works" },
    { id: "education", label: "Education" },
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
      className={`fixed top-0 w-full z-50 transition px-[7vw] lg:px-[20vw]
      ${
        isScrolled
          ? "bg-[#050414]/50 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          Aniket
          <span className="text-[#8245ec]">/</span>
          Dev
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`cursor-pointer hover:text-[#8245ec] transition duration-300
              ${
                activeSection === item.id
                  ? "text-[#8245ec]"
                  : ""
              }`}
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex space-x-5">
          
          {/* GitHub */}
          <a
            href="https://github.com/buildsbyaniket"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec] transition duration-300"
          >
            <FaGithub size={24} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/aniket-dev-52a105326/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec] transition duration-300"
          >
            <FaLinkedin size={24} />
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/Aniket_Dev06/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec] transition duration-300"
          >
            <SiLeetcode size={24} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-4/5 bg-[#050414]/80 backdrop-blur-lg rounded-lg shadow-lg">
          
          <ul className="flex flex-col items-center space-y-5 py-6 text-gray-300">
            
            {/* Mobile Menu Items */}
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white transition duration-300
                ${
                  activeSection === item.id
                    ? "text-[#8245ec]"
                    : ""
                }`}
              >
                <button onClick={() => handleNavClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}

            {/* Mobile Social Icons */}
            <div className="flex space-x-5 pt-2">

              {/* GitHub */}
              <a
                href="https://github.com/buildsbyaniket"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                <FaGithub size={24} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/aniket-dev-52a105326/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                <FaLinkedin size={24} />
              </a>

              {/* LeetCode */}
              <a
                href="https://leetcode.com/u/Aniket_Dev06/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                <SiLeetcode size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;