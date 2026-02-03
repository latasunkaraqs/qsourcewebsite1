import React from "react";

const WhatWeOfferSection = () => {
  return (
    <div className="flex flex-col py-20 px-20 items-center justify-center gap-5">
      <h2 className="font-onest text-[60px] font-bold leading-[100%] tracking-[-0.03em] text-[#021933]">
        What We <span className="text-[#0085F6]">Offer</span>
      </h2>

      <p className="font-onest text-[20px] font-medium leading-[130%] tracking-[-0.05em] text-[#021933] max-w-[743px]">
        Purpose-built solutions and accelerators designed to solve real
        enterprise challenges.
      </p>
      <div className="grid grid-cols-4"></div>
    </div>
  );
};

export default WhatWeOfferSection;
