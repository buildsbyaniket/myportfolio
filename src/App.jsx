import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import LeetCodePortal from "./components/LeetCode/LeetCodePortal";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from "./BlurBlob";

function App() {
  return (
    <div className="bg-[#020108] relative min-h-screen text-white overflow-hidden bg-grid-blueprint">
      
      {/* GRID OVERLAY WITH PULSE */}
      <div className="absolute inset-0 bg-[#8245ec]/[0.01] pointer-events-none animate-gridPulse" />

      {/* BLUEPRINT VERTICAL GUTTERS */}
      <div className="absolute inset-y-0 left-[6vw] w-[1px] bg-purple-500/10 pointer-events-none z-20 hidden md:block" />
      <div className="absolute inset-y-0 right-[6vw] w-[1px] bg-purple-500/10 pointer-events-none z-20 hidden md:block" />

      {/* CROSSHAIRS AT CORNERS OF PORT */}
      <div className="absolute left-[6vw] top-6 font-mono text-[9px] text-purple-500/30 select-none z-20 hidden md:block">+ [BLUEPRINT.GRID_Y_01]</div>
      <div className="absolute right-[6vw] top-6 font-mono text-[9px] text-purple-500/30 select-none z-20 hidden md:block text-right">+ [BLUEPRINT.GRID_Y_02]</div>

      {/* BLUR BACKGROUND ORBS */}
      <BlurBlob
        position={{ top: "25%", left: "10%" }}
        size={{ width: "30%", height: "45%" }}
      />
      <BlurBlob
        position={{ top: "65%", left: "60%" }}
        size={{ width: "25%", height: "35%" }}
      />

      {/* CONTENT */}
      <div className="relative z-10">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Works />
        <LeetCodePortal />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
