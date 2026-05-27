import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3 overflow-hidden"
    >
      {/* FIXED ANIMATED BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl animate-floatSlow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-floatSlow delay-2000" />
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-floatSlow delay-4000" />
      </div>

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4" />
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are
          the details of my academic background.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[3px] h-full bg-white/30" />

        {education.map((edu, index) => {
          const isRight = index % 2 === 0;

          return (
            <div
              key={edu.id}
              className={`relative mb-24 flex ${
                isRight ? "justify-end" : "justify-start"
              }`}
            >
              {/* Timeline Circle */}
              <div className="absolute left-1/2 -translate-x-1/2 z-20">
                <div className="w-14 h-14 rounded-full bg-[#0f1224] border-4 border-[#8245ec] flex items-center justify-center">
                  🎓
                </div>
              </div>

              {/* Card */}
              <div
                className={`relative w-full sm:w-[420px]
                  bg-[#0f1224]
                  border border-white/20
                  rounded-2xl
                  p-6
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:scale-[1.02]
                  hover:border-[#8245ec]
                  hover:shadow-[0_0_35px_rgba(130,69,236,0.6)]
                  ${
                    isRight
                      ? "sm:ml-auto sm:pl-12"
                      : "sm:mr-auto sm:pr-12"
                  }`}
              >
                <h3 className="text-xl font-semibold text-white">
                  {edu.degree}
                </h3>
                <p className="text-gray-300 text-sm">{edu.school}</p>
                <p className="text-gray-500 text-xs mt-1">{edu.date}</p>

                <p className="mt-4 text-gray-400 font-bold">
                  Grade: {edu.grade}
                </p>
                <p className="mt-4 text-gray-400 leading-relaxed">
                  {edu.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
