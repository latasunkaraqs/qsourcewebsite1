import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import * as Outcomes from "./Outcomes";

const WhoWeServeSection = () => {
  const [active, setActive] = useState(1);
  const panelsRef = useRef([]);

  // initial visible panel
  useEffect(() => {
    gsap.set(panelsRef.current[0], { opacity: 1 });
  }, []);

  // animate on tab change
  useEffect(() => {
    const currentIndex = active - 1;

    panelsRef.current.forEach((panel, i) => {
      if (!panel) return;

      if (i === currentIndex) {
        // fade in panel
        gsap.to(panel, {
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          pointerEvents: "auto",
        });

        // stagger inner content
        gsap.fromTo(
          panel.querySelectorAll(
            ".content-text, .content-sub, .content-outcomes > *",
          ),
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.7,
            stagger: 0.06,
            // delay: 0.1,
            ease: "power1.out",
          },
        );
      } else {
        gsap.to(panel, {
          opacity: 0,
          duration: 0.7,
          ease: "power2.out",
          pointerEvents: "none",
        });
      }
    });
  }, [active]);
  // auto change tabs every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev === tabs.length ? 1 : prev + 1));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col py-20 px-4 lg:px-20 items-center justify-center gap-5">
      <h2 className="font-onest text-[60px] font-bold leading-[115%] tracking-normal text-[#021933]">
        Who We <span className="text-[#0085F6]">Serve</span>
      </h2>

      <p className="font-onest text-[20px] font-medium leading-[130%] tracking-normal text-[#021933]">
        Deep industry expertise across enterprise, public sector and regulated
        environments.
      </p>

      <div className="w-full h-[608px] mt-15">
        {/* Content Panel */}
        <div className="w-full h-[511px] relative">
          {tabs.map((tab, i) => (
            <div
              key={tab.id}
              ref={(el) => (panelsRef.current[i] = el)}
              className="absolute inset-0 w-full h-[511px] pt-[95px] px-[65px] bg-cover bg-center opacity-0"
              style={{ backgroundImage: `url(${tab.backgroundImage})` }}
            >
              <p className="content-text font-onest text-[37px] font-medium leading-[130%] tracking-normal text-white">
                {tab.content}
              </p>

              <p className="content-sub mt-18 mb-8 font-onest text-[25px] font-medium leading-[115%] tracking-normal text-white">
                Key Outcomes
              </p>

              <div className="content-outcomes">
                {tab.outcomes && <tab.outcomes />}
              </div>
            </div>
          ))}
        </div>

        {/* Tabs Panel */}
        <div className="w-full grid grid-cols-4 gap-25">
          {tabs.map((tab) => {
            const isActive = active === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className="text-left cursor-pointer"
              >
                <div
                  className={`w-[265px] h-[5px] mt-6 mb-3 transition-all duration-300 ${
                    isActive ? "bg-[#0085F6]" : "bg-[#021933]/40"
                  }`}
                />

                <span
                  className={`font-onest text-[21px] font-medium leading-[115%] tracking-normal transition-colors duration-300 ${
                    isActive ? "text-[#0085F6]" : "text-[#021933]/40"
                  }`}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const tabs = [
  {
    id: 1,
    backgroundImage: "src/assets/industryimage1.png",
    label: (
      <>
        Core Enterprise <br />
        Industries
      </>
    ),
    content:
      "Scalable infrastructure that grows with your business. From microservices to monoliths, we architect for the long term.",
    outcomes: Outcomes.EnterpriseOutcomes,
  },
  {
    id: 2,
    backgroundImage: "src/assets/industryimage2.png",
    label: (
      <>
        Government & <br />
        Public Sector
      </>
    ),
    content:
      "Connect your ecosystem seamlessly. We bridge legacy systems with modern platforms without disrupting operations.",
    outcomes: Outcomes.GovernmentOutcomes,
  },
  {
    id: 3,
    backgroundImage: "src/assets/industryimage3.png",
    label: (
      <>
        Commercial & Growth <br />
        Industries
      </>
    ),
    content:
      "Intelligent automation that delivers ROI. We implement AI where it matters—practical solutions, not experiments.",
    outcomes: Outcomes.CommercialOutcomes,
  },
  {
    id: 4,
    backgroundImage: "src/assets/industryimage3.png", // Image Missing
    label: (
      <>
        Emerging & <br />
        Specialized Sectors
      </>
    ),
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", // Content Missing
    outcomes: Outcomes.SpecialOutcomes,
  },
];

export default WhoWeServeSection;
