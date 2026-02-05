import React, { useRef, useLayoutEffect } from "react";
import ServiceCard from "./ServiceCard";
import { Service1, Service2, Service3, Service4 } from "./Services";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhatWeOfferSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const NAV_HEIGHT = 91; // Set this to zero for non-sticky navbar

  const addToRefs = (el) => {
    if (!el) return;
    if (!cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        y: 120,
        opacity: 0,
        duration: 1,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          id: "solutionsPin",
          trigger: sectionRef.current,
          start: `top-=${NAV_HEIGHT} top`,
          end: "+=1200",
          scrub: true, // Removed due to Anchor Jumps
          pin: true, // Removed due to Anchor Jumps
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col pt-10 pb-20 px-20 items-center justify-center gap-5"
    >
      <h2 className="font-onest text-[60px] font-bold leading-[100%] tracking-[-0.03em] text-[#021933]">
        What We <span className="text-[#0085F6]">Offer</span>
      </h2>

      <p className="font-onest text-[20px] font-medium leading-[130%] tracking-[-0.05em] text-[#021933] max-w-[743px]">
        Purpose-built solutions and accelerators designed to solve real
        enterprise challenges.
      </p>
      <div className="grid grid-cols-4 w-full gap-5 items-start justify-center">
        {services.map((service, index) => {
          return (
            <div key={index} ref={addToRefs}>
              <ServiceCard
                index={index}
                image={service.image}
                title={service.title}
                solutions={service.solutions}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const services = [
  {
    image: Service1,
    title: "Digital Operations",
    solutions: [
      "Incident Management System",
      "Ticketing & Workflow Automation",
      "Field Operations Mobility",
      "Service Performance Analytics",
      "Escalation & Service Management",
    ],
  },
  {
    image: Service2,
    title: "Supply Chain",
    solutions: [
      "AI-Driven Warehouse Optimization",
      "Inventory Accuracy & Control",
      "Logistics Visibility Dashboard",
      "Asset & Materials Management",
      "Supply Chain",
    ],
  },
  {
    image: Service3,
    title: "Healthcare Solutions",
    solutions: [
      "Digital Patient Engagement",
      "EMR / EHR System Integration",
      "Claims & Revenue Cycle Automation",
      "Hospital Operations Intelligence",
      "Regulatory Quality Analytics",
    ],
  },
  {
    image: Service4,
    title: "Oil & Gas Digital",
    solutions: [
      "Digital Oilfield Platforms",
      "Well & Production Analytics",
      "Asset Lifecycle Management",
      "HSSE Compliance & Reporting",
      "Reliability & Operations Dashboards",
    ],
  },
];

export default WhatWeOfferSection;
