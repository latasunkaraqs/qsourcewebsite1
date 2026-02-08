import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import * as Outcomes from "./Outcomes";

const WhoWeServeSection = () => {
  const [active, setActive] = useState(1);
  const panelsRef = useRef([]);
  const pauseAutoRef = useRef(false);
  const pauseTimeoutRef = useRef(null);

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
      if (pauseAutoRef.current) return;

      setActive((prev) => (prev === tabs.length ? 1 : prev + 1));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleTabSelect = (id) => {
    setActive(id);

    // pause auto rotation
    pauseAutoRef.current = true;

    // clear previous timeout if user clicks again
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }

    // resume after 1 minute
    pauseTimeoutRef.current = setTimeout(() => {
      pauseAutoRef.current = false;
    }, 60000);
  };

  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto flex flex-col py-10 md:py-15 items-center justify-center gap-5 px-6 md:px-10 ">
      <h2 className="font-onest text-[40px] md:text-[56px] lg:text-[60px] font-bold leading-[100%] tracking-[-0.03em] text-[#021933]">
        Who We <span className="text-[#0085F6]">Serve</span>
      </h2>

      <p className="font-onest text-[20px] font-medium leading-[130%] tracking-[-0.05em] text-[#021933] text-center max-w-[750px]">
        Enterprises and institutions across regulated, asset-intensive, and
        growth-oriented sectors. Our industry exposure reflects deep familiarity
        with complex operations, regulatory landscapes, and large-scale business
        environments.
      </p>

      <div className="w-full h-[608px] mt-15">
        {/* Content Panel */}
        <div className="w-full h-[511px] relative">
          {tabs.map((tab, i) => (
            <div
              key={tab.id}
              ref={(el) => (panelsRef.current[i] = el)}
              className="absolute inset-0 w-full h-[511px] bg-cover bg-center opacity-0"
              style={{ backgroundImage: `url(${tab.backgroundImage})` }}
            >
              <div className="w-full h-full bg-black/35 pt-[60px] px-6 lg:px-[65px]">
                <p className="content-text font-onest text-[26px] lg:text-[32px] xl:text-[37px] font-medium leading-[130%] tracking-[-0.05em] text-white">
                  {tab.content}
                </p>

                <p className="mt-18 mb-8 font-onest text-[25px] font-medium leading-[100%] tracking-[-0.03em] text-white">
                  Key Outcomes
                </p>

                <div>{tab.outcomes && <tab.outcomes />}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs Panel */}
        <div className="w-full grid grid-cols-4 gap-11 items-start justify-start">
          {tabs.map((tab) => {
            const isActive = active === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => handleTabSelect(tab.id)}
                className="text-left cursor-pointer"
              >
                <div
                  className={`max-w-[265px] h-[5px] mt-6 mb-3 transition-all duration-300 ${
                    isActive ? "bg-[#0085F6]" : "bg-[#021933]/40"
                  }`}
                />

                <span
                  className={`font-onest text-[21px] font-medium leading-[120%] tracking-[-0.03em] transition-colors duration-300 ${
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
      "Organizations operating complex, asset-intensive, and mission-critical environments where continuity, governance, and scale are non-negotiable.",
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
      "Public institutions and agencies navigating policy-driven mandates, citizen services, national infrastructure, and long-term public accountability.",
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
      "Business-driven sectors focused on expansion, customer experience, operational efficiency, and adapting to rapidly changing market dynamics.",
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
      "Organizations operating in evolving, purpose-driven, or innovation-led environments with unique constraints, funding models, and growth trajectories.", // Content Missing
    outcomes: Outcomes.SpecialOutcomes,
  },
];

export default WhoWeServeSection;
