import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from "./BlurBlob";

function App() {
  return (
    <div className="bg-[#050414] relative min-h-screen text-white overflow-hidden">
      
      {/* BLUR BACKGROUND */}
      <BlurBlob
        position={{ top: "35%", left: "20%" }}
        size={{ width: "30%", height: "40%" }}
      />

      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0
        bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),
        linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]
        bg-[size:24px_24px]
        [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black_60%,transparent_100%)]
        pointer-events-none"
      />

      {/* CONTENT */}
      <div className="relative z-10">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Works />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
