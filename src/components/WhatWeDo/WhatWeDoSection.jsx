import React from "react";

const WhatWeDoSection = () => {
  return (
    <div className="flex flex-col py-20 px-20 items-center justify-center gap-5">
      <div className="grid grid-cols-[2fr_3fr] items-center">
        <h2 className="font-onest text-[60px] font-bold leading-[100%] tracking-[-0.03em] text-[#021933]">
          What We <span className="text-[#0085F6]">Do</span>
        </h2>

        <p className="font-onest text-[20px] font-medium leading-[130%] tracking-[-0.05em] text-[#021933]">
          End-to-end technology services designed to support enterprise
          transformation and sustained performance. Each service can be engaged
          independently or combined as a part of a cohesive, end-to-end delivery
          model.
        </p>
      </div>

      <div className="grid grid-cols-4"></div>
    </div>
  );
};

export default WhatWeDoSection;
