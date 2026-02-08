import { useState } from "react";

function MobileAccordion({ tabs }) {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="block lg:hidden w-full mt-10 space-y-4">
      {tabs.map((tab) => {
        const isOpen = openId === tab.id;

        return (
          <div
            key={tab.id}
            className="rounded-xl overflow-hidden border border-[#021933]/15"
          >
            {/* Header */}
            <button
              onClick={() => toggle(tab.id)}
              className="w-full text-left px-5 py-4 bg-[#F7FAFF] flex justify-between items-center"
            >
              <span className="font-onest text-[18px] font-medium">
                {tab.label}
              </span>

              <span
                className={`transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {/* Body */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                isOpen ? "max-h-[900px]" : "max-h-0"
              }`}
            >
              <div
                className="bg-cover bg-center"
                style={{ backgroundImage: `url(${tab.backgroundImage})` }}
              >
                <div className="bg-black/40 p-5">
                  <p className="content-text font-onest text-[18px] leading-[140%] text-white">
                    {tab.content}
                  </p>

                  <p className="mt-8 mb-4 font-onest text-[18px] font-medium text-white">
                    Key Outcomes
                  </p>

                  <div className="text-white">
                    {tab.outcomes && <tab.outcomes />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MobileAccordion;
