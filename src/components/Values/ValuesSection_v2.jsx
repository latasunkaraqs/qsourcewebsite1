import React, { useEffect, useRef } from "react";
import ValueCard from "./ValueCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    number: "01",
    heading: "Enterprise-First",
    description:
      "Solutions designed for scale, security, and governance from day one.",
  },
  {
    number: "02",
    heading: "Execution-Led",
    description:
      "Clear ownership, disciplined delivery, and measurable results.",
  },
  {
    number: "03",
    heading: "Talent-Aligned",
    description:
      "The right expertise, delivered through flexible engagement models.",
  },
];

const ValuesSection = () => {
  const cardsRef = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=1200",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.fromTo(
      cardsRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 1,
        ease: "power3.out",
      },
    );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);
  return (
    <div
      ref={sectionRef}
      className="w-full min-h-[700px] px-20 py-30 bg-[url('src/assets/valuesbg.png')] bg-cover bg-bottom"
    >
      <div className="w-full flex flex-col justify-center items-center gap-20">
        <h2 className="font-onest text-[60px] font-bold leading-[115%] tracking-normal text-center text-white">
          Built for Scale. Focused on Results.
        </h2>
        <div className="flex items-center justify-center gap-30">
          {values.map((value, index) => (
            <div key={index} ref={(el) => (cardsRef.current[index] = el)}>
              <ValueCard {...value} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValuesSection;
