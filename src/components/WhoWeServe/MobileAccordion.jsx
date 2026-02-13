import { useState } from "react";
import topArrow from "../../assets/topArrow.svg";

function MobileAccordion({ tabs }) {
  const [openId, setOpenId] = useState(tabs?.[0]?.id ?? null);

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
            className={`overflow-hidden border-t-4 ${isOpen ? "border-[#0085F6]" : "border-[#021933]/40"}`}
          >
            {/* Header */}
            <button
              onClick={() => toggle(tab.id)}
              className="w-full text-left px-5 py-4 bg-white flex justify-between items-center"
            >
              <span
                className={`font-onest text-[18px] font-medium leading-[115%] tracking-normal ${isOpen ? "text-[#0085F6]" : "text-[#021933]/40"} `}
              >
                {tab.label}
              </span>

              <span
                className={`transition-transform duration-300 ${
                  isOpen ? "" : "rotate-180"
                }`}
              >
                <img
                  src={topArrow}
                  alt="▲"
                  className={`w-[30px] ${isOpen ? "grayscale-0 opacity-100" : "grayscale opacity-40"} transition duration-300 cursor-pointer`}
                />
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
