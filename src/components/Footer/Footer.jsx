import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {

  // Smooth Scroll Function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      
      <div className="container mx-auto text-center">

        {/* Logo / Name */}
        <h2 className="text-2xl font-bold text-purple-500">
          Aniket Dev
        </h2>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-5">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="text-sm sm:text-base text-gray-300 hover:text-purple-500 transition duration-300"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center gap-5 mt-7">

          {/* GitHub */}
          <a
            href="https://github.com/buildsbyaniket"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-300 hover:text-purple-500 transition duration-300 transform hover:scale-110"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/aniket-dev-52a105326/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-300 hover:text-purple-500 transition duration-300 transform hover:scale-110"
          >
            <FaLinkedin />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/aniket_dev_06"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-300 hover:text-purple-500 transition duration-300 transform hover:scale-110"
          >
            <FaInstagram />
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/Aniket_Dev06/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-300 hover:text-purple-500 transition duration-300 transform hover:scale-110"
          >
            <SiLeetcode />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 mt-7">
          © 2026 Aniket Dev. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;