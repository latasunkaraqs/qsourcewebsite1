import React, { useRef, useLayoutEffect } from "react";
import ServiceCard from "./ServiceCard";
import { Service1, Service2, Service3, Service4, Service5 } from "./Services";
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
      className="max-w-[1440px] mx-auto flex flex-col py-10 md:py-15 lg:py-20 items-center justify-center gap-5 px-6 md:px-10 "
    >
      <h2 className="font-onest text-[40px] md:text-[56px] lg:text-[60px] font-bold leading-[100%] tracking-[-0.03em] text-[#021933] text-center">
        What We <span className="text-[#0085F6]">Offer</span>
      </h2>

      <p className="font-onest text-[20px] font-medium leading-[130%] tracking-[-0.05em] text-[#021933] max-w-[750px] text-center">
        Enterprise solutions focused on addressing complex operational and
        industry-specific challenges through proven patterns and deep domain
        context. Each solution is structured to fit within existing
        environments, supporting continuity, efficiency, and long-term business
        evolution.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11 items-start justify-center">
        {services.map((service, index) => {
          return (
            <div
              key={index}
              ref={addToRefs}
              className="width-[95%] md:width-[45%] lg:width-[33%]"
            >
              <ServiceCard
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
      "Incident & Escalation Management",
      "Workflow & Service Automation",
      "Field Operations Mobility",
      "Service Performance Analytics",
      "Enterprise Service Visibility",
    ],
  },
  {
    image: Service2,
    title: "Supply Chain",
    solutions: [
      "Warehouse Optimization",
      "Inventory Accuracy & Control",
      "Logistics & Network Visibility",
      "Asset & Materials Management",
      "Supply Chain Performance Insights",
    ],
  },
  {
    image: Service3,
    title: "Healthcare Solutions",
    solutions: [
      "Patient Engagement Platforms",
      "Clinical System Integration",
      "Revenue Cycle Automation",
      "Hospital Operations Intelligence",
      "Care Quality & Compliance Analytics",
    ],
  },
  {
    image: Service4,
    title: "Oil & Gas Digital",
    solutions: [
      "Digital Oilfield Enablement",
      "Production & Well Analytics",
      "Asset Lifecycle Intelligence",
      "HSSE Compliance & Reporting",
      "Operational Reliability Dashboards",
    ],
  },
  {
    image: Service5,
    title: "Analytics, Automation & Accelerators",
    solutions: [
      "Enterprise Reporting",
      "Executive KPI Dashboards",
      "Predictive Maintenance Analytics",
      "Intelligent Process Automation",
      "ERP & CRM Accelerators",
    ],
  },
];

export default WhatWeOfferSection;
