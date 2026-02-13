import React from "react";

const ValueCard = ({ number, heading, description }) => {
  return (
    <div className="flex flex-col gap-3 max-w-[338px]">
      <div className="font-onest text-[100px] font-bold leading-[115%] tracking-normal text-transparent [-webkit-text-stroke:0.5px_white] -ml-[6px] text-center md:text-left">
        {number}
      </div>
      <div>
        <h3 className="font-onest text-[24px] font-bold leading-[115%] tracking-normal text-white text-center md:text-left">
          {heading}
        </h3>
        <div className="w-full h-[1px] bg-white my-4"></div>
      </div>
      <div>
        <p className="font-onest text-[19px] font-normal leading-[130%] tracking-normal text-white/80 text-center md:text-left">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ValueCard;
