import React from "react";
import SolutionCard from "./SolutionCard";
import solutionImg1 from "../../assets/solution-1.svg";
import solutionImg2 from "../../assets/solution-2.svg";
import solutionImg3 from "../../assets/solution-3.svg";
import solutionImg4 from "../../assets/solution-4.svg";
import solutionImg5 from "../../assets/solution-5.svg";

const WhatWeDoSection = () => {
  return (
    <div className="flex flex-col py-20 px-4 lg:px-20 items-center justify-center gap-5">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] items-center">
        <h2 className="font-onest text-[60px] font-bold leading-[100%] tracking-[-0.03em] text-[#021933] text-center lg:text-start">
          What We <span className="text-[#0085F6]">Do</span>
        </h2>

        <p className="font-onest text-[20px] font-medium leading-[130%] tracking-[-0.05em] text-[#021933] text-center lg:text-start">
          End-to-end technology services designed to support enterprise
          transformation and sustained performance. Each service can be engaged
          independently or combined as a part of a cohesive, end-to-end delivery
          model.
        </p>
      </div>

      <div className="flex flex-wrap gap-11 w-full py-18 items-center justify-center">
        {solutions.map((solution, index) => {
          return (
            <SolutionCard
              key={index}
              image={solution.image}
              title={solution.title}
              description={solution.description}
            />
          );
        })}
      </div>
    </div>
  );
};

const solutions = [
  {
    image: solutionImg1,
    title: "Consulting & Strategy",
    description:
      "We start with deep discovery—understanding your business goals, technical landscape, and the challenges you face.",
  },
  {
    image: solutionImg2,
    title: "Cloud & Infrastructure",
    description:
      "We architect solutions that balance innovation with pragmatism, designed for today and built for tomorrow.",
  },
  {
    image: solutionImg3,
    title: "Data, AI & Advanced Analytics",
    description:
      "Agile execution with continuous collaboration. We ship quality code and stand behind everything we build.",
  },
  {
    image: solutionImg4,
    title: "Cybersecurity",
    description:
      "Launch is just the beginning. We provide ongoing support, monitoring, and continuous optimization.",
  },
  {
    image: solutionImg5,
    title: "Application Development & Modernization",
    description:
      "Launch is just the beginning. We provide ongoing support, monitoring, and continuous optimization.",
  },
];

export default WhatWeDoSection;
