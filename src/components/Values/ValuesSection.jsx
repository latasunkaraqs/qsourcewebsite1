import React, { useEffect, useRef, useState } from "react";
import ValueCard from "./ValueCard";

const values = [
  {
    number: "01",
    heading: "Enterprise-First",
    description:
      "Grounded in enterprise realities, governance expectations, and the complexity of regulated, large-scale operating environments.",
  },
  {
    number: "02",
    heading: "Execution-Led",
    description:
      "Structured delivery with clear ownership, disciplined execution, and outcomes aligned to business and operational priorities.",
  },
  {
    number: "03",
    heading: "Talent-Aligned",
    description:
      "Expert teams aligned through flexible models to maintain momentum, continuity, and long-term delivery effectiveness.",
  },
];

const ValuesSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.55,
      },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full min-h-[720px] py-30 bg-[url('src/assets/valuesbg.svg')] bg-cover bg-bottom"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col justify-center items-center gap-18 px-10 lg:px-[65px]">
        {/* slower heading */}
        <h2
          className={`font-onest text-[52px] lg:text-[60px] font-bold leading-[100%] tracking-[-0.03em] text-center text-white
          transition-all duration-[1200ms] ease-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"}
        `}
        >
          Built for Scale. Focused on Results.
        </h2>

        <div className="flex flex-col md:flex-row items-start justify-center gap-10 lg:gap-20 xl:gap-30">
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
