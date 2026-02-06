// import { useState, useEffect } from "react";
import bullet from "../../assets/bullet.svg";

const ServiceCard = ({ image: Image, title, solutions }) => {
  return (
    <div className="group border border-[#0085F6] rounded-[20px] pt-6 flex flex-col gap-5 items-center justify-center bg-[#0085F6]">
      <div className="w-full justify-start px-6">
        <Image />
      </div>

      <h3 className="w-full px-6 text-white font-onest text-[28px] font-bold leading-[100%] tracking-[-0.03em]">
        {title}
      </h3>
      <div className="w-full mt-7 bg-white rounded-[20px] px-6 py-8">
        <ul>
          {solutions.map((solution, idx) => {
            return (
              <li key={idx} className="flex gap-3 items-start py-2">
                <img src={bullet} alt="*" className="mt-1.25" />
                <p className="font-onest text-[16px] font-medium tracking-[0.03em]">
                  {solution}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
