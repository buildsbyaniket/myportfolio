// import React from "react";
// // import { experiences } from "../../constants";

// const Experience = () => {
//   return (
//     <section
//       id="experience"
//       className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient"
//     >
//       {/* Section Header */}
//       <div className="text-center mb-20">
//         <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
//         <div className="w-32 h-1 bg-purple-500 mx-auto mt-4" />
//         <p className="text-gray-400 mt-4 text-lg font-semibold">
//           A collection of my work experience and the roles I have taken in
//           various organizations
//         </p>
//       </div>

//       {/* Timeline Container */}
//       <div className="relative">
//         {/* Vertical Line */}
//         <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-white/30" />

//         {/* Experience Cards */}
//         {experiences.map((experience, index) => {
//           const isLeft = index % 2 === 0;

//           return (
//             <div
//               key={experience.id}
//               className={`relative mb-24 flex ${
//                 isLeft ? "justify-start" : "justify-end"
//               }`}
//             >
//               {/* Timeline Dot */}
//               <div className="absolute left-1/2 -translate-x-1/2 z-20">
//                 <div className="w-14 h-14 rounded-full bg-[#0f1224] border-4 border-[#8245ec] flex items-center justify-center">
//                   <img
//                     src={experience.img}
//                     alt={experience.company}
//                     className="w-8 h-8 object-contain"
//                   />
//                 </div>
//               </div>

//               {/* Card */}
//               <div
//                 className={`relative w-full sm:w-[420px]
//                 bg-[#0f1224]
//                 border border-white/20
//                 rounded-2xl
//                 p-6
//                 transition-all duration-300 ease-out
//                 hover:-translate-y-2
//                 hover:scale-[1.02]
//                 hover:border-[#8245ec]
//                 hover:shadow-[0_0_35px_rgba(130,69,236,0.6)]
//                 ${
//                   isLeft
//                     ? "sm:mr-auto sm:pr-12"
//                     : "sm:ml-auto sm:pl-12"
//                 }
//                 `}
//               >
//                 {/* Hover glow overlay */}
//                 <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

//                 {/* Header */}
//                 <div className="flex items-center gap-4">
//                   <div className="w-14 h-14 bg-white rounded-md overflow-hidden">
//                     <img
//                       src={experience.img}
//                       alt={experience.company}
//                       className="w-full h-full object-contain"
//                     />
//                   </div>

//                   <div>
//                     <h3 className="text-xl font-semibold text-white">
//                       {experience.role}
//                     </h3>
//                     <p className="text-gray-300 text-sm">
//                       {experience.company}
//                     </p>
//                     <p className="text-gray-500 text-xs mt-1">
//                       {experience.date}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Description */}
//                 <p className="text-gray-400 text-sm mt-4 leading-relaxed">
//                   {experience.desc}
//                 </p>

//                 {/* Skills */}
//                 <div className="mt-4">
//                   <p className="text-white font-medium mb-2">Skills</p>
//                   <div className="flex flex-wrap gap-2">
//                     {experience.skills.map((skill, i) => (
//                       <span
//                         key={i}
//                         className="text-xs px-3 py-1 rounded-lg bg-[#8245ec]/90 text-white border border-white/20"
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default Experience;
import React from "react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient"
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white">
          LEARNING JOURNEY
        </h2>

        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4" />

        <p className="text-gray-400 mt-6 text-lg font-semibold max-w-3xl mx-auto leading-relaxed">
          Currently focused on mastering MERN stack development,
          Data Structures & Algorithms, and building scalable
          full-stack applications with modern UI/UX practices.
        </p>
      </div>
    </section>
  );
};

export default Experience;