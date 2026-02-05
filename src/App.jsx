import { useState, useEffect } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Solutions from "./pages/Solutions.jsx";
import Industries from "./pages/Industries.jsx";
import Differentiators from "./pages/Differentiators.jsx";
import Contact from "./pages/Contact.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Preloader from "./components/Preloader/Preloader.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Persistent Layout */}
      <Header />
      <main className="pt-[91px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/differentiators" element={<Differentiators />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      {loading && (
        <Preloader
          onDone={() => {
            setLoading(false);

            // Scroll to Top
            window.scrollTo({ top: 0, behavior: "smooth" });

            // refresh GSAP after layout mounts
            setTimeout(() => {
              if (window.ScrollTrigger) {
                window.ScrollTrigger.refresh();
              }
            }, 50);
          }}
        />
      )}
    </>
  );
}

export default App;
