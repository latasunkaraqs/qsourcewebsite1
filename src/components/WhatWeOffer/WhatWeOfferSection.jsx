import React, { useRef, useLayoutEffect } from "react";
import ServiceCard from "./ServiceCard";
import { Service1, Service2, Service3, Service4, Service5 } from "./Services";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhatWeOfferSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const NAV_HEIGHT = 391; // Set this to zero for non-sticky navbar

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
          // scrub: true, // Removed due to Anchor Jumps
          // pin: true, // Removed due to Anchor Jumps
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="max-w-[1440px] mx-auto flex flex-col py-8 items-center justify-center gap-5 px-6 md:px-10 "
    >
      <h2 className="font-onest text-[40px] md:text-[56px] lg:text-[60px] font-bold leading-[115%] tracking-normal text-[#021933] text-center">
        What We <span className="text-[#0085F6]">Offer</span>
      </h2>

      <p className="font-onest text-[20px] font-medium leading-[130%] tracking-normal text-[#021933] max-w-[90%] text-center">
        Enterprise solutions focused on addressing complex operational and
        industry-specific challenges through proven patterns and deep domain
        context. Each solution is structured to fit within existing
        environments, supporting continuity, efficiency, and long-term business
        evolution.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 items-start justify-center">
        {services.map((service, index) => {
          return (
            <div
              key={index}
              ref={addToRefs}
              className="width-[95%] md:width-[45%] lg:width-[33%] h-full"
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
    title: "Digital Operations & Enterprise Transformation",
    solutions: [
      "Incident & Service Management",
      "Workflow & Process Automation",
      "Application Modernization",
      "Field & Mobile Operations",
      "Digital Workplace Solutions",
      "Service Visibility & Monitoring",
      "Performance & Experience Analytics",
      "ITSM / ESM Enablement",
      "Cloud Operations & FinOps",
      "Identity & Operational Security",
    ],
  },
  {
    image: Service2,
    title: "Intelligent Supply Chain & Asset Management",
    solutions: [
      "Warehouse Optimization",
      "Inventory Accuracy & Control",
      "Logistics & Network Visibility",
      "Demand Planning",
      "Asset & Materials Management",
      "Asset Reliability & Maintenance Analytics",
      "Supplier & Procurement Intelligence",
      "Order Fulfillment Enablement",
      "Sustainability & ESG Visibility",
      "Supply Chain Intelligence",
    ],
  },
  {
    image: Service3,
    title: "Industry-Focused Digital Solutions",
    solutions: [
      "Industry Digital Platforms",
      "Customer & Patient Engagement",
      "Core & Industry System Integration",
      "Revenue & Financial Automation",
      "Operations & Capacity Intelligence",
      "Asset-Intensive Operations Enablement",
      "Production & Utilization Analytics",
      "Asset Lifecycle Intelligence",
      // "Regulatory & Compliance Management",
      // "HSSE & Safety Analytics",
      // "Industry Data Models",
      // "Industry Decision Dashboards",
    ],
  },
  {
    image: Service4,
    title: "Data, Analytics & Automation Accelerators",
    solutions: [
      "Enterprise Data Platforms",
      "BI & Visualization",
      "Executive KPI Dashboards",
      "Predictive & Prescriptive Analytics",
      "AI / ML Enablement",
      "Intelligent Automation",
      "Digital Twins & Simulation",
      "ERP & CRM Accelerators",
      "Integration & API Frameworks",
      "Data Governance & Privacy",
    ],
  },
];

export default WhatWeOfferSection;
