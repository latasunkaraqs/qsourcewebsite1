import { useEffect } from "react";
// import { useState, useEffect } from "react";
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
// import Preloader from "./components/Preloader/Preloader.jsx";
import Layout from "./components/Layout.jsx";

function App() {
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/differentiators" element={<Differentiators />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
