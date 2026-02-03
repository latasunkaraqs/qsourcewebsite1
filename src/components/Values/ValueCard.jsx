import React from "react";

const ValueCard = ({ number, heading, description }) => {
  return (
    <div className="flex flex-col gap-3 max-w-[338px]">
      <div className="font-onest text-[100px] font-bold leading-[100%] tracking-normal text-transparent [-webkit-text-stroke:0.5px_white] -ml-[6px]">
        {number}
      </div>
      <div>
        <h3 className="font-onest text-[24px] font-bold leading-[120%] tracking-[-0.03em] text-white">
          {heading}
        </h3>
        <div className="w-full h-[1px] bg-white my-4"></div>
      </div>
      <div>
        <p className="font-onest text-[19px] font-normal leading-[130%] tracking-[-0.05em] text-white/80">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ValueCard;
