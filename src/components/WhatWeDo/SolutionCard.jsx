import React from "react";

const SolutionCard = ({ image, title, description }) => {
  return (
    <div className="group w-[394px] h-[384px] border-[0.5px] border-[#CFCFE2] rounded-4xl px-8 py-10 flex flex-col items-center justify-center bg-white hover:bg-[#0085F6] transition-all duration-500 cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-[75px] h-[75px] group-hover:invert group-hover:brightness-0 group-hover:contrast-200 transition-all duration-500"
      />
      <h3 className="font-onest text-[26px] font-medium leading-[100%] tracking-[-0.03em] text-[#021933] mt-18 text-center group-hover:text-white transition-all duration-500">
        {title}
      </h3>
      <p className="font-onest text-[18px] font-medium leading-[130%] tracking-[-0.05em] text-[#021933] mt-8 text-center group-hover:text-white transition-all duration-500">
        {description}
      </p>
    </div>
  );
};

export default SolutionCard;
