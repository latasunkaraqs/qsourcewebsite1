import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
// import heroIllustration from "../../assets/heroIllustration.svg";
import HeroIllustrationSVG from "../../assets/heroIllustration.svg?react";
import ContactModal from "../Contact/ContactModal";

const HeroSection = () => {
  // const navigate = useNavigate();
  const svgWrapRef = useRef(null);
  const [open, setOpen] = useState(false);

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
  }, [words.length]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const svg = svgWrapRef.current?.querySelector("svg");
      if (!svg) return;

      const parts = svg.querySelectorAll("[id]:not(defs *)");

      gsap.set(parts, {
        transformBox: "fill-box",
        transformOrigin: "50% 50%",
      });

      const tl = gsap.timeline({ delay: 0.3 });

      // Scatter → assemble (random only here)
      tl.from(parts, {
        duration: 1.6,
        x: () => gsap.utils.random(-900, 900),
        y: () => gsap.utils.random(-700, 700),
        rotation: () => gsap.utils.random(-180, 180),
        scale: 0.2,
        opacity: 0,
        stagger: 0.05,
        ease: "expo.out",
      });

      // small settle snap
      tl.to(
        parts,
        {
          scale: 1,
          duration: 0.35,
          ease: "back.out(2)",
          stagger: 0.02,
        },
        "-=0.5",
      );

      // subtle tech vibration AFTER assemble
      tl.add(() => {
        parts.forEach((el, i) => {
          const dx = gsap.utils.random(-2, 2);
          const dy = gsap.utils.random(-2, 2);
          const rot = gsap.utils.random(-1, 1);
          gsap.to(el, {
            x: dx,
            y: dy,
            rotation: rot,
            duration: 1.8,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.03, // phase offset — looks organic but stable
          });
        });
      });
    }, svgWrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 px-2 lg:gap-10 lg:px-18 lg:py-30">
        <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
          <h1 className="font-onest text-[60px] lg:text-[71px] font-bold leading-[120%] lg:leading-[100%] tracking-[-0.03em] text-black text-center lg:text-start">
            Build Enterprise Technology that stay{" "}
            <span
              className={`inline-block min-w-[160px] text-[#0085F6] transition-all duration-300 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
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
          <p className="font-onest text-[19px] font-medium leading-[130%] tracking-[-0.05em] text-black mt-8 max-w-[540px] text-center lg:text-start">
            We design, modernize, and scale mission-critical systems with proven
            architecture, security-first practices, and measurable performance
            outcomes — so your business runs without disruption and grows
            without limits.
            {/* Transform your challenges into triumphs with our comprehensive IT
          solutions. Your success story begins with our expertise. */}
          </p>
          <button
            // onClick={() => navigate("/contact")}
            onClick={() => setOpen(true)}
            className="relative w-[210px] h-[45px] mt-8 flex items-center justify-center gap-[10px] px-[20px] py-[10px] rounded-[50px] bg-[#021933] text-white hover:bg-[#0085F6] transition-all duration-300 ease-in-out cursor-pointer overflow-hidden group hover:scale-105"
          >
            <span className="pointer-events-none absolute inset-0 bg-white opacity-30 rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] blur-sm transition-transform duration-700"></span>

            <span className="relative z-10 font-onest text-[19px] font-medium leading-[130%] tracking-[-0.05rem] text-white">
              Get in Touch
            </span>
          </button>
        </div>
        <div
          ref={svgWrapRef}
          className="flex justify-center items-center lg:items-start lg:justify-end"
        >
          {/* <img
          src={heroIllustration}
          alt="Animated Image"
          className="h-[480px]"
        /> */}
          <HeroIllustrationSVG className="lg:h-[480px] w-auto z-20" />
        </div>
      </div>
      {open && <ContactModal onClose={() => setOpen(false)} />}
    </>
  );
};

export default HeroSection;
