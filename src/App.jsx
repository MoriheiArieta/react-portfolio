/**
 * @copyright 2025 gmaarieta
 * @license Apache-2.0
 */

import { ReactLenis } from "lenis/react";

/**
 * Components
 */
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
// import Work from "./components/Work";
import Maps from "./components/Maps";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GraphicDesign from "./components/GraphicDesign";

// Debug component to check if Lenis is working
// const LenisDebug = () => {
//   const lenis = useLenis();

//   useEffect(() => {
//     console.log("Lenis instance:", lenis);
//     if (lenis) {
//       console.log("✅ Lenis is initialized");
//       lenis.on("scroll", (e) => {
//         console.log("Lenis scroll event:", e.scroll);
//       });
//     } else {
//       console.log("❌ Lenis not found");
//     }
//   }, [lenis]);

//   return null;
// };

const App = () => {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      }}
    >
      {/* <LenisDebug /> */}
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        {/* <Work /> */}
        <Maps />
        <GraphicDesign />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  );
};

export default App;
