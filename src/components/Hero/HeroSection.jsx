import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const words = ["Reliable.", "Efficient.", "Scalable."];
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setVisible(true);
      }, 300); // fade out duration
    }, 2000);

    return () => clearInterval(wordInterval);
  }, []);
  return (
    <div className="grid grid-cols-2 px-18 py-30">
      <div>
        <h1 className="font-onest text-[71px] font-bold leading-[100%] tracking-[-0.03em] text-black">
          Build Enterprise Technology that stay{" "}
          <span
            className={`inline-block min-w-[160px] text-[#0085F6] transition-all duration-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            {words[index]}
          </span>
          {/* Build <span className="text-[#0085F6]">Reliable</span> &
          <br />
          <span className="text-[#0085F6]">Scalable</span> Enterprise
          <br />
          Technology */}
        </h1>
        <p className="font-onest text-[19px] font-medium leading-[130%] tracking-[-0.05em] text-black mt-8 max-w-[540px]">
          We design, modernize, and scale mission-critical systems with proven
          architecture, security-first practices, and measurable performance
          outcomes — so your business runs without disruption and grows without
          limits.
          {/* Transform your challenges into triumphs with our comprehensive IT
          solutions. Your success story begins with our expertise. */}
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="relative w-[210px] h-[45px] mt-8 flex items-center justify-center gap-[10px] px-[20px] py-[10px] rounded-[50px] bg-[#021933] text-white hover:bg-[#0085F6] transition-all duration-300 ease-in-out cursor-pointer overflow-hidden group hover:scale-105"
        >
          <span className="pointer-events-none absolute inset-0 bg-white opacity-30 rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] blur-sm transition-transform duration-700"></span>

          <span className="relative z-10 font-onest text-[19px] font-medium leading-[130%] tracking-[-0.05rem] text-white">
            Get in Touch
          </span>
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default HeroSection;
