import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile2.png";

const About = () => {
  return (
    <section
      id="about"
      className="relative z-10 min-h-screen px-[7vw] lg:px-[20vw] flex items-center"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-12">

        {/* LEFT */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-2">
            Hi, I am
          </h1>

          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Aniket Dev
          </h2>

          <h3 className="text-xl md:text-3xl font-semibold text-[#8245ec]">
            <span className="text-white">I am a </span>
            <Typewriter
              options={{
                strings: [
                  "FullStack Developer",
                  "UI/UX Designer",
                  "DSA Enthusiast",
                  "Coder",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>

            <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a final-year engineering student and aspiring Full-Stack Developer with strong skills in the MERN stack and modern web technologies. I build responsive, user-focused web applications and continuously improve my problem-solving, frontend, and backend development skills through hands-on projects and real-world practice.
          </p>

          <a
            href="https://drive.google.com/file/d/1LlEb-xjgiF-tQoo73-4CS_PNj7UQJjMY/view?usp=drive_link"
            target="_blank"
            className="inline-block mt-8 px-8 py-3 rounded-full font-bold bg-gradient-to-r from-[#8245ec] to-[#a855f7] hover:scale-105 transition"
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* RIGHT */}
        <div className="md:w-1/2 flex justify-center">
          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            scale={1.05}
            className="w-64 h-64 md:w-[28rem] md:h-[28rem] rounded-full border-4 border-purple-600"
          >
            <img
              src={profileImage}
              alt="Aniket Dev"
              className="w-full h-full object-cover rounded-full"
            />
          </Tilt>
        </div>

      </div>
    </section>
  );
};

export default About;
