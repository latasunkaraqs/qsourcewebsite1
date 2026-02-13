import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const DesktopTab = ({ tabs }) => {
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
    <div className="w-full h-[608px]">
      {/* Content Panel */}
      <div className="w-full h-[480px] relative overflow-hidden">
        {tabs.map((tab, i) => (
          <div
            key={tab.id}
            ref={(el) => (panelsRef.current[i] = el)}
            style={{ backgroundImage: `url(${tab.backgroundImage})` }}
            className="absolute inset-0 w-full h-[480px] bg-cover bg-center opacity-0"
          >
            <div className="w-full h-full bg-black/25 pt-[40px] px-6 lg:px-[65px] flex flex-col">
              {/* Top Content — fixed height + scroll */}
              <div className="h-[160px] overflow-hidden pr-2">
                <p className="content-text font-onest text-[26px] lg:text-[32px] xl:text-[37px] font-medium leading-[130%] tracking-normal text-white">
                  {tab.content}
                </p>
              </div>

              {/* Outcomes Section — fixed anchor */}
              <div className="mt-12 flex-1 flex flex-col min-h-0">
                <p className="mb-6 font-onest text-[25px] font-medium leading-[115%] tracking-normal text-white">
                  Key Outcomes
                </p>

                <div className="flex-1 min-h-0 overflow-y-auto">
                  {tab.outcomes && <tab.outcomes />}
                </div>
              </div>
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
              className="text-left cursor-pointer flex flex-col justify-start"
            >
              <div
                className={`max-w-[265px] h-[5px] mt-6 mb-3 transition-all duration-300 ${
                  isActive ? "bg-[#0085F6]" : "bg-[#021933]/40"
                }`}
              />

              <span
                className={`max-w-[200px] font-onest text-[21px] font-medium leading-[115%] tracking-normal transition-colors duration-300 ${
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
  );
};

export default DesktopTab;
