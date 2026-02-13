import React from "react";
import SolutionCard from "./SolutionCard";
import solutionImg1 from "../../assets/solution-1.svg";
import solutionImg2 from "../../assets/solution-2.svg";
import solutionImg3 from "../../assets/solution-3.svg";
import solutionImg4 from "../../assets/solution-4.svg";
import solutionImg5 from "../../assets/solution-5.svg";

const WhatWeDoSection = () => {
  return (
    <div className="max-w-[1440px] mx-auto flex flex-col py-10 md:py-15 items-center justify-center gap-5 px-6 md:px-10">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[2fr_3fr] items-center">
        <h2 className="font-onest text-[40px] md:text-[56px] lg:text-[60px] font-bold leading-[115%] tracking-normal text-[#021933] text-center lg:text-start">
          What We <span className="text-[#0085F6]">Do</span>
        </h2>

        <p className="font-onest text-[20px] font-medium leading-[130%] tracking-normal text-[#021933] text-center lg:text-start">
          Deliver end-to-end technology capabilities that support enterprise
          change, operational reliability, and sustained performance. Each
          capability can be engaged independently or delivered as part of a
          cohesive delivery model.
        </p>
      </div>

      <div className="flex flex-wrap gap-11 w-full pt-5 lg:pb-30 items-center justify-center">
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
    title: "Consulting & Transformation",
    description:
      "Defining technology strategy, transformation roadmaps, and operating models aligned to business outcomes and execution.",
  },
  {
    image: solutionImg2,
    title: "Cloud, Infrastructure & Operations",
    description:
      "Designing, modernizing, and operating secure, resilient cloud and infrastructure environments for mission-critical workloads.",
  },
  {
    image: solutionImg3,
    title: "Data, AI & Analytics",
    description:
      "Transforming enterprise data into trusted insights through analytics, AI, and scalable data platforms.",
  },
  {
    image: solutionImg4,
    title: "Application & Digital Experience",
    description:
      "Evolving enterprise applications and digital platforms to improve performance, usability, and long-term adaptability.",
  },
  {
    image: solutionImg5,
    title: "Talent & Staffing Solutions",
    description:
      "Augmenting enterprise teams with flexible talent models to accelerate delivery and sustain operational continuity.",
  },
];

export default WhatWeDoSection;
