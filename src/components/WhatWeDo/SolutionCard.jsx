import React from "react";

const SolutionCard = ({ image, title, description }) => {
  return (
    <div
      className="group w-[394px] h-[364px] border-[0.5px] border-[#CFCFE2] rounded-4xl p-8 flex flex-col items-center justify-start bg-white hover:bg-[#0085F6] active:bg-[#0085F6]
 transition-all duration-500 cursor-pointer"
    >
      <img
        src={image}
        alt={title}
        className="w-[75px] h-[75px]
    transition-all duration-500
    lg:group-hover:invert lg:group-hover:brightness-0 lg:group-hover:contrast-200
    group-active:invert group-active:brightness-0 group-active:contrast-200"
      />
      <h3 className="font-onest h-[50px] text-[26px] font-medium leading-[115%] tracking-normal text-[#021933] mt-8 text-center group-hover:text-white group-active:text-white transition-all duration-500">
        {title}
      </h3>
      <p className="font-onest text-[18px] font-medium leading-[130%] tracking-normal text-[#021933] mt-6 text-center group-hover:text-white group-active:text-white transition-all duration-500">
        {description}
      </p>
    </div>
  );
};

export default SolutionCard;
