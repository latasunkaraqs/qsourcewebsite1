import React, { useEffect, useRef, useState } from "react";
import ValueCard from "./ValueCard";

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
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full min-h-[700px] px-20 py-30 bg-[url('src/assets/valuesbg.png')] bg-cover bg-bottom"
    >
      <div className="w-full flex flex-col justify-center items-center gap-20">
        {/* slower heading */}
        <h2
          className={`font-onest text-[60px] font-bold leading-[100%] tracking-[-0.03em] text-center text-white
          transition-all duration-[1200ms] ease-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"}
        `}
        >
          Built for Scale. Focused on Results.
        </h2>

        <div className="flex items-center justify-center gap-30">
          {values.map((value, index) => (
            <div
              key={index}
              className={`
                transition-all duration-[1200ms] ease-out
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"}
              `}
              style={{
                transitionDelay: `${index * 350}ms`, // slower stagger
              }}
            >
              <ValueCard {...value} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValuesSection;
